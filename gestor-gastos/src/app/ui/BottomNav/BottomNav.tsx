'use client';

import React, { useState } from 'react';
import { NuevoGastoButton } from './components/ButtonNuevoGasto/NuevoGastoButton';
import { FormNuevoGasto } from './components/FormNuevoGasto/FormNuevoGasto';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './styles.css'
import { HomeIcon } from './components/Icons/HomeIcon';
import { GastosIcon } from './components/Icons/GastosIcon';
import { ReportesIcon } from './components/Icons/ReportesIcon';
import { UserIcon } from './components/Icons/UserIcon';

export const BottomNav = ({ tiposDeGastos }: any) => {
	const [isNuevoGastoActive, setIsNuevoGastoActive] = useState(false);
	const path = usePathname();

	return (
		<>
			<nav id='bottomNav'>
				<FormNuevoGasto isOpen={isNuevoGastoActive} tiposDeGastos={tiposDeGastos} />
				<ul>
					<li
						className={path === '/' ? 'active' : ''}
					>
						<HomeIcon />
						<Link href="/">Inicio</Link>
					</li>
					<li
						className={path === '/gastos' ? 'active' : ''}
					>	
						<GastosIcon />
						<Link href="/gastos">Gastos</Link>
					</li>
					
					<li>
						<NuevoGastoButton
							handleToggleClick={() => setIsNuevoGastoActive(!isNuevoGastoActive)}
							isOpen={isNuevoGastoActive}
						/>
					</li>

					<li
						className={path === '/reportes' ? 'active' : ''}
					>
						<ReportesIcon />
						<Link href="/reportes">Reportes</Link>
					</li>

					<li
						className={path === '/perfil' ? 'active' : ''}
					>
						<UserIcon />
						<Link href="/">Perfil</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}