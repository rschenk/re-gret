# Re-gret Case Build Guide

The Re-gret has a laser cut sandwich case of 1.5mm (1/16") acrylic and 0.7mm (1/32") silicone. The stackup looks like this:

```
switch plate
top gasket
PCB
bottom gasket
inner bottom plate
outer bottom plate
```

Also on the top gasket, there are a full set of my [Choc bumpers](https://github.com/rschenk/choc-bumpers) in the otherwise wasted material where the switch cutouts are.

## Parts to laser

| **Part**/File                                               | Quantity | Comments                                                     |
| ----------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| [Top plate](../case/Regret_Top_Plate.pdf)                   | 1        | 1.5mm (1/16") acrylic. [Canal Plastics](https://www.canalplastic.com/collections/opaque-colored-acrylic-sheets?filter.v.price.lte=&filter.v.option.thickness=1%2F16%22+%280.060%22+%2F+1.5mm%29&sort_by=manual&dropdown=open) |
| [Top gasket](../case/Regret_Top_Gasket.pdf)                 | 1        | 0.7mm (1/32") silicone. I like silicone placemats from [Amazon](https://www.amazon.com/gp/product/B088LKLSTG/). This from [McMaster](https://www.mcmaster.com/86465K21) would also probably work but I haven't tried it. |
| [Bottom gasket](../case/Regret_Bottom_Gasket.pdf)           | 1        | 0.7mm (1/32") silicone. Ditto                                |
| [Inner bottom plate](../case/Regret_Bottom_Plate_Inner.pdf) | 1        | 1.5mm (1/16") acrylic. For best underglow action, you want to use frosted acrylic such as the Satin Ice (also the name of my RNB band) from [Canal  Plastics](https://www.canalplastic.com/collections/acrylic-sheets/products/0d010-df-frosted-satin-ice-acrylic-sheet?variant=32918342606) |
| [Outer bottom plate](../case/Regret_Bottom_Plate_Outer.pdf) | 1        | 1.5mm (1/16") frosted acrylic. Ditto                         |
| [MCU cover](../case/Regret_MCU_Cover.pdf)                   | 1        | You could use the same frosted 1.5mm (1/16") acrylic as the bottom plates, however I prefer the look of this 3mm matte finish acrylic from [Makerstock](https://makerstock.com/products/acrylic-frosted-clear-frosted-acrylic) |

 

## Laser cutter settings

These are specific to the laser cutter that I use, a Glowforge Pro. If you have one then you can use these settings:

| Material                                                     | Speed | Power | LPI  |
| ------------------------------------------------------------ | ----- | ----- | ---- |
| 1/16" acrylic cutting                                        | 241   | Full  | —    |
| 1/16" acrylic raster engraving (footpad wells on the bottom) | 544   | 60    | 270  |
| 1/32" silicone cutting                                       | 204   | 75    | —    |

## Hardware

For the hardware you can either use wafer head screws, or countersunk flat head screws. You'll need a drill press and countersinking bit to utilize the latter, but that's how I do it.

| Part                     | Quantity | Comments                                                     |
| ------------------------ | -------- | ------------------------------------------------------------ |
| 6mm M2 wafer head screws | 12       | **Option 1 of 2.** Use this option if you do not have a drill press. [Metric Screws US](https://www.metricscrews.us/index.php?main_page=index&cPath=155_156_162&zenid=ehth7nvdt09u23fh2sd1oqksk7) has singles |
| 6mm M2 flat head screws  | 12       | **Option 2 of 2.** Use this option if you have a drill press and countersink bit, to get the flattest possible design and because they're cheaper and easier to get. [McMaster](https://www.mcmaster.com/screws/system-of-measurement~metric/thread-size~m2/length~6-mm/flat-head-screws-4/material~stainless-steel/) |
| 8mm M2 wafer head screws | 4        | **Option 1 of 2.** Use this option if you do not have a drill press. [Metric Screws US](https://www.metricscrews.us/index.php?main_page=product_info&cPath=155_156_164&products_id=49&zenid=ehth7nvdt09u23fh2sd1oqksk7) has singles |
| 8mm M2 flat head screws  | 4        | **Option 2 of 2.** Use this option if you have a drill press and countersink bit, to get the flattest possible design and because they're cheaper and easier to get. [McMaster](https://www.mcmaster.com/screws/system-of-measurement~metric/thread-size~m2/length~8-mm/flat-head-screws-4/material~stainless-steel/) |
| 3mm M2 thraded inserts   | 8        | PEM MSO4-M2-3 [McMaster](https://www.mcmaster.com/92985A818/) |
| 8mm M2 standoffs         | 4        | [DigiKey](https://www.digikey.com/en/products/detail/würth-elektronik/970080244/9488540) or anywhere |
| Bottom grippy feet       | 11       | Lots of options here. Personally I used some of this silicone from [McMaster](https://www.mcmaster.com/86465K34/) that I cut with a 1/8" hole punch. I raster-engraved little footwells in the bottom plate to receive them. EVA foam could also work [Amazon](https://www.amazon.com/dp/B07T5L7756/) |

## Case Assembly

If using counter sunk screws, then drill counter sinks on the mounting holes on the top plate, except for the four larger holes in the cente by the controller. Also counter sink the four center holes on the bottom plate, and the four holes on the MCU cover plate. To counter sink acrylic, I like the five-flute bits, use a low speed and light pressure and it will cut like butter. Skip this step if using wafer heads.

Press the eight threaded inserts into the bottom plate with the flange on the bottom side.

Install the switches and MCU. I like to do this now with the PCB sitting on the table, so that the force of setting the switche home is directed into the tabletop instaed of the solder holding the hotswap sockets on. Put the assembled PCB onto a table, put on the top gasket and top plate. You can slide a few screws into the holes to align all the layers. Then start installing switches. I like to install some on the corners and thumb cluster to help align everything, then do them all.

Install the MCU and battery. Please be careful with the battery polarity, it is marked on the PCB with a small  `+`, and is the so-called standard (according to Adafruit) of the positive (red) wire on the left. 

Place the inner bottom gasket (be careful, it only goes on one way) the inner bottom plate (ditto), and the outer bottom plate. Install the screws down from the top plate, then the ones for the MCU cover and standoffs. Install the cover and you're good to go.