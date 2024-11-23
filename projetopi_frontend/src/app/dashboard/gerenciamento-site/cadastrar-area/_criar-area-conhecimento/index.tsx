'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import RemoveLogo from '@/assets/remove-x.png';
import { Knowledge } from '@/lib/repository/knowledge-area/index.repository';

type CriarEventoProps = {
	handleOptionClick: (option: string) => void;
};

export default function CriarAreaConhecimento({
	handleOptionClick,
}: CriarEventoProps) {
	const [name, setName] = useState('');
	const [descricao, setDescricao] = useState('');
	const [bigArea, setBigArea] = useState('');
	const [knowledge, setKnowledge] = useState<Knowledge[]>([]);
	const router = useRouter();

	const handleAddOnTable = () => {
		setKnowledge((prev) => [
			...prev,
			{
				activityName: name,
				activityDescription: descricao,
				bigArea: bigArea,
			},
		]);
		setDescricao('');
		setName('');
		setBigArea('');
	};

	const itemToRemove = (i: any) => {
		setKnowledge((prevKnowledge: any) => {
			const updatedArray = [...prevKnowledge];
			updatedArray.splice(i, 1);
			return updatedArray;
		});
	};

	return (
		<div className="container">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Criar Áreas de Conhecimento
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Crie as áreas de conhecimento de cada grande área
				</h2>
				<div className="flex justify-center">
					<form className="mt-8 w-[30vw]" onSubmit={handleAddOnTable}>
						<div className="flex flex-col justify-center gap-5">
							<div className="flex w-full flex-row place-content-between gap-5">
								<div className="mb-5 flex w-full flex-col rounded-md">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="grandeArea"
									>
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

								<div className="mb-5 flex w-full flex-col rounded-md">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="eventName"
									>
										Nome
									</label>

									<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full border-0 bg-white text-sm outline-none"
											type="text"
											name="activityName"
											id="activityName"
											placeholder="Area de Conhecimento"
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
										/>
									</div>
								</div>
							</div>

							<div className="flex w-full flex-row place-content-between gap-5">
								<div className="mb-5 flex w-full flex-col">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="eventName"
									>
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
				</div>

				<div className="items-left justify-left mt-44 flex">
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
									Grande Área
								</th>
							</tr>
						</thead>
						<tbody>
							{knowledge && (
								<>
									{knowledge.map((knowledge, index) => {
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
														{knowledge.activityName}
													</label>
												</td>
												<td className="">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="eventName"
													>
														{knowledge.activityDescription}
													</label>
												</td>
												<td className="rounded-br-lg">
													<label
														className="mb-2 rounded-2xl border border-black p-2 text-sm font-medium"
														htmlFor="eventName"
													>
														{knowledge.bigArea}
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
						type="button"
						onClick={() => router.back()}
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
