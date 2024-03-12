import React from 'react'
import { getGastos, getGastosPorTipo } from '../lib/data'
import { TiposDeGastoList } from '../ui/TiposDeGastoList/TiposDeGastoList';

export const HomeDashboard = async () => {
  const gastos = await getGastos();
  const tiposDeGastos = await getGastosPorTipo();

  const gastosPorMes = (mes: number) => gastos.filter((gasto:any) => gasto.fecha.split('-')[1] == mes);

  const totalPorMes = (mes:number) => {
    const filteredGastos = gastosPorMes(mes)

    let acum = 0;
    filteredGastos.forEach((gasto:any) => {
      if (gasto) {
        acum += gasto.valor
      }
    });

    return acum;
  }

  return (
    <>
    <div className="container">
      Este mes gastaste: <br />
      <h2><strong>${totalPorMes((new Date()).getMonth() + 1)}</strong></h2>
    </div>
    
    <TiposDeGastoList gastos={tiposDeGastos} />
    </>
  )
}
