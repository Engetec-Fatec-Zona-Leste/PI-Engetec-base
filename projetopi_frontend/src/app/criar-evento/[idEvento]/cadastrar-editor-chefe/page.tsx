'use client';

import { useRouter } from 'next/navigation';

import { TfiPlus } from 'react-icons/tfi';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { instituicoesMock } from '@/mocks/Instituicoes';

export default function CadastrarEditorChefeEmEvento({
	params,
}: {
	params: { idEvento: string };
}) {
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// await action(formData, files)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};
	return (
		<div>
			<NavbarAuthenticated />
			<div className="container">
				<div className="w-[60vw]">
					<Title
						title="Cadastrar Comissão"
						subtitle={`Cadastro como administrador no evento ${params.idEvento}`}
						colorHex="#4B00E0"
					/>

					<form className="form bg-white shadow-md" onSubmit={handleSubmit}>
						<div className="flex w-full flex-wrap justify-center gap-5">
							<NormalInput
								id="fullName"
								label="Nome completo"
								placeholder="Nome do aluno"
								required
								name="nome"
							/>
							<NormalInput
								id="email"
								label="E-mail"
								placeholder="emailuser@email.com"
								name="email"
								type="email"
								required
							/>

							<NormalInput
								id="password"
								label="Senha"
								placeholder="Senha do Usuário"
								type="password"
								name="senha"
								required
							/>
							<NormalInput
								id="confirmPassword"
								label="Confirmar Senha"
								placeholder="Senha do Usuário"
								type="password"
								name="confirm-senha"
								required
							/>
							<NormalInput
								id="cpf"
								label="CPF"
								placeholder="CPF do Usuário"
								type="text"
								name="cpf"
								required
							/>

							<Select
								label="Instituição Referente"
								id="institution"
								name="instituicao"
								options={instituicoesMock}
								preSelect={0}
							/>

							<NormalInput
								id="link"
								label="Link Lattes"
								placeholder="https://link.lattes.da.comissão.com"
								name="lattes"
								required
								type="url"
							/>

							<div className="flex w-[45%] items-center justify-center gap-5 ">
								<label className="text-sm font-medium">
									Cadastrar mais Instituições
								</label>

								<button
									className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
									type="button"
								>
									<TfiPlus height="40px" color="white" />
								</button>
							</div>
						</div>

						<div className="flex w-full items-center justify-center gap-5">
							<DefaultButton
								label="Voltar"
								backgroundColorHex="#8A8A8A"
								onClick={() => router.back()}
							/>
							<DefaultButton
								label="Cadastrar"
								backgroundColorHex="#4B00E0"
								type="submit"
							/>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
