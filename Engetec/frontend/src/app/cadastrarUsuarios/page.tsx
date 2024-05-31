'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import Tabbar from '@/components/COMPONENTES/Tabbar';

export default function Cadastrar() {
	const [currentOption, setCurrentOption] = useState('cadastrar-user');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<Navbar />
			<Tabbar
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
