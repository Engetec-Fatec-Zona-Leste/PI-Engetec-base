'use client';

import React, { useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavBarRate from '@/components/TabbarRate';

export default function RateArticlePage({
	params,
}: {
	params: {
		idArquivo: string;
	};
}) {
	const [currentOption, setCurrentOption] = useState('articles-rate');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	return (
		<div>
			<Navbar />
			<NavBarRate
				idArquivo={params.idArquivo}
				currentOption={currentOption}
				handleOptionClick={handleOptionClick}
			/>

			<Footer />
		</div>
	);
}
