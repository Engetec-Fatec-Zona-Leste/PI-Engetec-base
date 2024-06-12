'use client';

import { useState } from 'react';
import React from 'react';

import Tabfiles from '@/components/Artigos/NavbarViewFiles';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default function VisualizarArtigoPage() {
	const [currentOption, setCurrentOption] = useState('dentro-do-prazo');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<Navbar />
			<Tabfiles
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>
			<Footer />
		</div>
	);
}
