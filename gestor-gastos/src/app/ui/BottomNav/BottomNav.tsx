'use client';

import React, { useState } from 'react';
import { NuevoGastoButton } from './components/ButtonNuevoGasto/NuevoGastoButton';
import './styles.css'
import { FormNuevoGasto } from './components/FormNuevoGasto/FormNuevoGasto';

export const BottomNav = ({tiposDeGastos}:any) => {
	const [ isNuevoGastoActive, setIsNuevoGastoActive ] = useState(false);

	return (
	<>
		<nav id='bottomNav'>
			<FormNuevoGasto isOpen={isNuevoGastoActive} tiposDeGastos={tiposDeGastos} />
			<ul>
				<li>
					<NuevoGastoButton
						handleToggleClick={() => setIsNuevoGastoActive(!isNuevoGastoActive)}
						isOpen={isNuevoGastoActive}  
					/>
				</li>
			</ul>
		</nav>
	</>
	)
}
