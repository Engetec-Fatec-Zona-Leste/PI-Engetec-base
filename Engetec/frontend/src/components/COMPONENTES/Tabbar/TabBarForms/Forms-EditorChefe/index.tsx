'use client';

import { useState } from 'react';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Title from '@/components/COMPONENTES/Title';

export default function CadastroEditorChefe() {
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [lattes, setLattes] = useState('');

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
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<NormalInput
						id="email"
						label="E-mail"
						placeholder="emailuser@email.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						required
					/>
					<NormalInput
						id="password"
						label="Senha"
						placeholder="Senha do Usuário"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<NormalInput
						id="confirmPassword"
						label="Confirmar Senha"
						placeholder="Senha do Usuário"
						type="password"
						value={confirmpassword}
						onChange={(e) => setConfirmpassword(e.target.value)}
						required
					/>
					<NormalInput
						id="institution"
						label="Instituição Referente"
						placeholder="Instituição do Usuário"
						value={instituicao}
						onChange={(e) => setInst(e.target.value)}
						required
						type="text"
					/>
					<NormalInput
						id="link"
						label="Link Lattes"
						placeholder="https://link.lattes.da.comissão.com"
						value={lattes}
						onChange={(e) => setLattes(e.target.value)}
						required
						type="url"
					/>

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
							type="submit"
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
