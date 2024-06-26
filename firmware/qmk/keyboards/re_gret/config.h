// Copyright 2024 Ryan Schenk (@rschenk)
// SPDX-License-Identifier: GPL-2.0-or-later

#pragma once

#define MATRIX_COLS 5
#define MATRIX_ROWS 8

#define SPI_SCK_PIN GP2
#define SPI_MOSI_PIN GP3
#define SPI_MISO_PIN NO_PIN

#define SHIFTREG_MATRIX_ROW_CS GP4
#define SHIFTREG_DIVISOR 8
#define SHIFTREG_COLS 5
#define SHIFTREG_ROWS 8

#define MATRIX_COL_PINS { GP27, GP28, GP29, GP6, GP7 }
// Row Number 0 1 2 3 4 5 6 7       
// SHR Pin Q: H G F E A B C D
#define SHIFTREG_ROW_PINS { 0x80, 0x40, 0x20, 0x10, 0x01, 0x02, 0x04, 0x08 }

#define WS2812_DI_PIN GP26
#define RGBLIGHT_LED_COUNT 11

#ifdef RGBLIGHT_ENABLE
  #define RGBLIGHT_EFFECT_RAINBOW_SWIRL   // enable rainbow swirl
  #define RGBLIGHT_SLEEP                  // turn off LEDs when host sleeps
  #define RGBLIGHT_LAYERS                 // per-layer LED effects
  #define RGBLIGHT_DEFAULT_MODE RGBLIGHT_MODE_RAINBOW_SWIRL
#endif