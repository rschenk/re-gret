# Re-gret PCB Build Guide

## Parts for the circuit board

| Part                                | Quantity | Footprint | Value                            | Comments                                                     |
| ----------------------------------- | -------- | --------- | -------------------------------- | ------------------------------------------------------------ |
| XIAO compatible controller          | 1        | XIAO      | XIAO BLE, XIAO, XIAO RP2040      | [Seeed Studio XIAO](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) or [Adafruit Qt Py](https://www.adafruit.com/category/595) |
| Shift register                      | 1        | SOIC-16   | SN74HC595                        | SN74HC595DRG3 from TI ([DigiKey](https://www.digikey.com/en/products/detail/texas-instruments/SN74HC595DRG3/2600341)) |
| Socket headers                      | 2        |           | Mill-Max 310-43-107-41-001000    | Mill-Max 310 series for wireless ([DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/310-43-107-41-001000/1212181)). You could also use low profile Mill-Max 315 series for a *wired-only version that also forgoes a reset button on the PCB.* ([DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/315-43-107-41-001000/4455221?s=N4IgTCBcDaIMwEYCsBaALHFCAMB2dCK22OxIAugL5A)) |
| Socket pins                         | 14       |           | Mill-Max 3320-0-00-15-00-00-03-0 | For socketing the controller. [DigiKey](https://www.digikey.com/en/products/detail/mill-max-manufacturing-corp/3320-0-00-15-00-00-03-0/4147392?s=N4IgTCBcDaIMxzABgLSqagjAVje9caAOgC4gC6AvkA) or use diode/resistor legs. Buy like 5 extras, you'll lose them. |
| Pogo pins                           | 2        |           | Mill-Max 0906-2-15-20-75-14-11-0 | For reset and battery conection. Optional if you want a wired build with no reset button on the board. |
| LEDs                                | 11       | 5050      | WS2812B                          | aka Neopixels. There are several compatble chips, just makes sure you get the 5050 package. [DigiKey](https://www.digikey.com/en/products/detail/sparkfun-electronics/COM-16347/11630204) |
| Kailh Choc hot swap sockets         | 34       |           | CPG135001S30                     | [DigiKey](https://www.digikey.com/en/products/detail/adafruit-industries-llc/5118/14671678) |
| Diodes                              | 35       | SOD123    | 1N4148W                          | If doing RGB undeglow you need 35, yes thirty five. If not doing RGB, you only need 34. [DigiKey](https://www.digikey.com/en/products/detail/smc-diode-solutions/1N4148W/6022450) |
| Reset button                        | 1        |           | Panasonic EVQPUC02K              | [DigiKey](https://www.digikey.com/en/products/detail/panasonic-electronic-components/EVQ-PUM02K/286341) |
| Slider switch                       | 1        |           | PCM12                            | Required for wireless, not needed for wired. MSK-12C02, or pretty sure CUS-12TB ([Digikey](https://www.digikey.com/en/products/detail/nidec-copal-electronics/CUS-12TB/1124222?s=N4IgTCBcDaIMYFcDOBaAjGALgIxAXQF8g)) will work but I haven't tried it. |
| JST PH2.0 battery jack (board side) | 1        |           | JST S2B-PH-K-S                   | Nice for wireless, not needed for wired. You could also just solder the battery leads to the PCB.  [DigiKey](https://www.digikey.com/en/products/detail/jst-sales-america-inc/S2B-PH-K-S-LF-SN/926626) |
| JST PH2.0 plug (battery side)       | 1        |           | JST PHR-2                        | A plug for the battery. Not needed for wired version or if soldering the battery to PCB [DigiKey](https://www.digikey.com/en/products/detail/jst-sales-america-inc/PHR-2/608607) |
| JST PH crimp connectors             | 2        |           | SPH-002T-P0.5L                   | Crimp connectors for the battery leads to go into the plug. For 28AWG wire. Ditto on wired version remarks. [DigiKey](https://www.digikey.com/en/products/detail/jst-sales-america-inc/SPH-002T-P0-5L/1300246) |
| Battery                             | 1        | 350820    | 40mAh                            | [Tiny Circuits](https://tinycircuits.com/collections/batteries/products/lithium-ion-polymer-battery-3-7v-40mah) |

## PCB Assembly

### Shift register

The first component to solder is the shift register, which has tiny pins and needs to be drag-soldered. Drag soldering is a technique where a tiny blob of solder is dragged back and forth across the pins instead of soldering each pin individually. If you've never done it before it sounds scary but it's actually very easy. The key is to use flux (I like [Chip Quik SMD291-5M](https://www.digikey.com/en/products/detail/chip-quik-inc/SMD291-5M/14636558)) which makes the whole thing kinda just work. [Here's a video](https://www.youtube.com/watch?v=wUyetZ5RtPs).

Tin one pad of the shift register footprint on the PCB. There's a dot on the shift register chip, and you'll notice the PCB silk screen has one long line and one short line. Line up the chip carefully with the dot towards the long line, then tack down the respective pin on the tinned pad. Make sure the chip is perfectly lined up with all the pads, then tack down the opposite corner. Now put flux along the row of pins, melt a tiny dab of solder on the tip of your iron, then drag it back and forth along the pins a few times. Have a look with a magnifying glass to make sure there are no bridges, then do the other side.

### RGB LEDs

First of all there is one diode near LED-1 that allows the 3.3v logic of the Xiao to control the 5v LEDs. You should solder that on now while there's nothing in the way. Then do the RGBs.

There is a great [video of how to solder these LEDs](https://twitter.com/GTIPS_SH/status/1204244088867807234?s=20) courtesy of Reviung. Tin one pad, tack the LED down, then do the other three pins with a dab of solder on the iron. Please pay attention to the silk screen on the board, there is a little notch cut out of the component, that will need to align with the corresponding notch on the silk screen. I like about 300ºC on the soldering iron. Much like the shift register, using flux is the difference between this being easy and annoying.

### Easy stuff

The reset button and power switch are easy and follow the same pattern: tin one pad, tack down the component, then solder on the rest of the pins. I do the same process with the hotswap sockets, tin one pad, place the socket, tack down that pad, then solder on the other one. 

Then do the controller sockets next. I put the controller in the sockets, then tape the whole thing down to the front of the board, flip it over and solder it. 

Solder the diodes onto the top next. Pay attention to the diode orientation, there's a line on the diode that matches up with the vertical line on the silkscreen.

The battery socket also goes in on the top side. You could also just solder the battery wires directly to the board. You will see that there is a `+` marked on the board, that's for the positive (red) lead on the battery.

### Pogo pins

I found these to be the most annoying part of the build. Take the controller out of the sockets. The two pogo pins are in between the sockets, under where the controller will go. The idea is to melt some solder in each hole, then hold the pin with tweezers over the hole while you reflow the solder in the hole and shove the pin in. I found this pretty fiddly and annoying.