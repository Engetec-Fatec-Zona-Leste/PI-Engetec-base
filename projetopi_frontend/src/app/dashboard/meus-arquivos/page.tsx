'use client';

import { useState } from 'react';
import React from 'react';

import ArticleCard from '@/components/ArticleCards/ArticleCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import Pagination1 from '@/components/Pagitation/Pagination1';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { cardsData1, cardsData2 } from '@/mocks/ArtigosCards';

export default function MeusArquivosSubmetidos() {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	return (
		<div className="flex h-full flex-col justify-center justify-items-center">
			<Navbar />

			<div className="mt-28 flex flex-col items-center justify-center">
				<div className="mt-24">
					<Title
						title="Artigos"
						subtitle="Todos os artigos relacionados à você"
						colorHex="#ef0037"
					/>
				</div>
				<div className="flex w-[1000px] justify-end">
					<SearchFilter />
				</div>

				<h1 className="flex w-[1000px] text-center text-[22px] font-bold text-red-500">
					Eventos:{' '}
					<span className="ml-2 text-black">
						Tech Talks: Descobrindo as Fronteiras da Tecnologia
					</span>
				</h1>
				{cardsData1.map((card) => (
					<ArticleCard card={card} />
				))}

				<h1 className="mt-16 flex w-[1000px] text-center text-[22px] font-bold text-red-500">
					Eventos:{' '}
					<span className="ml-2 text-black">
						Tech Talks: Descobrindo as Fronteiras da Tecnologia
					</span>
				</h1>
				{cardsData2.map((card) => (
					<ArticleCard card={card} />
				))}
			</div>

			<Pagination1
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<Footer />
		</div>
	);
}
