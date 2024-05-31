'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import TabbarAuthenticated from '@/components/COMPONENTES/TabbarAuthenticated';

export default function Evento() {
	const [currentOption, setCurrentOption] = useState('criar-evento');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />
			<TabbarAuthenticated
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
