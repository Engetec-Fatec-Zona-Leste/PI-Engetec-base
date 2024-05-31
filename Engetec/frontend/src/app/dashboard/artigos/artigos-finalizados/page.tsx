'use client';

import { useState } from 'react';

import ArtigosCards from '@/components/Artigos/ArtigosCards/Cards';
import ArtigosCards2 from '@/components/Artigos/ArtigosCards/Cards2';
import ArtigosFormFinalizados from '@/components/Artigos/ArtigosFormFinalizados/page';
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
			<main>
				<div className="mt-28 flex flex-col items-center justify-center">
					<h1 className="mt-12 justify-self-center text-center text-[30px] font-bold text-red-500">
						Arquivos
					</h1>
					<p className="mb-14 text-center font-medium">
						Visualizar Informações
					</p>
					<ArtigosFormFinalizados />
				</div>
			</main>
			<Footer />
		</div>
	);
}
