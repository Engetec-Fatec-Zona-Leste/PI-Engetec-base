import { useState } from 'react';
import Card from './Card';

// Array de objetos representando os dados dos cards


export default function Evento() {
  // Use o estado para controlar a exibição dos cards

  return (
    <>
    <div className='flex flex-col h-[1280px] mt-36 justify-items-stretch items-center'>
      <h1 className='text-[27px] text-red-500 font-bold justify-self-center text-center'>Meus Eventos</h1>
      <p className='text-center'>Todos os eventos que você organiza ou administra.</p>

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

      <Card />
   
      {/* Paginação */}

    </div>
      <div className="w-[340px] mt-12 relative z-30 flex justify-center -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center bg-white/30">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
        <button type="button" className="w-10 h-1 shadow-lg rounded-lg bg-slate-400 hover:bg-slate-600 active:bg-slate-600" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-10 h-1 shadow-lg rounded-lg bg-slate-400 hover:bg-slate-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-10 h-1 shadow-lg rounded-lg bg-slate-400 hover:bg-slate-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-10 h-1 shadow-lg rounded-lg bg-slate-400 hover:bg-slate-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-10 h-1 shadow-lg rounded-lg bg-slate-400 hover:bg-slate-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>

        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center bg-white/30">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    </div>

    

    </>
  );
}
