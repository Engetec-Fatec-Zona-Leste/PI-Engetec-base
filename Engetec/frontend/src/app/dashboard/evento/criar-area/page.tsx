'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import SelecionarArea from '@/components/CriarAreaConhecimento/SelecionarArea';

export default function AreaConhecimento() {
	const [currentOption, setCurrentOption] = useState('criar-grande-area');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<NavbarAuthenticated />
			<SelecionarArea
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
