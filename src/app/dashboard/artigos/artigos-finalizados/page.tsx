'use client'
import { useState } from 'react';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import ArtigosCards from '@/components/Artigos/ArtigosCards/Cards'
import ArtigosCards2 from '@/components/Artigos/ArtigosCards/Cards2'
import Tabfiles from '@/components/Artigos/NavbarViewFilesEnviados/index'
import Pagination from '@/components/Artigos/ArtigosPagination/pagination';
import ArtigosFormFinalizados from "@/components/Artigos/ArtigosFormFinalizados/page";
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
            <main>
                <div className='flex flex-col mt-28 items-center justify-center'>
                    <h1 className='mt-12 text-[30px] text-red-500 font-bold justify-self-center text-center'>Arquivos</h1>
                    <p className='mb-14 text-center font-medium'>Visualizar Informações</p>
                    <ArtigosFormFinalizados />
                </div>
            </main>
            <Footer />
        </div>
    );
}
