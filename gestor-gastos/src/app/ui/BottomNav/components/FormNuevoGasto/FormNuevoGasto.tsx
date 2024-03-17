'use client';
import React from 'react';
import clsx from 'clsx';
import './styles.css'

export const FormNuevoGasto = ({
  isOpen
}: any) => {
  return (
    <section id='nuevoGastoForm' className={isOpen ? 'active' : ''}>
      <form action="#">
        <div className="form-group">
          <label htmlFor="nuevoGasto">Monto</label>
          <input
            type="number"
            id='nuevoGasto'
            name='nuevoGasto'
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoGasto">Tipo de gasto</label>
          <select name="tipoGasto" id="tipoGasto">
            <option>Opcion 1</option>
            <option>Opcion 2</option>
            <option>Opcion 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fechaGasto">Fecha</label>
          <input
            type="date"
            id='fechaGasto'
            name='fechaGasto'
          />
        </div>
      </form>
    </section>
  )
}
