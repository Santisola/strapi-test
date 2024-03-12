import React from 'react'
import './styles.css'

export const TiposDeGastoList = ({gastos}: any) => {
  const tiposDeGasto = gastos.map((gasto:any) => {
    let categoryTotal = 0;
    gasto.gastos.forEach((item:any) => {
      categoryTotal += item.valor;
    });

    return {
      tipo: gasto.category,
      total: categoryTotal
    }
  })
  
  return (
    <ul className='container tiposDeGastosList'>
      {tiposDeGasto.map((gasto:any, index:number) => (
        <li key={index}>
          <h3>{gasto.tipo}</h3>
          <strong>${gasto.total}</strong>
        </li>
      ))}
    </ul>
  )
}
