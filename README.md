# Re-gret Keyboard

The Re-gret is a 34 key remix of my [Egret](https://github.com/rschenk/egret) keyboard.

Featuring: 34 keys, Choc spacing, Choc v1 hot swappable, Seeed Xiao MCU, wireless compatible, RGB undeglow when plugged in, and a silicone gasket sandwich stackup.

Compared to the original Egret, besides having two thumb buttons per side, the Re-gret has a more angle between the halves, and the ring and pinky fingers have more stagger and more splay. It also has a Xiao MCU which is cheaper and cuter than a Nice Nano. Certainly a more re-fined re-mix that I have no re-grets about making.

![Re-gret Bluetooth Mode](images/IMG_0805.jpeg)

![Re-gret Underglow](images/IMG_0812.jpeg)

## Build guide

Check the docs for a [PCB Build Guide](docs/pcb_build_guide.md) and [Case Build Guide](docs/case_build_guide.md).

## RGB Underglow

I powered the RGB underglow directly from the USB 5v, so it will automagically turn itself off when in wireless bluetooth mode. There's no need for ZMK's [External Power Control](https://zmk.dev/docs/behaviors/power#external-power-control) because you physically can't run the LEDs from battery power even if you wanted to. There's a [clever trick](https://hackaday.com/2017/01/20/cheating-at-5v-ws2812-control-to-use-a-3-3v-data-line/) using a diode that allows the 5v LEDs to be controlled by the Xiao's 3.3v logic. 

## Firmware

### ZMK

Copy the contents of `firmware/zmk/config/boards/shields/regret/` into `[your-zmk-config]/config/boards/shields/regret/`

Be advised that right now the underglow only works on the XIAO nRF52840 board, and does not work on the XIAO RP2040 (although it [might in the future](https://github.com/zmkfirmware/zmk/issues/1085)). The original XIAO SAMD21 should work but I haven't tested it.

| Board                 | Chip     | USB Wired          | Bluetooth Wireless | RGB Underglow      | Comments                                                     |
| --------------------- | -------- | ------------------ | ------------------ | ------------------ | ------------------------------------------------------------ |
| XIAO                  | SAMD21   | :white_check_mark: | :x:                | :x:                | Should work but untested                                     |
| XIAO BLE              | nRF52840 | :white_check_mark: | :white_check_mark: | :white_check_mark: |                                                              |
| XIAO RP2040           | RP2040   | :white_check_mark: | :x:                | :x: for now        | Underglow [maybe someday](https://github.com/zmkfirmware/zmk/issues/1085) |

### QMK

Copy the contents of `firmware/qmk/keyboards/re_gret` into `[your_qmk_firmware]/keyboards/re_gret`, since I have not put the Re-gret firmware into the official QMK repo.

Only the XIAO RP2040 is supported. The Adafruit QT Py RP2040 might possibly work but I don't think the reset button will function.

| Board                 | Chip     | USB Wired          | RGB Underglow      | Comments                                                     |
| --------------------- | -------- | ------------------ | ------------------ | ------------------------------------------------------------ |
| XIAO RP2040           | RP2040   | :white_check_mark: | :white_check_mark: |  |

## Related

* I cribbed the Xiao footprint, pogo pin idea, and battery from the [revxlp](https://gitlab.com/lpgalaxy/revxlp)
* I based the QMK shift register matrix code on [Sadek's](https://github.com/sadekbaroudi/qmk_firmware)
* My original 36 key [Egret](https://github.com/rschenk/egret) was the starting point
