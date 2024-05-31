'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import NavBarRate from '@/components/COMPONENTES/Rate/NavBarRate';

export default function ViewRateArticlePage() {
	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<NavbarAuthenticated />
			<NavBarRate
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
