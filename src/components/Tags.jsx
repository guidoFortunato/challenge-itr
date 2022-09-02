import { agruparTags } from "../helpers/agruparTags";

export const Tags = ({ dataTags }) => {
  // Este es tu array inicial
  // console.log(dataTags)
  
  // console.log(dataTags)
  // let result = []
  // let obj = {}
  
  // for (let i = 0; i < 30; i++) {
  //   for (let j = 0; j < dataTags.length; j++) {
  //     obj.slug = dataTags[j].slug
  //     obj.text = dataTags[j].text
  //     result.push(obj)
  //   }
    
  // }
  // console.log(result)

  // const res = dataTags.reduce(
  //   (p, c) => {
  //     // console.log('p', p)
  //     // console.log('c', c)
  //     let idx = p[1].indexOf(c.reg_id);
  //     console.log('p', p)
  //     console.log('c', c)
  //     if (idx === -1) {
  //       p[1].push(c.reg_id);

  //       let otmp = {
  //         actualizado: c.actualizado,
  //         reg_id: c.reg_id,
  //         saldo: c.saldo,
  //         tr1a102_id: [c.tr1a102_id],
  //       };

  //       p[0].push(otmp);
  //     } else {
  //       p[0][idx].actualizado = p[0][idx].actualizado + c.actualizado;
  //       p[0][idx].saldo = p[0][idx].saldo + c.saldo;
  //       p[0][idx].tr1a102_id.push(c.tr1a102_id);
  //     }

  //     return p;
  //   },

  // );
  // console.log(res)

  // console.log(dataTags);
  // const objDays = dataTags.reduce((acum, item) => {
  //   return !acum[item.slug]
  //   ? {...acum, [item.slug]: item.count}
  //   : { ...acum, [item.slug]: acum[item.slug] + item.count }

  //   }, {})

  // console.log(objDays)

  return (
    <>
      {dataTags.map((item, index) => {
        // console.log(item);

        return (
          <span key={index}>
            {item.slug} <br />
          </span>
        );
      })}
    </>
  );
};
