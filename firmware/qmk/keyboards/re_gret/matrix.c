// Copyright 2024 Ryan Schenk (@rschenk)
// Copyright 2022 @sadekbaroudi (Sadek Baroudi)
// SPDX-License-Identifier: GPL-3.0-or-later
#include "quantum.h"
#include "spi_master.h"
#include <string.h> /* memset */
#include <unistd.h> /* close */
#include "quantum.h"
#include "matrix.h"
#ifdef FP_SR595_MATRIX_DEBUG
#include <time.h>
#include <stdlib.h>
#define FP_SR595_MATRIX_DEBUG_RATIO 10000
#endif

#if (!defined(SHIFTREG_MATRIX_ROW_CS))
#    error Missing shift register I/O pin definitions
#endif

int matrixArraySize = MATRIX_ROWS * sizeof(matrix_row_t);
matrix_row_t oldMatrix[MATRIX_ROWS];

#define SHIFTREG_OUTPUT_BITS 8
pin_t colPinsSR[MATRIX_COLS] = MATRIX_COL_PINS;
uint8_t rowPinCodesSR[SHIFTREG_ROWS] = SHIFTREG_ROW_PINS;

// semaphore to make sure SPI doesn't get called multiple times
static bool shiftRegisterSPILocked = false;

void semaphore_lock(bool value) {
    shiftRegisterSPILocked = value;
}

bool semaphore_is_locked(void) {
    return shiftRegisterSPILocked;
}

void sr_74hc595_spi_stop(void) {
    spi_stop();
    semaphore_lock(false);
}

bool sr_74hc595_spi_start(void) {
    if (!spi_start(SHIFTREG_MATRIX_ROW_CS, false, 0, SHIFTREG_DIVISOR)) {
        dprintf("74hc595 matrix: failed to start spi\n");
        sr_74hc595_spi_stop();
        return false;
    }

    semaphore_lock(true);
    wait_us(1); // not sure if I need this
    return true;
}

bool sr_74hc595_spi_send_byte(uint8_t data) {
    sr_74hc595_spi_start();
    gpio_write_pin_low(SHIFTREG_MATRIX_ROW_CS);
    matrix_io_delay();
    spi_write(data);
    matrix_io_delay();
    gpio_write_pin_high(SHIFTREG_MATRIX_ROW_CS);
    sr_74hc595_spi_stop();
    return true;
}

/**
 * Set the entire shift register to be full of inactive bits
 */
void clearRows(void) {
    uint8_t value = 0b00000000;
    sr_74hc595_spi_send_byte(value);
}

void setRow(int rowNumber, bool test_run) {
    uint8_t rowShiftByte = rowPinCodesSR[rowNumber];
    if(test_run) {
        dprintf("byte sent: %d\n", rowShiftByte);
    }
    sr_74hc595_spi_send_byte(rowShiftByte);
}

/*
 * Override QMK matrix initialization
 */
void matrix_init_custom(void) {
    wait_ms(300);
    spi_init();

    // Set up initial states for all the column pins
    for(int c = 0; c < SHIFTREG_COLS; c++) {
        // Note: This needs to use the internal pull down resistors, and atmegas
        // do *not* support that
        gpio_set_pin_input_low(colPinsSR[c]);
    }

    // Set the CS to low by default, and specify as an output pin
    gpio_write_pin_high(SHIFTREG_MATRIX_ROW_CS); // should be high when using SPI?
    gpio_set_pin_output(SHIFTREG_MATRIX_ROW_CS);

    // Since it's the init, deactivate all the columns. We'll activate once we
    // get to the matrix scan
    clearRows();
}

/*
 * Override QMK matrix scan
 */
bool matrix_scan_custom(matrix_row_t current_matrix[]) {
    // respect the semaphore
    if (semaphore_is_locked()) {
        return false;
    }

    bool matrix_has_changed = false;

    // reset the current matrix, as we'll be updating and comparing to the old matrix
    memset(current_matrix, 0, matrixArraySize);

#ifdef FP_SR595_MATRIX_DEBUG
    bool debug_output = ((rand() % FP_SR595_MATRIX_DEBUG_RATIO) == 1);
#else
    bool debug_output = false;
#endif

    // Loop through the rows, activating one at a time, and read the columns,
    // and place in the new current_matrix
    for (int r = 0; r < SHIFTREG_ROWS; r++) {
        if (debug_output) {
            dprintf("row iteration: %d\n", r);
        }
        setRow(r, debug_output);
        matrix_io_delay();

        for (int c = 0; c < SHIFTREG_COLS; c++) {
            current_matrix[r] |= ((gpio_read_pin(colPinsSR[c]) ? 1 : 0) << c);
        }
    }

    matrix_has_changed = memcmp(current_matrix, oldMatrix, matrixArraySize) != 0;
    memcpy(oldMatrix, current_matrix, matrixArraySize);

#ifdef FP_SR595_MATRIX_DEBUG
    if (matrix_has_changed) {
        matrix_print();
    }
#endif

    // Deactivate all the columns for the next run.
    clearRows();
    matrix_io_delay();

    return matrix_has_changed;
}