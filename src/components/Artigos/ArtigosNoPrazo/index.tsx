'use client';

import filesData from './arquivosConcluidos.json';
import Image from 'next/image';
import filter from './filter.png';
import search from './search.png';
import { useState } from 'react';

export default function ArtigosConcluidos() {
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-4/5">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Atividades
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Atividades presentes durante o evento
				</h2>
                <div className="flex flex-col gap-2 items-end w-8/12 absolute">
					<div className="flex cursor-pointer gap-3">
						<p className="text-lg font-medium">Buscar</p>
						<Image src={search} alt="" height={20} />
					</div>
					<div className="flex cursor-pointer gap-5">
						<p className="text-lg font-medium">Filtrar</p>
						<Image src={filter} alt="" height={20} />
					</div>
				</div>


				{filesData && (
					<>
						{filesData.map((file, index) => {
							return (
								<div key={index} className="ml-10 mt-16">
									<div className="mb-5 flex gap-1 text-lg font-bold">
										<h1 className="text-[#EF0037]">Evento:</h1>
										<h1>{file.titulo_evento}</h1>
									</div>
									{file.arquivos.map((files, index) => {
										return (
											<div
												key={index}
												className="mb-5 flex w-full flex-col p-1 ml-[2rem]"
											>
												<div className="flex w-10/12 flex-col gap-2 rounded-lg border border-[#EF0037] p-5 shadow-lg cursor-pointer">
													<p className="text-lg text-[#EF0037]">
														{files.arquivo}
													</p>
													<div className="flex gap-1">
														<p className="font-bold">Prazo de entrega:</p>
														<p>{files.prazo_de_entrega}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
}
