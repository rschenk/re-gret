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
    (module "SK6812-MINI-E" (layer ${p.side}.Cu) (tedit 5ECEB660)

      ${p.at /* parametric position */}

      (fp_text reference "${p.ref}" (at ${def_pos}0 2.1 ${p.rot} unlocked) (layer ${p.side}.SilkS)
        (effects (font (size 0.7 0.7) (thickness 0.15)) ${p.side == 'F' ? '' : '(justify mirror)'})
      )

      (fp_text value "SK6812-MINI-E" (at ${def_pos}0 -0.5 ${p.rot} unlocked) (layer ${p.side}.SilkS) hide
        (effects (font (size 1 1) (thickness 0.15)) ${p.side == 'F' ? '' : '(justify mirror)'})
      )

      (fp_poly (pts (xy ${def_pos}2.8 1.4) (xy ${def_pos}2.2 1.4) (xy ${def_pos}2.2 2)) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${def_pos}1.6 -1.4) (end ${def_pos}1.6 1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start ${def_pos}1.6 1.4) (end ${def_neg}1.6 1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start ${def_neg}1.6 1.4) (end ${def_neg}1.6 -1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start ${def_neg}1.6 -1.4) (end ${def_pos}1.6 -1.4) (layer Cmts.User) (width 0.12))
      (fp_line (start ${def_pos}1.7 -1.5) (end ${def_pos}1.7 1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start ${def_pos}1.7 1.5) (end ${def_neg}1.7 1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start ${def_neg}1.7 1.5) (end ${def_neg}1.7 -1.5) (layer Edge.Cuts) (width 0.12))
      (fp_line (start ${def_neg}1.7 -1.5) (end ${def_pos}1.7 -1.5) (layer Edge.Cuts) (width 0.12))
      (pad "1" smd rect (at ${def_neg}2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.VCC.str})
      (pad "2" smd rect (at ${def_neg}2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.dout.str})
      (pad "3" smd roundrect (at ${def_pos}2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") (roundrect_rratio 0.25) ${p.GND.str})
      (pad "4" smd rect (at ${def_pos}2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.din.str})
    )
  `
  }
}
