'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';

import SelecionarArea from './selecionar-area';

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
