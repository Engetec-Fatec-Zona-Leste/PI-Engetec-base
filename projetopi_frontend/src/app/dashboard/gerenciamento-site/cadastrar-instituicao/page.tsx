'use client';

import { useEffect, useState } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import axios from 'axios'; // Para fazer as requisições HTTP
import baseURL from '@/_actions/configUrl';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';

export default function CadastrarInstituicao() {
	const [pending, setPending] = useState(true); // Pendentes
	const [accepted, setAccepted] = useState(false); // Ativos
	const [declined, setDeclines] = useState(false); // Recusados
	const [institutions, setInstitutions] = useState<any[]>([]); // Tipagem flexível para consumir dados da API
	const [eventId, setEventId] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	// Função para carregar as instituições com base no status selecionado
	const fetchInstituicoes = async () => {
		try {
			let url = '';

			if (pending) {
				url = '/instituicao/pendente'; // Rota para pendentes
			} else if (accepted) {
				url = '/instituicao/aprovada'; // Rota para ativos
			} else if (declined) {
				url = '/instituicao/recusada'; // Rota para recusados
			}

			const response = await baseURL.get(url); // Consome a rota correta

			if (Array.isArray(response.data)) {
				setInstitutions(response.data); // Atualiza a lista de instituições diretamente com os dados da API
			} else {
				console.error('A resposta não contém um array de instituições', response.data);
				throw new Error('Formato inesperado na resposta da API');
			}
		} catch (error) {
			console.error('Erro ao carregar as instituições:', error);
			throw error;
		}
		setEventId(localStorage.getItem('eventId') ?? '0');
	};

	// Função para aprovar uma instituição
	const handleAccept = async (id: string) => {
		try {
			await axios.post(`http://localhost:3031/controle/aprovar/instituicao`, {
				id: id, // Passando o ID da instituição
			});
			// Recarrega as instituições após a aprovação
			fetchInstituicoes();
			showToast('success', 'Instituição aprovada com sucesso');
		} catch (error) {
			console.error('Erro ao aprovar a instituição:', error);
			showToast('error', 'Erro ao aprovar a instituição');
		}
	};

	// Função para recusar uma instituição
	const handleDecline = async (id: string) => {
		try {
			await axios.post(`http://localhost:3031/controle/recusar/instituicao`, {
				id: id, // Passando o ID da instituição
			});
			// Recarrega as instituições após a recusa
			fetchInstituicoes();
			showToast('success', 'Instituição recusada com sucesso');
		} catch (error) {
			console.error('Erro ao recusar a instituição:', error);
			showToast('error', 'Erro ao recusar a instituição');
		}
	};

	useEffect(() => {
		fetchInstituicoes();
	}, [pending, accepted, declined]); // Recarrega sempre que o filtro for alterado

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
						<p className="">Nova Instituição</p>
					</button>
				</div>

				<div className="overflow-x-auto w-full">
					<table className="table-auto w-full">
						<thead>
							<tr>
								<th className="text-left text-sm text-[#4E4B66]">Ações</th>
								<th className="text-left text-sm text-[#4E4B66]">Instituição</th>
								<th className="text-left text-sm text-[#4E4B66]">CNPJ</th>
							</tr>
						</thead>
						<tbody>
							{institutions.map((user, i) => {
								if (user.status === 'pending') {
									return (
										<tr
											key={user.cnpj}
											className="h-14 border-b border-[#e9e9e9]"
										>
											<td className="flex items-center justify-center gap-4">
												<button
													onClick={() => handleAccept(user.id)} // Enviando o ID
													className="rounded-lg border-none text-green-500"
												>
													<CiCircleCheck className="text-[1.5rem]" />
												</button>
												<button
													onClick={() => handleDecline(user.id)} // Enviando o ID
													className="rounded-lg border-none text-red-500"
												>
													<CiCircleRemove className="text-[1.5rem]" />
												</button>
											</td>
											<td className="text-start">
												{user.nomeInstituicao}
											</td>
											<td>{user.cnpj}</td>
										</tr>
									);
								} else {
									return null;
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
