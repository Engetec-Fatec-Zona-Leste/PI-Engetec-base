'use client';

import { useState } from 'react';

import { TfiPlus } from 'react-icons/tfi';

import AlertCard from '@/components/AlertCard';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import Title from '@/components/Title';
import { instituicoesMock } from '@/mocks/Instituicoes';

export default function CadastrarEditorChefeEmEvento({
	params,
}: {
	params: { idEvento: string };
}) {
	// const pathname = usePathname();
	// const searchParams = useSearchParams();
	//Do something in response to a route change
	// useEffect(() => {
	// 	// Do something here...
	// }, [pathname, searchParams]);

	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [lattes, setLattes] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');
	const [showCard, setShowCard] = useState(false);
	const [instituicao, setInst] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div>
			<NavbarAuthenticated />
			<div className="container">
				<div className="w-[60vw]">
					<AlertCard
						message="Comissao cadastrada com sucesso"
						show={showCard}
					/>
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
								id="cpf"
								label="CPF"
								placeholder="CPF do Usuário"
								type="text"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
								required
							/>

							<DefaultSelect
								label="Instituição Referente"
								id="institution"
								name="institution"
								options={instituicoesMock}
								selected={instituicao}
								onChange={(e) => setInst(e.target.value)}
								preSelect={0}
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
			<Footer />
		</div>
	);
}
