import React from 'react'
import './styles.css'

export const Header = () => {
  return (
    <header>
        <h1>Bolsillo Amigo</h1>
        <nav>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li><a href="#">Gastos</a></li>
                <li><a href="#">Reportes</a></li>
            </ul>
        </nav>
    </header>
  )
}
