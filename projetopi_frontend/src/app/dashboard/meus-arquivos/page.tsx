'use client';

import React, { useState } from 'react';

import ArticleCard from '@/components/ArticleCards/ArticleCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import { cardsData1, cardsData2 } from '@/mocks/ArtigosCards';

export default function MeusArquivosSubmetidos() {
	const [prazoAberto, setPrazoAbert] = useState(true);

	return (
		<div className="flex h-full flex-col justify-center justify-items-center">
			<Navbar />

			<div className="mt-28 flex flex-col items-center justify-center">
				<div className="mt-24">
					<Title
						title="Artigos"
						subtitle="Todos os artigos relacionados à você"
						colorHex="#4B00E0"
					/>
				</div>

				<h1 className="flex w-[1000px] text-center text-[22px] font-bold text-[#4B00E0]">
					Evento:
					<span className="ml-2 text-black">
						Tech Talks: Descobrindo as Fronteiras da Tecnologia
					</span>
				</h1>
				{cardsData1.map((card) => (
					<ArticleCard prazoAberto={prazoAberto} card={card} />
				))}

				<h1 className="mt-16 flex w-[1000px] text-center text-[22px] font-bold text-[#4B00E0]">
					Evento:
					<span className="ml-2 text-black">
						Tech Talks: Descobrindo as Fronteiras da Tecnologia
					</span>
				</h1>
				{cardsData2.map((card) => (
					<ArticleCard prazoAberto={prazoAberto} card={card} />
				))}
			</div>
			<Footer />
		</div>
	);
}
