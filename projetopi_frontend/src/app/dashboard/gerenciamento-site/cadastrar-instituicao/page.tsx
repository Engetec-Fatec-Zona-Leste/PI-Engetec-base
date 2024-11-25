'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';

import baseURL from '@/_actions/configUrl';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { InstituitionType, instituitions } from '@/mocks/Instituitions';

export default function CadastrarInstituicao() {
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// await action()
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	const [pending, setPending] = useState(true);
	const [accepted, setAccepted] = useState(false);
	const [declined, setDeclines] = useState(false);

	const [institutions, setInstitutions] =
		useState<InstituitionType[]>(instituitions);
	const [eventId, setEventId] = useState('');

	const handleAccept = (index: number) => {
		const updatedUsers = [...institutions];
		updatedUsers[index].situation = 'accept';
		setInstitutions(updatedUsers);
	};

	const handleDecline = (index: number) => {
		const updatedUsers = [...institutions];
		updatedUsers[index].situation = 'declined';
		setInstitutions(updatedUsers);
	};

	useEffect(() => {
		const fetchInstituicoes = async () => {
			try {
				const response = await baseURL.get('/instituicao/filtro');

				if (Array.isArray(response.data)) {
					const instituicoesOptions = response.data;
					setInstitutions(instituicoesOptions);
				} else {
					console.error(
						'A resposta não contém um array de instituições',
						response.data
					);
					throw new Error('Formato inesperado na resposta da API');
				}
			} catch (error) {
				console.error('Erro ao carregar as instituições:', error);
				throw error;
			}
			setEventId(localStorage.getItem('eventId') ?? '0');
		};
		fetchInstituicoes();
	}, [institutions]);

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-44 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Instituições"
						subtitle="Gerencie as instituições que serão aceitas ou recusadas no evento, ou as cadastre. Não esqueça de salvar suas alterações"
						colorHex="#ef0037"
					/>
				</div>

				<form
					className="mt-8 flex w-3/4 flex-col items-center justify-center"
					onSubmit={handleSubmit}
				>
					<div className="flex w-[100%] gap-10">
						<div className="flex w-[50%] flex-col">
							<label
								className="mb-2 text-sm font-medium"
								htmlFor="instituitionName"
							>
								Nome
							</label>

							<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full border-0 bg-white text-sm outline-none"
									type="text"
									name="instituitionName"
									id="instituitionName"
								/>
							</div>
						</div>
						<div className="flex w-[50%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="cnpj">
								CNPJ
							</label>

							<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full border-0 bg-white text-sm outline-none"
									type="text"
									name="cnpj"
									id="cnpj"
								/>
							</div>
						</div>
					</div>
					<div>
						<div className="mt-10 flex items-center justify-center gap-6">
							<button
								className="w-44
                        rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#4B00E0' }}
								type="submit"
							>
								Cadastrar
							</button>
						</div>
					</div>
				</form>

				<div className="mt-14 flex w-3/4 flex-col">
					<h1 className="text-start text-2xl font-bold text-black ">
						Gerenciamento das instituições
					</h1>
				</div>

				<div className="mt-4 flex w-3/4 items-center justify-between">
					<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
						<button
							onClick={() => {
								setPending(true);
								setAccepted(false);
								setDeclines(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								pending ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									pending ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Pendentes</p>
						</button>
						<button
							onClick={() => {
								setAccepted(true);
								setDeclines(false);
								setPending(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								accepted ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									accepted ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Ativos</p>
						</button>
						<button
							onClick={() => {
								setAccepted(false);
								setDeclines(true);
								setPending(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								declined ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									declined ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Removidos</p>
						</button>
					</div>
					<button
						className="mb-6 mt-4 flex w-1/5
							items-center justify-center rounded-xl border-none bg-[#4B00E0] px-4
							py-2 text-center 
							text-base
							font-medium
							text-white"
						onClick={handleClick}
					>
						Salvar
					</button>
				</div>
				<div className="mt-12 w-3/4 overflow-hidden rounded-xl border border-[#BCBCBC]">
					<table className="w-full text-center">
						<thead className="rounded-t-xl bg-[#DD4467] text-white">
							<tr className="h-14">
								<th scope="col" className=""></th>
								<th scope="col" className="w-[57%] text-start text-lg">
									Nome
								</th>
								<th scope="col" className="text-start text-lg">
									CNPJ
								</th>
							</tr>
						</thead>
						<tbody className="rounded-b-xl">
							{instituitions.map((user, i) => {
								if (user.situation === 'pending' && pending) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleCheck
														className="cursor-pointer text-[2rem] text-green-600"
														onClick={() => handleAccept(i)}
													/>
													<CiCircleRemove
														className="cursor-pointer text-[2rem] text-red-600"
														onClick={() => handleDecline(i)}
													/>
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
										</tr>
									);
								} else if (user.situation === 'accept' && accepted) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleRemove
														className="cursor-pointer text-[2rem] text-red-600"
														onClick={() => handleDecline(i)}
													/>
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
										</tr>
									);
								} else if (user.situation === 'declined' && declined) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleCheck
														className="cursor-pointer text-[2rem] text-green-600"
														onClick={() => handleAccept(i)}
													/>
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
			</div>

			<Footer />
		</div>
	);
}
