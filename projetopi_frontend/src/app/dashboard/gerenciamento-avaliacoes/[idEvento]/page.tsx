'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { FaDownload, FaEdit, FaRegEdit, FaRegEye } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { MdFileDownload, MdStarBorder } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import OutlineButton from '@/components/OutlineButton';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { articlesToRate } from '@/mocks/ArtigosRate';

export default function ArtigosAvaliarPrincipal() {
	const router = useRouter();
	const handleDownloadFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		// backend instructions
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	return (
		<div>
			<Navbar />
			<div className="container mt-52 flex w-full  flex-col justify-center">
				<Title
					title="Artigos"
					subtitle="Todos os artigos enviados do evento tal"
					colorHex="#EF0037"
				/>
				<div className="ml-14 flex flex-col justify-end">
					<SearchFilter />
				</div>
				<div className="mt-8">
					<table className="mx-auto w-[80%] border-separate border-spacing-0 overflow-hidden rounded-xl border-2 border-[#BCBCBC] bg-white">
						<thead className="bg-[#E4E4E4]">
							<tr>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Título
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Autores
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Área Artigos
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Avaliadores
								</th>
								<th className="w-[25%] px-4 py-2 text-left text-base font-bold text-black">
									Área Avaliador
								</th>
								<th className="w-[30%] px-4 py-2 text-left text-base font-bold text-black">
									Status
								</th>
								<th className="w-[15%] px-4 py-2 text-center text-base font-bold text-black">
									Ações
								</th>
							</tr>
						</thead>
						<tbody>
							{articlesToRate.map((article, index) => (
								<tr
									key={index} // Use o índice apenas se não houver outra opção
									className={`border-t ${
										!(article.id % 2 == 0) ? 'bg-[#e4e4e4]' : ''
									}`}
								>
									<td className="px-4 py-3 text-sm text-black">
										{article.title}
									</td>
									<td className="nowrap px-4 py-3 text-sm text-black">
										{article.authorsString}
									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.areas}
									</td>
									<td className="nowrap px-4 py-3 text-sm text-black">
										<div className="text-nowrap rounded-full border border-black pl-2 pr-16 text-start">
											{article.evaluators1}
											<br />
										</div>
										<div className="mt-2 text-nowrap rounded-full border border-black pl-2 pr-16 text-start">
											{article.evaluators2}
										</div>
									</td>
									<td className="px-4 py-3 text-sm text-black">
										<div className="text-nowrap rounded-full border border-black pl-2 pr-16 text-start">
											{article.areaEvaluators1}
											<br />
										</div>

										<div className="mt-2 text-nowrap rounded-full border border-black pl-2 pr-16 text-start">
											{article.areaEvaluators2}
										</div>
									</td>
									<td className="px-4 py-3 text-sm text-black">
										{article.status === 'Aprovado' ? (
											<div className="text-green-500 underline">
												{article.status}
											</div>
										) : article.status === 'Reprovado' ? (
											<div className="text-red-500 underline">
												{article.status}
											</div>
										) : article.status === 'Em andamento' ? (
											<div className="text-blue-500 underline">
												{article.status}
											</div>
										) : (
											<div className="text-black underline">
												{article.status}
											</div>
										)}
									</td>
									<td className="wrap mt-3 flex h-full flex-row items-center justify-center gap-3 px-20 py-3">
										<div className="space-y-8 text-xl">
											<IoEyeOutline className="" />
											<IoMdDownload className="text-purple-500" />
										</div>
										<div className="flex flex-col items-center gap-4">
											<button
												className="
												text-md flex w-full
												items-center text-nowrap rounded-full
												
												border-[1.5px] border-red-500 
												px-2
												py-[4px]
												text-center 
												text-base
												font-medium
												text-red-500
												
												"
												onClick={(e) => {
													e.stopPropagation();
													router.push(
														`/dashboard/avaliar-artigo/${article.id}`
													);
												}}
											>
												{' '}
												Mudar Avaliador
												<FaRegEdit className=" ml-2" />
											</button>
											<button
												className="
												text-md ml-[0.1em] flex
												w-full items-center text-nowrap
												rounded-full
												border-[1.5px] 
												border-cyan-500
												px-[19px]
												py-[4px] 
												text-center
												text-base
												font-medium
												text-black
											"
												onClick={handleDownloadFile}
											>
												{' '}
												Ver Avaliação
												<MdStarBorder className="ml-2 text-xl text-cyan-500" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className="mt-12 flex w-full flex-row justify-center">
						<button
							className="mb-6 flex w-[200px] items-center justify-center
          					  rounded-xl border-none bg-[#B9012D] px-4 py-2
          					  text-center text-base font-medium text-white hover:bg-red-700"
						>
							Voltar
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
