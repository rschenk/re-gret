module.exports = {
    params: {
      designator: 'U',
      side: 'F',
      QB: {type: 'net', value: 'QB'},
      QC: {type: 'net', value: 'QC'},
      QD: {type: 'net', value: 'QD'},
      QE: {type: 'net', value: 'QE'},
      QF: {type: 'net', value: 'QF'},
      QG: {type: 'net', value: 'QG'},
      QH: {type: 'net', value: 'QH'},
      GND: {type: 'net', value: 'GND'},
      VCC: {type: 'net', value: 'VCC'},
      QA: {type: 'net', value: 'QA'},
      SER: {type: 'net', value: 'SER'},
      OE: {type: 'net', value: 'OE'},
      RCLK: {type: 'net', value: 'RCLK'},
      SRCLK: {type: 'net', value: 'SRCLK'},
      SRCLR: {type: 'net', value: 'SRCLR'},
      QHP: {type: 'net', value: "QH'"},
    },
    body: p => {
      const side = p.side
      const {def_neg, def_pos} = side == 'F' ? {def_neg: '-', def_pos: ''} : {def_neg: '', def_pos: '-'}
      const mirror = side == 'F' ? '' : '(justify mirror)'

      return `
      (module "SOIC-16_3.9x9.9mm_P1.27mm" (layer "${side}.Cu") (tedit 6484CC24)
        (descr "SOIC, 16 Pin (JEDEC MS-012AC, https://www.analog.com/media/en/package-pcb-resources/package/pkg_pdf/soic_narrow-r/r_16.pdf), generated with kicad-footprint-generator ipc_gullwing_generator.py")
        (tags "SOIC SO")
        (property "LCSC Part Number" "C10092")
        (attr smd)

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -5.9) (layer "Dwgs.User") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "74HC595" (at 0 5.9 ${p.rot}) (layer "${side}.Fab") (effects (font (size 1 1) (thickness 0.15)) ${mirror}))

        ${'' /* outline */}
        (fp_line (start 0 -5.06) (end ${def_neg}3.45 -5.06)
          (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
        (fp_line (start 0 -5.06) (end ${def_pos}.95 -5.06)
          (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
        (fp_line (start 0 5.06) (end ${def_neg}1.95 5.06)
          (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
        (fp_line (start 0 5.06) (end ${def_pos}.95 5.06)
          (stroke (width 0.12) (type solid)) (layer "${side}.SilkS"))
        (fp_line (start ${def_neg}3.7 -5.2) (end ${def_neg}3.7 5.2)
          (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
        (fp_line (start ${def_neg}3.7 5.2) (end ${def_pos}3.7 5.2)
          (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
        (fp_line (start ${def_pos}3.7 -5.2) (end ${def_neg}3.7 -5.2)
          (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
        (fp_line (start ${def_pos}3.7 5.2) (end ${def_pos}3.7 -5.2)
          (stroke (width 0.05) (type solid)) (layer "${side}.CrtYd"))
        (fp_line (start ${def_neg}1.95 -3.975) (end ${def_neg}0.975 -4.95)
          (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
        (fp_line (start ${def_neg}1.95 4.95) (end ${def_neg}1.95 -3.975)
          (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
        (fp_line (start ${def_neg}0.975 -4.95) (end ${def_pos}1.95 -4.95)
          (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
        (fp_line (start ${def_pos}1.95 -4.95) (end ${def_pos}1.95 4.95)
          (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))
        (fp_line (start ${def_pos}1.95 4.95) (end ${def_neg}1.95 4.95)
          (stroke (width 0.1) (type solid)) (layer "${side}.Fab"))

        ${'' /* pins */}
        (pad "1" smd roundrect (at ${def_neg}2.475 -4.445 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QB.str})
        (pad "2" smd roundrect (at ${def_neg}2.475 -3.175 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QC.str})
        (pad "3" smd roundrect (at ${def_neg}2.475 -1.905 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QD.str})
        (pad "4" smd roundrect (at ${def_neg}2.475 -0.635 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QE.str})
        (pad "5" smd roundrect (at ${def_neg}2.475 0.635 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QF.str})
        (pad "6" smd roundrect (at ${def_neg}2.475 1.905 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QG.str})
        (pad "7" smd roundrect (at ${def_neg}2.475 3.175 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QH.str})
        (pad "8" smd roundrect (at ${def_neg}2.475 4.445 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.GND.str})
        (pad "9" smd roundrect (at ${def_pos}2.475 4.445 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QHP.str})
        (pad "10" smd roundrect (at ${def_pos}2.475 3.175 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.SRCLR.str})
        (pad "11" smd roundrect (at ${def_pos}2.475 1.905 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.SRCLK.str})
        (pad "12" smd roundrect (at ${def_pos}2.475 0.635 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.RCLK.str})
        (pad "13" smd roundrect (at ${def_pos}2.475 -0.635 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.OE.str})
        (pad "14" smd roundrect (at ${def_pos}2.475 -1.905 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.SER.str})
        (pad "15" smd roundrect (at ${def_pos}2.475 -3.175 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.QA.str})
        (pad "16" smd roundrect (at ${def_pos}2.475 -4.445 ${p.rot}) (size 1.95 0.6) (layers "${side}.Cu" "${side}.Paste" "${side}.Mask") (roundrect_rratio 0.25) ${p.VCC.str})
      )
      `
    }
}
