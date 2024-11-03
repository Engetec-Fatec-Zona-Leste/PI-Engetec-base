import { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
	LoginLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

import AlertCard from '@/components/AlertCard';
import DefaultButton from '@/components/DefaultButton';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import Title from '@/components/Title';
import { instituicoesMock } from '@/mocks/Instituicoes';

type CadastroUserProps = {
	eventId: string;
};

export default function CadastroUser({ eventId }: CadastroUserProps) {
	const router = useRouter();

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [periodo, setPeriodo] = useState('');

	const [showCard, setShowCard] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="container-submenu">
			<div className="w-[60vw]">
				<AlertCard message="Aluno cadastrado com sucesso" show={showCard} />

				<Title
					title="Cadastro como usuário"
					subtitle="Cadastro como usuário - Aluno"
					colorHex="#4B00E0"
				/>

				<form className="card mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex flex-wrap items-center justify-center gap-5">
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
						/>
						<NormalInput
							id="password"
							label="Senha"
							placeholder="Senha do Usuário"
							type="password"
							required
							name="senha"
						/>
						<NormalInput
							id="confirmPassword"
							label="Confirmar Senha"
							placeholder="Senha do Usuário"
							type="password"
							required
							name="confirmeSenha"
						/>
						<NormalInput
							id="cpf"
							label="CPF"
							placeholder="CPF do Usuário"
							name="cpf"
							required
							type="text"
						/>
						<DefaultSelect
							label="Instituição Referente"
							id="institution"
							name="instituticao"
							options={instituicoesMock}
							// selected={instituicao}
							// onChange={(e) => setInst(e.target.value)}
							preSelect={0}
						/>

						<NormalInput
							id="curso"
							label="Curso"
							placeholder="Análise e Desenvolvimento de Sistemas"
							name="curso"
							// value={curso}
							// onChange={(e) => setCurso(e.target.value)}
							required
						/>

						<DefaultSelect
							label="Período de Estudo: "
							id="turno"
							name="periodo"
							options={checkboxPeriodo.map((tur, i) => ({
								label: tur,
								value: i,
							}))}
							selected={periodo}
							onChange={(e) => setPeriodo(e.target.value)}
							preSelect={0}
						/>

						<div className="mb-5 flex w-[45%] items-center justify-around ">
							<label className="text-sm font-medium">
								Cadastrar mais Instituições
							</label>

							<button
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
								type="button"
								onClick={() =>
									router.push(`/criar-evento/${eventId}/cadastrar-instituicao`)
								}
							>
								<p className="text-3xl text-white">+</p>
							</button>
						</div>
					</div>
					<div className="my-6">
						<p className="text-center text-xs font-normal text-slate-400">
							Já tem uma conta？
							<a
								className="cursor-pointer font-bold text-[#4B00E0] underline"
								href="/login"
							>
								Log in
							</a>
						</p>
					</div>
					<div className="flex items-center justify-center gap-5">
						<DefaultButton backgroundColorHex="#8A8A8A" label="Voltar" />
						<DefaultButton
							backgroundColorHex="#4B00E0"
							label="Cadastrar"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
