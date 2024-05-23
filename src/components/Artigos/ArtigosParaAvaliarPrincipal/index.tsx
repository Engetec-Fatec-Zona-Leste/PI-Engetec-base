'use client';

// import filesData from './arquivosConcluidos.json';
import { useState } from 'react';

import Image from 'next/image';

import { CiFilter } from 'react-icons/ci';
import { GoXCircle } from 'react-icons/go';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { PiEyeBold } from 'react-icons/pi';

import database from './events.json';

export default function ArtigosParaAvaliarPrincipais() {
	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="flex w-4/5 flex-col items-center">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Arquivos
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Todos os artigos direcionados a você para a avaliação
				</h2>

				<div className="absolute mt-14 flex w-8/12 flex-col items-end gap-2">
					<div className="flex cursor-pointer gap-3">
						<p className="text-lg font-medium">Buscar</p>
						<IoSearchOutline size={30} />
					</div>
					<div className="flex cursor-pointer gap-5">
						<p className="text-lg font-medium">Filtrar</p>
						<CiFilter size={30} />
					</div>
				</div>

				<div className="align-center mt-24 flex w-11/12 flex-col items-center justify-center rounded-md border-2 border-[#4B00E0] p-3 text-center shadow-lg">
					<h1 className="mb-6 text-xl text-[#501EB4]">Eventos pendentes</h1>
					<div className="flex w-full flex-col items-center justify-center gap-4">
						{database.map((event, index) => {
							return (
								<div
									className="mb-4 flex w-4/6 items-center gap-2 rounded-md border-2 border-[#595959] p-2"
									key={index}
								>
									<PiEyeBold size={22} className="cursor-pointer" />
									<IoCheckmarkCircleOutline
										color={'#33880a'}
										size={22}
										className="cursor-pointer"
									/>
									<GoXCircle
										color={'#ef0037'}
										size={22}
										className="cursor-pointer"
									/>
									<p className="ml-2 font-semibold">{event.title}</p>
								</div>
							);
						})}
					</div>
					<div className="align-center mb-5 mt-5 flex w-[340px] -translate-x-6 justify-center space-x-3 rtl:space-x-reverse">
						<button
							type="button"
							className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
							data-carousel-prev
						>
							<span className="inline-flex items-center justify-center bg-white/30">
								<svg
									className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 1 1 5l4 4"
									/>
								</svg>
								<span className="sr-only">Previous</span>
							</span>
						</button>
						<button
							type="button"
							className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600 active:bg-slate-600"
							aria-current="true"
							aria-label="Slide 1"
							data-carousel-slide-to="0"
						></button>
						<button
							type="button"
							className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
							aria-current="false"
							aria-label="Slide 2"
							data-carousel-slide-to="1"
						></button>
						<button
							type="button"
							className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
							aria-current="false"
							aria-label="Slide 3"
							data-carousel-slide-to="2"
						></button>
						<button
							type="button"
							className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
							aria-current="false"
							aria-label="Slide 4"
							data-carousel-slide-to="3"
						></button>

						<button
							type="button"
							className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
							data-carousel-next
						>
							<span className="inline-flex items-center justify-center bg-white/30">
								<svg
									className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 6 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 9 4-4-4-4"
									/>
								</svg>
								<span className="sr-only">Next</span>
							</span>
						</button>
					</div>
				</div>

				{database && (
					<>
						{database.map((file, index) => {
							return (
								<div key={index} className="ml-10 mt-16 w-full">
									<div className="mb-5 flex gap-1 text-lg font-bold">
										<h1 className="text-[#EF0037]">Evento:</h1>
										<h1>{file.title}</h1>
									</div>
									{file.arquivos.map((files, index) => {
										return (
											<div
												key={index}
												className="mb-5 ml-[2rem] flex w-full flex-col p-1"
											>
												<div className="flex w-11/12 cursor-pointer flex-col gap-2 rounded-lg border border-[#EF0037] p-5 shadow-lg">
													<div className='flex justify-between'>
													<p className="text-lg text-[#EF0037]">
														{files.file_title}
													</p>
													<div className='rounded-md border-2 border-[#595959] flex p-1 gap-1 flex-nowrap justify-center items-center'>
													<p className='flex flex-nowrap text-sm'>Ver artigo</p>
													<PiEyeBold size={19} className="cursor-pointer" />
													</div>
													</div>


													<div className="ml-4 flex w-full flex-col gap-2">
														<div className="flex gap-1">
															<div>
																<p className="text-nowrap font-bold">
																	Palavras-Chave:
																</p>
															</div>
															<p>{files.palavras_chave}</p>
														</div>

														<div className="flex gap-1">
															<div>
																<p className="text-nowrap font-bold">Tema:</p>
															</div>
															<p>{files.tema}</p>
														</div>

														<div className="flex gap-1">
															<div>
																<p className="text-nowrap font-bold">
																	Área do Arquivo:
																</p>
															</div>
															<p>{files.area}</p>
														</div>
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

				<div className="bottom-5 left-1/2 mt-12 flex w-[340px] -translate-x-6 justify-center space-x-3 rtl:space-x-reverse">
					<button
						type="button"
						className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
						data-carousel-prev
					>
						<span className="inline-flex items-center justify-center bg-white/30">
							<svg
								className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 1 1 5l4 4"
								/>
							</svg>
							<span className="sr-only">Previous</span>
						</span>
					</button>
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600 active:bg-slate-600"
						aria-current="true"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
						aria-current="false"
						aria-label="Slide 3"
						data-carousel-slide-to="2"
					></button>
					<button
						type="button"
						className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
						aria-current="false"
						aria-label="Slide 4"
						data-carousel-slide-to="3"
					></button>

					<button
						type="button"
						className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
						data-carousel-next
					>
						<span className="inline-flex items-center justify-center bg-white/30">
							<svg
								className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 9 4-4-4-4"
								/>
							</svg>
							<span className="sr-only">Next</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
