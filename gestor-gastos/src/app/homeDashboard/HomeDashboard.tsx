import React from 'react'
import { getGastos, getMesesConGastos } from '../lib/data'
import { TiposDeGastoList } from './components/TiposDeGastoList/TiposDeGastoList';
import { MonthFilter } from './components/MonthFilter';

export const HomeDashboard = async ({mes}: {mes:string}) => {
  const gastos = await getGastos();
  const meses = getMesesConGastos(gastos);

  
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
    <div className="container form-group monthFilterContainer">
      <MonthFilter meses={meses} />
    </div>

    <div className="container">
      Este mes gastaste: <br />
      <h2><strong>${totalPorMes(parseInt(mes))}</strong></h2>
    </div>
    
    <TiposDeGastoList mes={mes} />
    </>
  )
}
