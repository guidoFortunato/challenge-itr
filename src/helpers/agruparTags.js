export const agruparTags = () => {
  const obj = [
    {
      actualizado: 5265.52,
      cancelado_comprobante: null,
      cancelado_fecha: null,
      es_deuda: "S",
      es_transac: "S",
      estado_d: "Impago",
      fecha: "2021-01-25T00:00:00",
      imponible_ident: "Partida:0936561",
      imponible_tipo_d: "Inmueble",
      legal_d: "No Juicio",
      marca01: null,
      neto_mn: null,
      pagado_total_mc: 0,
      reg_id: "2021-01",
      saldo: 2100,
      tasa: "BAL",
      tr1a102_id: 51301885,
    },
    {
      actualizado: 2332.4,
      cancelado_comprobante: null,
      cancelado_fecha: null,
      es_deuda: "S",
      es_transac: "S",
      estado_d: "Impago",
      fecha: "2021-01-25T00:00:00",
      imponible_ident: "Partida:0936561",
      imponible_tipo_d: "Inmueble",
      legal_d: "No Juicio",
      marca01: null,
      neto_mn: null,
      pagado_total_mc: 0,
      reg_id: "2021-01",
      saldo: 2135,
      tasa: "BAL",
      tr1a102_id: 51301885,
    },
    {
      actualizado: 1332.4,
      cancelado_comprobante: null,
      cancelado_fecha: null,
      es_deuda: "S",
      es_transac: "S",
      estado_d: "Impago",
      fecha: "2021-01-25T00:00:00",
      imponible_ident: "Partida:0936561",
      imponible_tipo_d: "Inmueble",
      legal_d: "No Juicio",
      marca01: null,
      neto_mn: null,
      pagado_total_mc: 0,
      reg_id: "2021-01",
      saldo: 135,
      tasa: "BAL",
      tr1a102_id: 51301885,
    },
    {
      actualizado: 1332.4,
      cancelado_comprobante: null,
      cancelado_fecha: null,
      es_deuda: "S",
      es_transac: "S",
      estado_d: "Impago",
      fecha: "2021-01-25T00:00:00",
      imponible_ident: "Partida:0936561",
      imponible_tipo_d: "Inmueble",
      legal_d: "No Juicio",
      marca01: null,
      neto_mn: null,
      pagado_total_mc: 0,
      reg_id: "2021-02",
      saldo: 135,
      tasa: "BAL",
      tr1a102_id: 51301885,
    },
    {
      actualizado: 1332.4,
      cancelado_comprobante: null,
      cancelado_fecha: null,
      es_deuda: "S",
      es_transac: "S",
      estado_d: "Impago",
      fecha: "2021-01-25T00:00:00",
      imponible_ident: "Partida:0936561",
      imponible_tipo_d: "Inmueble",
      legal_d: "No Juicio",
      marca01: null,
      neto_mn: null,
      pagado_total_mc: 0,
      reg_id: "2021-02",
      saldo: 135,
      tasa: "BAL",
      tr1a102_id: 51301885,
    },
  ];

  const res = obj.reduce(
    (p, c) => {
      let idx = p[1].indexOf(c.reg_id);
      console.log('p', p)
      console.log('c', c)
      if (idx === -1) {
        p[1].push(c.reg_id);

        let otmp = {
          actualizado: c.actualizado,
          reg_id: c.reg_id,
          saldo: c.saldo,
          tr1a102_id: [c.tr1a102_id],
        };

        p[0].push(otmp);
      } else {
        p[0][idx].actualizado = p[0][idx].actualizado + c.actualizado;
        p[0][idx].saldo = p[0][idx].saldo + c.saldo;
        p[0][idx].tr1a102_id.push(c.tr1a102_id);
      }

      return p;
    },
    [[], []]
  )[0];

  // console.log(res);
};
