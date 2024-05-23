'use client'
import { useState } from 'react';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import ArtigosCards from '@/components/Artigos/ArtigosCards/Cards'
import ArtigosCards2 from '@/components/Artigos/ArtigosCards/Cards2'
import Tabfiles from '@/components/Artigos/NavbarViewFilesEnviados/index'
import Pagination from '@/components/Artigos/ArtigosPagination/pagination';
import React from 'react';

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
		<div className='h-full flex flex-col justify-items-center justify-center'>
			<Navbar />

			<div className='flex flex-col mt-28 items-center justify-center'>
				<Tabfiles
					currentOption={currentOption}
					handleOptionClick={handleOptionClick}
				/>
				<h1 className='mt-20 text-[30px] text-red-500 font-bold justify-self-center text-center'>Arquivos</h1>
				<p className='text-center font-medium'>Todos os arquivos enviadors e relacionados a você</p>

				<div className='ml-[780px] flex flex-col gap-4'>
					<div className='flex flex-row gap-2'>
						<button className='text-[#000000] font-medium leading-3xl'>Buscar</button>
						<img src='/assets/icon.svg' alt='Icon' />
					</div>
					<div className='flex flex-row gap-4'>
						<button className='text-[#000000] font-medium leading-3xl'>Filtrar</button>
						<img src='/assets/filter.svg' alt='Filter' />
					</div>
				</div>

				{currentOption === 'dentro-do-prazo' ? (
                    <>
                        <h1 className='-ml-[370px] mb-4 text-[22px] text-red-500 font-bold justify-self-center text-center'>
                            Eventos: <span className='text-black'>Tech Talks: Descobrindo as Fronteiras da Tecnologia</span>
                        </h1>
                        <ArtigosCards />
                        <h1 className='mt-16 -ml-[370px] mb-4 text-[22px] text-red-500 font-bold justify-self-center text-center'>
                            Eventos: <span className='text-black'>Tech Talks: Descobrindo as Fronteiras da Tecnologia</span>
                        </h1>
                        <ArtigosCards2 />
                    </>
                ) : (
                    <>
                        <h1 className='-ml-[370px] mb-4 text-[22px] text-red-500 font-bold justify-self-center text-center'>
                            Eventos: <span className='text-black'>Tech Talks: Descobrindo as Fronteiras da Tecnologia</span>
                        </h1>
                        <ArtigosCards2 />
                        <h1 className='mt-16 -ml-[370px] mb-4 text-[22px] text-red-500 font-bold justify-self-center text-center'>
                            Eventos: <span className='text-black'>Tech Talks: Descobrindo as Fronteiras da Tecnologia</span>
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
