# Re-gret

![re_gret](https://github.com/rschenk/re-gret/blob/main/images/IMG_0812.jpeg?raw=true)

A 34-key keyboard powered by a Seeed XIAO RP2040, with hot-swappable ChocV1 switches.

* Keyboard Maintainer: [Ryan Schenk](https://github.com/rschenk)
* Hardware Supported: Re-gret PCB with Seeed XIAO RP2040 controller
* Hardware Availability: Gerbers are available in the [Re-gret repo](https://github.com/rschenk/re-gret) and the controller is available from [Seeed Studio](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)

Make example for this keyboard (after setting up your build environment):

    make re_gret:default

Flashing example for this keyboard:

    make re_gret:default:flash

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the top-left key ("Q" on qwerty) and plug in the keyboard
* **Physical reset button**: Double click the reset button
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available
