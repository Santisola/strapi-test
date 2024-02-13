import React from 'react'

export const HomeDashboard = async () => {
  const fetchRes = await fetch('http://localhost:1337/api/gastos?populate=*')
  const rta = await fetchRes.json()

  const gastosPorMes = (mes: number) => {
    const gastos = rta.data.map((gasto:any) => {
      const fechaDelGasto = gasto.attributes.Fecha.split('-')[1]
   
      if(fechaDelGasto == mes) {
        return {
              item: gasto.attributes.Gasto,
              valor: gasto.attributes.Valor,
              fecha: gasto.attributes.Fecha,
              categoria: gasto.attributes.tipos_de_gasto.data.attributes.Tipo
        };
      }
    })

    return gastos;
  }

  const totalPorMes = (mes:number) => {
    const filteredGastos = gastosPorMes(mes)

    let acum = 0;
    filteredGastos.forEach((gasto:any) => {
      acum += gasto.valor
    });

    return acum;
  }

  return (
    <div>
      Este mes gastaste: <br />
      <h2><strong>${totalPorMes((new Date()).getMonth() + 1)}</strong></h2>
    </div>
  )
}
