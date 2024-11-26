'use client';

import { useState } from 'react';
import { showToast } from '@/contexts/ToastProvider';
import { registerInstituicao } from '@/_actions/registerInstituicao';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import Title from '@/components/Title';

export default function RegisterInstitutionPage() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		// Criando um objeto para os dados do formulário
		const institutionData = {
			nome: formData.get('nome'),
			cnpj: formData.get('cnpj'),
		};

		setLoading(true); // Ativando o estado de loading enquanto aguarda a resposta da API

		// Enviar os dados para a API
		try {
			const response = await fetch('http://localhost:3031/instituicao/cadastrar', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(institutionData),
			});

			const result = await response.json();

			// Exibe o toast com base no sucesso ou erro
			if (result.success) {
				showToast('success', result.message);
			} else {
				showToast('error', result.message);
			}
		} catch (error) {
			console.error('Erro ao cadastrar instituição:', error);
			showToast('error', 'Ocorreu um erro ao tentar cadastrar a instituição.');
		} finally {
			setLoading(false); // Desativando o estado de loading
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form
					className="card rounded-lg px-36 py-20 shadow-lg"
					onSubmit={handleSubmit}
				>
					<Title
						title={`Cadastrar Instituição no site`}
						colorHex="#4B00E0"
						subtitle="Irá ter que passar por uma aprovação para ter a instituição cadastrada"
					/>

					<div className="mb-4 flex flex-col items-center gap-5">
						<NormalInput
							label="Nome:"
							type="text"
							id="name"
							name="nome"
							customWidth="100%"
							required={true}
						/>
						<NormalInput
							label="CNPJ:"
							type="text"
							id="cnpj"
							name="cnpj"
							customWidth="100%"
							required={true}
						/>
						<DefaultButton
							label={loading ? 'Cadastrando...' : 'Cadastrar'}
							backgroundColorHex="#4B00E0"
							type="submit"
							disabled={loading} // Desabilita o botão enquanto está carregando
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
