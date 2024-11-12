'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { TfiPlus } from 'react-icons/tfi';

import DefaultButton from '@/components/DefaultButton';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import Title from '@/components/Title';
import { instituicoesMock } from '@/mocks/Instituicoes';

export default function CadastroEditorChefe() {
	const router = useRouter();
	return (
		<div className="container-submenu">
			<div className="w-[60vw]">
				<Title
					title="Cadastrar Editor Chefe"
					colorHex="#4B00E0"
					subtitle="Cadastro como editor chefe, ele irá ter que passa por uma aprovação
						para ter acesso como editor chefe"
				/>

				<form className="form bg-white shadow-md">
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
						name="Senha"
						required
					/>
					<NormalInput
						id="confirmPassword"
						label="Confirmar Senha"
						placeholder="Senha do Usuário"
						type="password"
						name="confirmarSenha"
						required
					/>
					<NormalInput
						id="cpf"
						label="CPF"
						placeholder="CPF do Usuário"
						type="text"
						name="CPF"
						required
					/>

					<DefaultSelect
						label="Instituição Referente"
						id="institution"
						options={instituicoesMock}
						name="institution"
						preSelect={0}
					/>
					<NormalInput
						id="link"
						label="Link Lattes"
						placeholder="https://link.lattes.da.comissão.com"
						name="link"
						required
						type="url"
					/>

					<div className="mb-5 flex w-full items-center justify-center gap-5 ">
						<label className="text-sm font-medium">
							Cadastrar mais Instituições
						</label>

						<button
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
							type="button"
							onClick={() => router.push(`/cadastrar-instituicao`)}
						>
							<TfiPlus height="40px" color="white" />
						</button>
					</div>
					<div className="mb-5 flex w-[45%] flex-col">
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
	);
}
