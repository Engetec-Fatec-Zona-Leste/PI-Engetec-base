import { cardsData, cardsData2 } from "@/mocks/ArtigosCards";
import { useState } from "react";

export default function Card() {
  const [cards, setCards] = useState([...cardsData]);

  return (
    <>
      {/* Renderize os cards com base nos dados do array */}
      {cards.map((card) => (
        <div key={card.id} className='grid grid-cols-2 flex flex-col items-center mt-6 mb-6 w-[950px] ring-2 ring-[#FA023E] rounded-lg pr-2 p-6 gap-10 justify-center shadow-lg'>
          <div className='w-[181%]'>
            <h3 className='text-[#FA023E] text-[23px] font-medium mb-2'>{card.title}</h3>
            <p className="mb-4 font-bold">Tipo do Arquivo: <span className='font-normal'>{card.type}</span></p>
            <p className='mb-4 font-bold ml-6'>Status: <span className='font-normal'>{card.status}</span></p>
            <p className='font-bold ml-6'>Autores: <span className='font-normal'>{card.Autores}</span></p>

            
            {card.schedule && (
              <>
            <div className="flex gap-10 ml-6 mt-4">
                <p className='font-bold'>Data de Envio: <span className='font-normal'>{card.schedule.DatadeEnvio}</span></p>
                {card.schedule.DatadeEnvio && (
                  <p className='font-bold'>Apresentação: <span className='font-normal'>{card.schedule.DatadeEnvio}</span></p>
                )}
              {card.sala && (
                <p className='font-bold'>Sala: <span className='font-normal'>{card.sala}</span></p>
              )}
              </div>
              </>
            )}
          </div>

<div className="flex w-[110px] ml-[325px]">

          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-row gap-2 ring-2 ring-black rounded-full'>
              <button className='text-[#000000] text-[12px] p-1 ml-2 font-medium'>Ver artigo</button>
              <img src='/assets/eye.svg' alt='Ver evento' />
            </div>

            <div className='flex flex-row gap-2 ring-2 ring-[#4B00E0] rounded-full px-4'>
              <button className='text-[#4B00E0] text-[14px] ml-2 p-1 font-medium'>Baixar</button>
              <img src='/assets/Artigos/baixar.png' alt='Ver todas as edições' className="w-4 h-4 mt-2 -ml-1"/>
            </div>

            <div className='flex flex-row gap-2 ring-2 ring-[#126A10] rounded-full px-4'>
              <button className='text-[#126A10] text-[14px] p-1 ml-2 font-medium'>Editar</button>
              <img src='/assets/Artigos/editar.png' alt='Ver evento' className="w-4 h-4 mt-2 -ml-1"/>
            </div>

            <div className='flex flex-row gap-2 ring-2 ring-[#BF0000] rounded-full px-4'>
              <button className='text-[#BF0000] text-[14px] p-1 ml-2 font-medium'>Baixar</button>
              <img src='/assets/Artigos/lixeira.png' alt='Ver todas as edições' className="w-4 h-4 mt-2 -ml-1"/>
            </div>
</div>
          </div>
        </div>
      ))}
    </>
  );
}
