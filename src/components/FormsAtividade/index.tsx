'use client';

import { useState } from 'react';

import Image from 'next/image';
import RemoveLogo from "./remove-x.png"
import search from './search.png';

import axios from 'axios';

import { createActivity } from '@/lib/repository/createActivity/index.repository';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CadastrarAtivdidade({ handleNextClick }: CriarEventoProps) {
	const [name, setName] = useState('');
	const [descricao, setDescricao] = useState('');
	const [createActivity, setCreateActivity] = useState<createActivity[]>([]);

	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};

	const handleAddOnTable = () => {
		setCreateActivity((prev) => [
			...prev,
			{
				activityName: name,
				activityDescription: descricao,
			},
		]);
		setDescricao('');
		setName('');
	};

	const itemToRemove = (i: any) => {
		setCreateActivity((prevCreateActivity: any) => {
		  const updatedArray = [...prevCreateActivity];
		  updatedArray.splice(i, 1); 
		  return updatedArray;
		});
	  };

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-8/12">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Criar Atividades
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
                Crie os tipos de atividades que possuirão durante o evente
                				</h2>
				<form className="mt-8 w-full" onSubmit={handleAddOnTable}>
					<div className="flex justify-center gap-5">
						<div className="w-full flex flex-row place-content-between">
							<div className="mb-5 flex flex-col w-5/12 rounded-md">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Name
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full border-0 bg-white text-sm outline-none"
										type="text"
										name="activityName"
										id="activityName"
										placeholder="Nome da Atividade"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-5 flex flex-col w-5/12">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Descrição
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full border-0 bg-white text-sm outline-none"
										type="text"
										name="descricao"
										id="descricao"
										placeholder="Descrição"
										value={descricao}
										onChange={(e) => setDescricao(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center gap-5" style={{marginTop: '4rem'}}>
						<button
							className="mb-6 w-3/12 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#501EB4' }}
							type="button"
							onClick={handleAddOnTable}
						>
							Cadastrar
						</button>
					</div>
				</form>

                <div className="flex cursor-pointer gap-3 w-full justify-end">
					<p className="text-lg font-medium">Buscar</p>
					<Image src={search} alt="" height={16} width={24} />
				</div>

				<div className="flex items-left justify-left">
					<table className="mt-12 w-full table-auto">
						<thead style={{ backgroundColor: '#DD4467' }}>
							<tr className="h-14">
                            <th scope="col" className="rounded-tl-lg"></th>
								<th scope="col" style={{ color: '#FFFFFF' }} className="text-left">
									Nome
								</th>
								<th scope="col" style={{ color: '#FFFFFF' }} className="text-left rounded-tr-lg">
									Descrição
								</th>
							</tr>
						</thead>
						<tbody>
							{createActivity && (
								<>
									{createActivity.map((knowledge, index) => {
										return (
											<tr
												key={index}
												className="h-14"
												style={{
													backgroundColor: !(index % 2 === 0)
														? '#E4E4E4'
														: '#fff',
												}}
											>
                                                <td className="rounded-bl-lg">
													<div className='flex flex-row gap-2 justify-center'>
													<button className="middle items-center justify-center"
													onClick={() => itemToRemove(index)}>
														<Image src={RemoveLogo} alt="" height={20} />
													</button>
													</div>
												</td>
												<td className="">
                                                <label className="rounded-2xl border border-black mb-2 text-sm font-medium p-2" htmlFor="eventName">
                                                {knowledge.activityName}
								                 </label>  
                                                </td>
												<td className="rounded-br-lg">
                                                <label className="rounded-2xl border border-black mb-2 text-sm font-medium p-2" htmlFor="eventName">
                                                    {knowledge.activityDescription}
								                 </label>
                                                </td>
											</tr>
										);
									})}
								</>
							)}
						</tbody>
					</table>
				</div>
                <div className="mt-12 flex items-center justify-center gap-5">
					<button
						className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#8A8A8A' }}
						type="submit"
					>
						Voltar
					</button>
					<button
						className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#4C1FA6' }}
						type="submit"
						onClick={handleNextButtonClick}
					>
						Finalizar
					</button>
				</div>
			</div>
		</div>
	);
}


