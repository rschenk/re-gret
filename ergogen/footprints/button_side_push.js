/* From Panasonic_EVQPUL_EVQPUC
 *  https://github.com/KiCad/kicad-footprints/blob/master/Button_Switch_SMD.pretty/Panasonic_EVQPUL_EVQPUC.kicad_mod
 */

module.exports = {
    params: {
        designator: 'B', // for Button
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => {
      return `
      (module Panasonic_EVQPUL_EVQPUC (layer ${p.side}.Cu) (tedit 5A02FC95)
        (descr http://industrial.panasonic.com/cdbs/www-data/pdf/ATV0000/ATV0000CE5.pdf)
        (tags "SMD SMT SPST EVQPUL EVQPUC")
        (attr smd)

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -3.2) (layer ${p.side}.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )

        (fp_line (start 3.9 2.25) (end 3.9 -3.25) (layer ${p.side}.CrtYd) (width 0.05))
        (fp_line (start 2.35 -1.85) (end 1.425 -1.85) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start 2.35 1.85) (end -2.35 1.85) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start -2.45 0.275) (end -2.45 -0.275) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start -1.3 -2.75) (end -1.3 -1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 1.3 -2.75) (end 1.3 -1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 1.3 -2.75) (end -1.3 -2.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 2.35 1.75) (end 2.35 -1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start -2.35 1.75) (end -2.35 -1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 2.35 -1.75) (end -2.35 -1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 2.35 1.75) (end -2.35 1.75) (layer ${p.side}.Fab) (width 0.1))
        (fp_line (start 2.45 0.275) (end 2.45 -0.275) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start -1.425 -1.85) (end -2.35 -1.85) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start -3.9 2.25) (end -3.9 -3.25) (layer ${p.side}.CrtYd) (width 0.05))
        (fp_line (start 3.9 2.25) (end -3.9 2.25) (layer ${p.side}.CrtYd) (width 0.05))
        (fp_line (start 3.9 -3.25) (end -3.9 -3.25) (layer ${p.side}.CrtYd) (width 0.05))
        (pad 2 smd rect (at 2.625 0.85 ${p.rot}) (size 1.55 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to.str})
        (pad 2 smd rect (at -2.625 0.85 ${p.rot}) (size 1.55 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to.str})
        (pad 1 smd rect (at -2.625 -0.85 ${p.rot}) (size 1.55 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from.str})
        (pad 1 smd rect (at 2.625 -0.85 ${p.rot}) (size 1.55 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from.str})
        (pad "" np_thru_hole circle (at 0 1.375 180) (size 0.75 0.75) (drill 0.75) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 -1.375 180) (size 0.75 0.75) (drill 0.75) (layers *.Cu *.Mask))
      )
      `
    }
}
