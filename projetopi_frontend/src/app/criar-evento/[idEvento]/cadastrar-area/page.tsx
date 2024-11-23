'use client';

import { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import SelecionarArea from './_selecionar-area';

export default function AreaConhecimento() {
	const [currentOption, setCurrentOption] = useState('criar-grande-area');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	return (
		<div>
			<Navbar />
			<SelecionarArea
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
