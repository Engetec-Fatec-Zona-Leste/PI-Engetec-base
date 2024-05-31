'use client';

import { useState } from 'react';

import Image from 'next/image';

import RemoveLogo from '@/imgs/remove-x.png';
import { KnowledgeSpecialtyArea } from '@/lib/repository/knowledge-specialty-area/index.repository';

type CriarEventoProps = {
	handleOptionClick: (option: string) => void;
};

export default function CriarEspecialide({
	handleOptionClick,
}: CriarEventoProps) {
	const [name, setName] = useState('');
	const [descricao, setDescricao] = useState('');
	const [subArea, setSubArea] = useState('');
	const [bigArea, setBigArea] = useState('');
	const [area, setArea] = useState('');
	const [knowledgeSpecialty, setKnowledgeSpecialty] = useState<
		KnowledgeSpecialtyArea[]
	>([]);

	const handleAddOnTable = () => {
		setKnowledgeSpecialty((prev) => [
			...prev,
			{
				activityName: name,
				activityDescription: descricao,
				subArea: subArea,
				bigArea: bigArea,
				area: area,
			},
		]);
		setDescricao('');
		setName('');
		setSubArea('');
		setArea('');
		setBigArea('');
	};

	const itemToRemove = (i: any) => {
		setKnowledgeSpecialty((prevKnowledge: any) => {
			const updatedArray = [...prevKnowledge];
			updatedArray.splice(i, 1);
			return updatedArray;
		});
	};

	return (
		<div className="container">
			<div className="w-8/12">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Criar Especialidade de Conhecimento
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Crie as especialidade de conhecimento de cada sub-área
				</h2>
				<form className="mt-8 w-full" onSubmit={handleAddOnTable}>
					<div className="flex justify-center gap-5">
						<div className="flex w-full flex-row place-content-between">
							<div className="mb-5 flex w-5/12 flex-col rounded-md">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Grande Área
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="bigArea"
										id="bigArea"
										value={bigArea}
										onChange={(e) => setBigArea(e.target.value)}
										required
									>
										<option value="Option">Option</option>
									</select>
								</div>
							</div>

							<div className="mb-5 flex w-5/12 flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Área
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="area"
										id="area"
										value={area}
										onChange={(e) => setArea(e.target.value)}
										required
									>
										<option value="Option">Option</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center gap-5">
						<div className="flex w-full flex-row place-content-between">
							<div className="mb-5 flex w-5/12 flex-col rounded-md">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Sub-Área
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<select
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="subArea"
										id="subArea"
										value={subArea}
										onChange={(e) => setSubArea(e.target.value)}
										required
									>
										<option value="Option">Option</option>
									</select>
								</div>
							</div>

							<div className="mb-5 flex w-5/12 flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Nome
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full border-0 bg-white text-sm outline-none"
										type="text"
										name="name"
										id="name"
										placeholder="Nome"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center gap-5">
						<div className="flex w-full flex-row place-content-between">
							<div className="mb-5 flex w-5/12 flex-col">
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
							<button
								className="mt-6 h-12 w-5/12 rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#501EB4' }}
								type="button"
								onClick={handleAddOnTable}
							>
								Cadastrar
							</button>
						</div>
					</div>
				</form>

				<div className="items-left justify-left mt-28 flex">
					<table className="w-full table-auto">
						<thead style={{ backgroundColor: '#DD4467' }}>
							<tr className="h-14">
								<th scope="col" className="rounded-tl-lg"></th>
								<th
									scope="col"
									style={{ color: '#FFFFFF' }}
									className="text-left"
								>
									Nome
								</th>
								<th
									scope="col"
									style={{ color: '#FFFFFF' }}
									className="text-left"
								>
									Descrição
								</th>
								<th
									scope="col"
									style={{ color: '#FFFFFF' }}
									className="rounded-tr-lg text-left"
								>
									Sub-Área
								</th>
							</tr>
						</thead>
						<tbody>
							{knowledgeSpecialty && (
								<>
									{knowledgeSpecialty.map((knowledgeSpecialty, index) => {
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
													<div className="flex flex-row justify-center gap-2">
														<button
															className="middle items-center justify-center"
															onClick={() => itemToRemove(index)}
														>
															<Image src={RemoveLogo} alt="" height={20} />
														</button>
													</div>
												</td>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="eventName"
													>
														{knowledgeSpecialty.activityName}
													</label>
												</td>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="eventName"
													>
														{knowledgeSpecialty.activityDescription}
													</label>
												</td>
												<td className="rounded-br-lg">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="eventName"
													>
														{knowledgeSpecialty.subArea}
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
					>
						Finalizar
					</button>
				</div>
			</div>
		</div>
	);
}
