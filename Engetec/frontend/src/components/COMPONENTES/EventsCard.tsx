import { useState } from 'react';

import Image from 'next/image';

import { FaRegEye } from 'react-icons/fa';

import { cardsData } from '@/mocks/EventCards';

export default function EventsCard() {
	return (
		<>
			{cardsData.map((card) => (
				<div
					key={card.id}
					className="mb-6 mt-6 flex h-[420px] w-[1000px] flex-col items-center justify-self-center rounded-lg pr-2 ring-2 ring-[#FA023E]"
				>
					<div className="mt-6 grid h-[50%] w-[100%] grid-cols-7">
						<div className="col-span-2 ml-6">
							<Image src={card.imageUrl} alt="Imagem do evento 1" />
						</div>

						<div className="col-span-4 -ml-[70px]">
							<h3 className="mb-2 text-[21px] font-bold text-[#FA023E]">
								{card.title}
							</h3>
							<div className="grid grid-cols-2">
								<div>
									<p className="mb-4 font-bold">
										Data de Inicio:{' '}
										<span className="font-normal">{card.startDate}</span>
									</p>
									<p className="font-bold">Período e horário:</p>
									<p className="font-bold">
										Manhã:{' '}
										<span className="font-normal">{card.schedule.morning}</span>
									</p>
									<p className="font-bold">
										Tarde:{' '}
										<span className="font-normal">
											{card.schedule.afternoon}
										</span>
									</p>
								</div>
								<div>
									<p className="mb-4 font-bold">
										Data de Finalização:{' '}
										<span className="font-normal">{card.endDate}</span>
									</p>
									<p className="font-bold">
										Carga horária:{' '}
										<span className="font-normal">{card.duration}</span>
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="mr-5 flex flex-row gap-2 rounded-lg ring-2 ring-black">
								<button className="ml-2 p-1 text-[12px] font-medium text-[#000000]">
									Ver evento
								</button>
								<FaRegEye />
							</div>

							<div className="mr-5 flex flex-row items-center justify-center gap-2 rounded-lg ring-2 ring-black">
								<button className="ml-2 text-[12px] font-medium text-[#000000]">
									Ver todas as edições{' '}
								</button>
								<FaRegEye className="mr-5" width={50} />
							</div>
						</div>
					</div>

					<div className="flex h-[50%] w-full justify-items-stretch">
						<h3 className="ml-8 justify-self-start font-bold">Descrição: </h3>
						<p className="-ml-20 mb-6 mr-5 mt-8 justify-self-start">
							{card.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
}
