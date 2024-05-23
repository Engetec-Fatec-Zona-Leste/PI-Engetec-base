'use client';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import NavBarRate from '@/components/Rate/NavBarRate';
import { useState } from 'react';

export default function ViewRateArticlePage() {

	const [currentOption, setCurrentOption] = useState('rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	
	return (
		<div>
			<NavbarAuthenticated />
            <NavBarRate currentOption={currentOption} 
			handleOptionClick={handleOptionClick} />
			<Footer />
		</div>
	);
}
 