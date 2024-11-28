'use client';

import { useEffect, useState } from 'react';
import { CiCircleRemove, CiCircleCheck } from 'react-icons/ci';
import axios from 'axios';
import baseURL from '@/_actions/configUrl';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';

export default function CadastrarInstituicao() {
	const [statusFilter, setStatusFilter] = useState<'pending' | 'accepted' | 'declined'>('pending'); // Filtro de status
	const [institutions, setInstitutions] = useState<any[]>([]); // Lista de instituições
	const [loading, setLoading] = useState(false);
	const session = document.cookie.split('; ').find(row => row.startsWith('session='))?.split('=')[1];
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const institutionData = {
			nome: formData.get('nome'),
			cnpj: formData.get('cnpj'),
		};

		try {
			const response = await baseURL.post('/instituicao/cadastrar', institutionData);
			if (response.data.success) {
				showToast('success', 'Institui o cadastrada com sucesso.');
				fetchInstituicoes(); // Atualiza a lista de institui es
			} else {
				showToast('error', response.data.message);
			}
		} catch (error) {
			console.error('Erro ao cadastrar institui o:', error);
			showToast('error', 'Erro ao cadastrar institui o. Tente novamente mais tarde.');

		}
	};

	// Carregar instituições com base no filtro de status
	const fetchInstituicoes = async () => {
		try {
			const response = await baseURL.get(`/instituicao/${statusFilter}`);
			if (response.data && Array.isArray(response.data.instituicoes)) {
				setInstitutions(response.data.instituicoes);
			} else {
				throw new Error('Formato inesperado na resposta da API.');
			}
		} catch (error) {
			console.error('Erro ao carregar instituições:', error);
			
		}
	};

	const handleStatusChange = async (id: string, action: 'aprovar' | 'recusar') => {
		// Obtém o token do localStorage
		const token = localStorage.getItem('session'); // Modificado para pegar a chave 'session', conforme a função createSession
	
		console.log("Token encontrado no localStorage:", token); 
	
		try {
			// Verifica se o token existe
			if (!token) {
				throw new Error('Token não encontrado. Faça login novamente.');
			}
	
			// Faz a requisição ao servidor com o token no cabeçalho
			await baseURL.post(
				`/controle/${action}/instituicao`, // Rota dinâmica
				{ id }, // Corpo da requisição com o ID
				{
					headers: {
						Authorization: `Bearer ${token}`, // Substitua pelo token correto
					},
				}
			);
	
			console.log('Token usado na requisição:', token);
	
			// Notifica sucesso e atualiza a lista
			showToast(
				'success',
				`Instituição ${action === 'aprovar' ? 'aprovada' : 'recusada'} com sucesso.`
			);
			fetchInstituicoes(); // Atualiza a lista de instituições
		} catch (error: any) {
			if (error.response) {
				console.error(`Erro ao ${action} instituição:`, error.response.data);
				showToast(
					'error',
					`Erro ao ${action} instituição: ${
						error.response.data.message || 'Verifique os dados enviados.'
					}`
				);
			} else {
				console.error(`Erro ao ${action} instituição:`, error);
				showToast('error', `Erro ao ${action} instituição. Tente novamente mais tarde.`);
			}
		}
	};
	
	

	useEffect(() => {
		fetchInstituicoes();
	}, [statusFilter]);

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-44 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Instituições"
						subtitle="Gerencie as instituições que serão aceitas ou recusadas no evento, ou as cadastre. Não esqueça de salvar suas alterações."
						colorHex="#ef0037"
					/>
				</div>

				{/* Formulário para cadastrar nova instituição */}
				<form
					className="mt-8 flex w-3/4 flex-col items-center justify-center"
					onSubmit={handleSubmit}
				>
					<div className="flex w-full gap-10">
						<div className="flex w-1/2 flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="nome">Nome</label>
							<input
								className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none"
								type="text"
								name="nome"
								id="nome"
								required
							/>
						</div>
						<div className="flex w-1/2 flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="cnpj">CNPJ</label>
							<input
								className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none"
								type="text"
								name="cnpj"
								id="cnpj"
								required
							/>
						</div>
					</div>
					<button
						className="mt-10 w-44 rounded-xl bg-[#4B00E0] p-2 text-base font-medium text-white"
						type="submit"
						disabled={loading}
					>
						{loading ? 'Carregando...' : 'Cadastrar'}
					</button>
				</form>

				{/* Gerenciamento de instituições */}
				<div className="mt-14 w-3/4">
					<h1 className="text-2xl font-bold text-black">Gerenciamento das instituições</h1>
					<div className="mt-4 flex justify-between">
						<div className="flex gap-3">
							{['pendente', 'aprovada', 'recusada'].map((status) => (
								<button
									key={status}
									onClick={() => setStatusFilter(status as typeof statusFilter)}
									className={`flex items-center gap-2 rounded-xl px-4 py-2 ${
										statusFilter === status
											? 'bg-none text-black'
											: 'bg-[#DD4467] text-white'
									}`}
								>
									<CiCircleCheck
										className={`text-[1.8rem] ${
											statusFilter === status ? 'text-black' : 'text-white'
										}`}
									/>
										<p>
										{status === 'pendente' 
											? 'Pendentes' 
											: status === 'aprovada' 
											? 'Aprovadas' 
											: status === 'recusada' 
											? 'Recusadas'
											: 'Status Desconhecido'
										}
										</p>
								</button>
							))}
						</div>
					</div>
				</div>

				{/* Tabela de instituições */}
				<div className="mt-6 w-3/4 overflow-x-auto">
					<table className="w-full table-auto">
						<thead>
							<tr>
								<th className="text-left text-sm text-[#4E4B66]">Ações</th>
								<th className="text-left text-sm text-[#4E4B66]">Instituição</th>
								<th className="text-left text-sm text-[#4E4B66]">CNPJ</th>
							</tr>
						</thead>
						<tbody>
							{institutions.map((institution) => (
								<tr key={institution.id} className="h-14 border-b border-[#e9e9e9]">
									<td className="flex gap-4">
										<button
											onClick={() => handleStatusChange(institution.id, 'aprovar')}
											className="rounded-lg text-green-500"
										>
											<CiCircleCheck className="text-[1.5rem]" />
										</button>
										<button
											onClick={() => handleStatusChange(institution.id, 'recusar')}
											className="rounded-lg text-red-500"
										>
											<CiCircleRemove className="text-[1.5rem]" />
										</button>
									</td>
									<td>{institution.nome}</td>
									<td>{institution.cnpj}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
}
