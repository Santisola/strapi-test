import React, { useState } from 'react';
import clsx from 'clsx';
import './styles.css'
import { newGasto } from '@/app/lib/actions';

export const FormNuevoGasto = ({
  isOpen,
  tiposDeGastos
}: any) => {
  const [newCategory, setNewCategory] = useState(false);
  
  return (
    <section
      id='nuevoGastoForm'
      className={clsx(
        {
          'active': isOpen,
          'expanded': newCategory
        },
      )}
    >
      <form action={newGasto}>
        <div className="form-group">
          <label htmlFor="gasto">Gasto</label>
          <input
            type="text"
            id='gasto'
            name='gasto'
          />
        </div>
        <div className="form-group">
          <label htmlFor="monto">Monto</label>
          <input
            type="number"
            id='monto'
            name='monto'
          />
        </div>
        <div className={clsx(
          'form-group',
          {
            'disabled': newCategory
          },
        )}>
          <label htmlFor="tipoGasto">Tipo de gasto</label>
          <select name="tipoGasto" id="tipoGasto" disabled={newCategory}>
            <option selected disabled>...</option>
            {
              tiposDeGastos.map((tipoGasto: any, i: number) => (
                <option key={i} value={tipoGasto.id}>{tipoGasto.category}</option>
              ))
            }
          </select>
        </div>
        <div className="form-group flex-form-group">
          <input
            type="checkbox"
            name='nuevaCategoria'
            id='nuevaCategoria'
            checked={newCategory} onChange={(ev) => setNewCategory(ev.target.checked)}
          />
          <label htmlFor="nuevaCategoria">Agregar nuevo tipo de gasto</label>
        </div>
        {
          newCategory &&
          <div className="form-group">
            <label htmlFor="newCategory">Nuevo tipo de gasto</label>
            <input
              type="text"
              id='newCategory'
              name='newCategory'
            />
          </div>
        }
        <div className="form-group">
          <label htmlFor="fechaGasto">Fecha</label>
          <input
            type="date"
            id='fechaGasto'
            name='fechaGasto'
          />
        </div>
        <div className="form-group">
          <button className='btn btn-primary'>Guardar</button>
        </div>
      </form>
    </section>
  )
}
