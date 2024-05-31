'use client';

import { useState } from 'react';
import React from 'react';

import ArtigosCards from '@/components/Artigos/ArtigosCards/Cards';
import ArtigosCards2 from '@/components/Artigos/ArtigosCards/Cards2';
import Pagination from '@/components/Artigos/ArtigosPagination/pagination';
import Tabfiles from '@/components/Artigos/NavbarViewFilesEnviados/index';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default function EditarArtigosPage() {
	const [currentOption, setCurrentOption] = useState<string>('dentro-do-prazo');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	return (
		<div className="flex h-full flex-col justify-center justify-items-center">
			<Navbar />

			<div className="mt-28 flex flex-col items-center justify-center">
				<Tabfiles
					currentOption={currentOption}
					handleOptionClick={handleOptionClick}
				/>
				<h1 className="mt-20 justify-self-center text-center text-[30px] font-bold text-red-500">
					Arquivos
				</h1>
				<p className="text-center font-medium">
					Todos os arquivos enviadors e relacionados a você
				</p>

				<div className="ml-[780px] flex flex-col gap-4">
					<div className="flex flex-row gap-2">
						<button className="leading-3xl font-medium text-[#000000]">
							Buscar
						</button>
						<img src="/assets/icon.svg" alt="Icon" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="leading-3xl font-medium text-[#000000]">
							Filtrar
						</button>
						<img src="/assets/filter.svg" alt="Filter" />
					</div>
				</div>

				{currentOption === 'dentro-do-prazo' ? (
					<>
						<h1 className="-ml-[370px] mb-4 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{' '}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards />
						<h1 className="-ml-[370px] mb-4 mt-16 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{' '}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards2 />
					</>
				) : (
					<>
						<h1 className="-ml-[370px] mb-4 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{' '}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards2 />
						<h1 className="-ml-[370px] mb-4 mt-16 justify-self-center text-center text-[22px] font-bold text-red-500">
							Eventos:{' '}
							<span className="text-black">
								Tech Talks: Descobrindo as Fronteiras da Tecnologia
							</span>
						</h1>
						<ArtigosCards />
					</>
				)}
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<Footer />
		</div>
	);
}
