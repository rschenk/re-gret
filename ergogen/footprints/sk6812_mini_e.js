// SK6812-MINI-E
//
// This started from [keebio](https://github.com/keebio/Keebio-Parts.pretty/blob/master/SK6812-MINI-E.kicad_mod)
//
// Params
//  side: default is B
//    if F, pads and silkscreens will be on the front of the pcb
//    if B, pads and silkscreens will be on the back
//  facing: default is F
//    if F, the led will shine in the same direction as the front of the pcb
//    if B, the led will shine in the same direction as the back of the pcb
//    for underglow, you'd want this to be B; for per-key rgb, you'd want it to be F

module.exports = {
  params: {
      designator: 'LED',
      side: 'B',
      facing: 'F',
      VCC: {type: 'net', value: 'VCC'},
      GND: {type: 'net', value: 'GND'},
      din: undefined,
      dout: undefined,
  },
  body: p => {
    const {def_pos, def_neg} = p.facing == 'F' ? {def_pos: '', def_neg: '-'} : {def_pos: '-', def_neg: ''}

    return `
    (module "SK6812MINI-E" (tedit 5ECEB660) (layer "${p.side}.Cu")
      ${p.at /* parametric position */}

      (fp_text reference "${p.ref}" (at ${def_neg}7.2 2.07) (layer "${p.side}.SilkS") 
        ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)) ${p.side == 'F' ? '' : '(justify mirror)'})
      )
      
      (fp_text user "1" (at ${def_neg}2.5 -2.000001 -90) (layer "${p.side}.SilkS") hide
          (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )

      (fp_poly
        (pts
          (xy ${def_pos}4.2 0.999999)
          (xy ${def_pos}3.3 1.899999)
          (xy ${def_pos}4.2 1.899999)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer "${p.side}.SilkS"))

      (fp_line (start ${def_neg}1.6 -1.400001) (end ${def_neg}1.6 1.399999)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      (fp_line (start ${def_neg}1.6 1.399999) (end ${def_pos}1.1 1.399999)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      (fp_line (start ${def_pos}1.6 -1.400001) (end ${def_neg}1.6 -1.400001)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      (fp_line (start ${def_pos}1.6 0.899999) (end ${def_pos}1.1 1.399999)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      (fp_line (start ${def_pos}1.6 0.899999) (end ${def_pos}1.6 -1.400001)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      (fp_line (start ${def_neg}1.699999 0.702841) (end ${def_neg}1.699999 -0.702843)

        (stroke (width 0.1) (type solid)) (layer "Edge.Cuts"))
      (fp_line (start ${def_neg}0.794452 -1.5) (end ${def_pos}0.794453 -1.5)
        (stroke (width 0.1) (type solid)) (layer "Edge.Cuts"))
      (fp_line (start ${def_pos}0.794452 1.499999) (end ${def_neg}0.794452 1.499999)
        (stroke (width 0.1) (type solid)) (layer "Edge.Cuts"))
      (fp_line (start ${def_pos}1.699999 -0.702843) (end ${def_pos}1.699999 0.702841)
        (stroke (width 0.1) (type solid)) (layer "Edge.Cuts"))
      (fp_arc (start ${def_neg}1.298969 1.1366) (end ${def_neg}1.749484 0.91972) (angle ${def_neg}146.0053744) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_neg}2.199999 0.702841) (end ${def_neg}1.749484 0.919719) (angle ${def_neg}25.70611205) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_neg}2.199999 -0.702843) (end ${def_neg}1.699999 -0.702843) (angle ${def_neg}25.70611954) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_neg}1.298969 -1.136599) (end ${def_neg}1.046711 -1.5683) (angle ${def_neg}146.0054017) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_neg}0.794452 -2.0) (end ${def_neg}1.046711 -1.5683) (angle ${def_neg}30.29928212) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}0.794453 -2.0) (end ${def_pos}0.794453 -1.5) (angle ${def_neg}30.29922831) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}1.298969 -1.136598) (end ${def_pos}1.749484 -0.919721) (angle ${def_neg}146.0053097) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}2.199999 -0.702843) (end ${def_pos}1.749484 -0.919721) (angle ${def_neg}25.70608136) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}2.199999 0.702841) (end ${def_pos}1.699999 0.702841) (angle ${def_neg}25.70617777) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}1.298969 1.136597) (end ${def_pos}1.046711 1.568298) (angle ${def_neg}146.0055121) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_pos}0.794452 1.999999) (end ${def_pos}1.046711 1.568298) (angle ${def_neg}30.29933433) (layer Edge.Cuts) (width 0.1))
      (fp_arc (start ${def_neg}0.794452 1.999999) (end ${def_neg}0.794452 1.499999) (angle ${def_neg}30.2992623) (layer Edge.Cuts) (width 0.1))

      (fp_line (start ${def_neg}3.8 -2.000001) (end ${def_neg}3.8 1.999999)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
      (fp_line (start ${def_neg}3.8 1.999999) (end ${def_pos}3.8 1.999999)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
      (fp_line (start ${def_pos}3.8 -2.000001) (end ${def_neg}3.8 -2.000001)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
      (fp_line (start ${def_pos}3.8 1.999999) (end ${def_pos}3.8 -2.000001)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))

      (pad "1" smd rect (at ${def_neg}2.6 -0.75 ${p.rot}) (size 1.6 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.VCC.str})
      (pad "2" smd rect (at ${def_neg}2.6 0.75 ${p.rot}) (size 1.6 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.dout.str})
      (pad "3" smd roundrect (at ${def_pos}2.6 0.75 ${p.rot}) (size 1.6 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.1) ${p.GND.str})
      (pad "4" smd rect (at ${def_pos}2.6 -0.75 ${p.rot}) (size 1.6 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.din.str})
    )
  `
  }
}
