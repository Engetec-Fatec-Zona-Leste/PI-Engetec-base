'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import EditarEvento from '@/components/EditarEvento';

export default function Evento() {
	const [currentOption, setCurrentOption] = useState('criar-evento');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />

			<EditarEvento />

			<Footer />
		</div>
	);
}
