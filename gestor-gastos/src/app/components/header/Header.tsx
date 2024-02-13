'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css'

export const Header = () => {
  const path = usePathname();
  
  return (
    <header>
        <h1>LOGO</h1>
        <nav>
            <ul>
                <li
                  className={path === '/' ? 'active' : ''}
                ><Link href="/">Inicio</Link></li>
                <li
                  className={path === '/gastos' ? 'active' : ''}
                ><Link href="/gastos">Gastos</Link></li>
                <li
                  className={path === '/reportes' ? 'active' : ''}
                ><Link href="/reportes">Reportes</Link></li>
            </ul>
        </nav>
    </header>
  )
}
