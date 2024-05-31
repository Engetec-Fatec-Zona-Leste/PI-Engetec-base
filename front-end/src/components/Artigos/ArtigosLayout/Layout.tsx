'use client';

import { useState } from 'react';

import InputCheckbox from '@/components/Artigos/ArtigosCheckboxs/InputCheckbox';
import InputDate from '@/components/Artigos/ArtigosInputs/InputDate';
import InputFile from '@/components/Artigos/ArtigosInputs/InputFile';
import InputSelect from '@/components/Artigos/ArtigosInputs/InputSelect';
import InputText from '@/components/Artigos/ArtigosInputs/InputText';
import InputTextarea from '@/components/Artigos/ArtigosInputs/InputTextarea';
import Pagination from '@/components/Artigos/ArtigosPagination/pagination';
import Table from '@/components/Artigos/ArtigosTables/Table';

export default function Layout() {
	const [precisaDeAvaliacao, setPrecisaDeAvaliacao] = useState(true);

	const handleCheckboxChange = (
		isChecked: boolean | ((prevState: boolean) => boolean)
	) => {
		setPrecisaDeAvaliacao(isChecked);
	};

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	return (
		<div className="container relative mx-auto mt-32 flex h-[200vh] flex-col items-center justify-center">
			<h1 className="mb-4 text-3xl font-bold text-[#EF0037]">Arquivos</h1>
			<p className="text-font-dosis mb-4 text-[16px] font-normal leading-[18.7px] text-[#000000]">
				Arquivos que serão submetidos pelos participantes
			</p>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-20">
				<div>
					{precisaDeAvaliacao && (
						<>
							<InputSelect
								id="select"
								label="Tipo de arquivo"
								options={[
									{ value: 'Análise Ciêntifica', label: 'Análise Ciêntifica' },
									{ value: 'option2', label: 'Option 2' },
									{ value: 'option3', label: 'Option 3' },
								]}
							/>

							<InputTextarea
								id="textarea"
								label="Normas de publicação"
								rows={4}
							/>

							<InputText id="input" label="Limite de arquivos por avaliador" />

							<div className="flex gap-12">
								<InputDate id="date1" label="Data de início para avaliação " />
								<svg
									className="-ml-12 mt-1 h-4 w-4 text-gray-800"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								<InputDate id="date2" label="Data final para avaliação" />
							</div>
						</>
					)}
				</div>

				<div>
					<div className="flex gap-20">
						<InputDate id="date1" label="Data 1" />
						<InputDate id="date2" label="Data 2" />
					</div>
					<div className="mb-8 mt-8 flex flex-col gap-2">
						<div className="-mt-2 mb-8 flex flex-col gap-8">
							<InputFile id="file1" label="Upload arquivo 1" />
							<InputFile id="file2" label="Upload arquivo 2" />
						</div>
					</div>

					<div className="mb-4 flex w-full gap-10">
						<InputCheckbox
							id="checkbox1"
							label="Precisa de Avalicação"
							isChecked={precisaDeAvaliacao}
							onChange={handleCheckboxChange}
						/>
						<InputCheckbox
							id="checkbox1"
							label="Precisa de Apresentação"
							onChange={handleCheckboxChange}
							isChecked={false}
						/>
					</div>
				</div>
			</div>

			<div className="mt-16">
				<button className="rounded-full bg-[#0391C9] p-3 px-8 text-white">
					Cadastrar arquivo
				</button>
			</div>

			<div className="mt-8 space-x-6">
				<button className="rounded-full bg-[#8A8A8A] p-3 px-16 text-white">
					Voltar
				</button>
				<button className="rounded-full bg-[#4B00E0] p-3 px-14 text-white">
					Avançar
				</button>
			</div>

			<div className="mt-16 flex w-full items-center justify-center">
				<Table />
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
