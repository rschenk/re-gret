module.exports = {
  params: {
      designator: 'LED',
      side: 'F',
      VCC: {type: 'net', value: 'VCC'},
      GND: {type: 'net', value: 'GND'},
      din: undefined,
      dout: undefined,
  },
  body: p => {
    const {def_pos, def_neg} = p.side == 'F' ? {def_pos: '', def_neg: '-'} : {def_pos: '-', def_neg: ''}

    return `

  (module WS2812B (layer ${p.side}.Cu) (tedit 53BEE615)

    ${p.at /* parametric position */}

    (fp_text reference "${p.ref}" (at 0 -3.7 ${p.rot}) (layer ${p.side}.SilkS)
      (effects (font (size 1 1) (thickness 0.2)) ${ p.side == 'F' ? '' : '(justify mirror)'})
    )
    (fp_text value VAL** (at 0 4.8) (layer ${p.side}.SilkS) hide
      (effects (font (size 1 1) (thickness 0.2)))
    )

    (fp_line (start ${def_neg}1 1) (end ${def_neg}1 -1) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 -1) (end ${def_pos}1 -1) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}1 -1) (end ${def_pos}1 0.5) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}1 0.5) (end ${def_pos}0.5 1) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}0.5 1) (end ${def_neg}1 1) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 2.5) (end ${def_pos}1 2.5) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}2.5 0.5) (end ${def_pos}2.5 -0.5) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}1 -2.5) (end ${def_pos}1 -2.5) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_neg}2.5 0.5) (end ${def_neg}2.5 -0.5) (layer ${p.side}.SilkS) (width 0.2))
    (fp_line (start ${def_pos}2.5 -2.1) (end ${def_pos}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 1.2) (end ${def_pos}2.5 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 2.5) (end ${def_pos}2.5 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 -2.1) (end ${def_neg}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 1.2) (end ${def_neg}2.5 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 2.5) (end ${def_neg}2.5 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 2.1) (end ${def_neg}2.7 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 1.2) (end ${def_neg}1.8 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 1.2) (end ${def_neg}1.8 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 2.1) (end ${def_neg}2.7 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 -2.1) (end ${def_neg}2.7 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.7 -1.2) (end ${def_neg}1.8 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 -1.2) (end ${def_neg}1.8 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}1.8 -2.1) (end ${def_neg}2.7 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 2.1) (end ${def_pos}1.8 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 2.1) (end ${def_pos}1.8 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 1.2) (end ${def_pos}2.7 1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 1.2) (end ${def_pos}2.7 2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 -1.2) (end ${def_pos}1.8 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 -1.2) (end ${def_pos}1.8 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}1.8 -2.1) (end ${def_pos}2.7 -2.1) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.7 -2.1) (end ${def_pos}2.7 -1.2) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_neg}2.5 -2.5) (end ${def_pos}2.5 -2.5) (layer Dwgs.User) (width 0.2))
    (fp_line (start ${def_pos}2.5 2.5) (end ${def_neg}2.5 2.5) (layer Dwgs.User) (width 0.2))

    (pad 1 smd rect (at ${def_neg}2.4 -1.65 ${p.rot}) (size 1.8 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC.str})
    (pad 2 smd rect (at ${def_neg}2.4 1.65 ${p.rot}) (size 1.8 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.dout.str})
    (pad 3 smd rect (at ${def_pos}2.4 1.65 ${p.rot}) (size 1.8 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND.str})
    (pad 4 smd rect (at ${def_pos}2.4 -1.65 ${p.rot}) (size 1.8 1.4) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.din.str})
  )

`}
}
