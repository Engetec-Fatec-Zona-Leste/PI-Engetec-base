'use client';

import { useState } from 'react';

import axios from 'axios';
import { set } from 'lodash';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Select from 'react-select';

import AlertCard from '@/components/COMPONENTES/AlertCard';
import mockedOptionTurnos from '@/mocks/OptionsTurnos';
import { Aluno } from '@/lib/repository/aluno/index.repository';

export default function CadastroUser() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');

	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [curso, setCurso] = useState('');
	
	
	const [periodo, setPeriodo] = useState<string | undefined>('');

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const handleCheckboxChangeEvento = (index: any) => {
		//criar setCheckboxes periodo
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};


	// funcao no evento:
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador', 'Admin'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));
	const [areas, setAreas] = useState(['']);
	const [ass, setAss] = useState(['']);
	const [showCard, setShowCard] = useState(false);

	const customStyles = {
		control: (provided: any) => ({
			...provided,
			width: '100%',
			height: 'auto',
			borderRadius: '0.375rem',
			border: '1',
			background: 'white',
			fontSize: '0.875rem',
		}),
	};

	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	const handleToggleConfirmPasswordVisibility = () => {
		setConfirmpasswordVisible(!confirmpasswordVisible);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data: Aluno = {
			name: name,
			cpf: cpf,
			email: email,
			senha: password,
			autor: false,
			curso: curso,
			periodo: periodo,
			apresentador: false,
			presenca: false,
			instituicao: instituicao,
			// certificado: '',
		};
		console.log(data);
		try {
			const response = await axios.post('http://localhost:5002/aluno', data);
			console.log(response.data);
			if (response.data.alunoCreated) {
				setShowCard(true);
				setTimeout(() => {
					setShowCard(false);
				}, 3000);
				setName('');
				setCpf('');
				setEmail('');
				setInst('');
				setCurso('');
				setPeriodo('');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center ">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#4B00E0' }}
				>
					Cadastro como usuário
				</h1>
				<AlertCard message="Aluno cadastrado com sucesso" show={showCard} />

				<p className="text-center text-sm text-black">Cadastro como usuário - Aluno</p>
				<form className="card mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex flex-wrap justify-center items-center gap-5">
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="fullName">
								Nome completo
							</label>

							<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full rounded-md border-0 bg-white text-sm outline-none"
									type="text"
									name="fullName"
									id="fullName"
									placeholder="Nome do Usuário"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="email">
								E-mail
							</label>

							<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full rounded-md border-0 bg-white text-sm outline-none"
									type="email"
									name="email"
									id="email"
									placeholder="emailuser@email.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="password">
								Senha
							</label>
							<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
								<input
									className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
									type={passwordVisible ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									name="password"
									id="password"
									placeholder="Senha do Usuário"
									required
								/>
								{passwordVisible ? (
									<FiEye
										className="h-4 w-4 text-black"
										onClick={handleTogglePasswordVisibility}
									/>
								) : (
									<FiEyeOff
										className="h-4 w-4 text-black"
										onClick={handleTogglePasswordVisibility}
									/>
								)}
							</div>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="password">
								Confirmar Senha
							</label>
							<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
								<input
									className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
									type={confirmpasswordVisible ? 'text' : 'password'}
									value={confirmpassword}
									onChange={(e) => setConfirmpassword(e.target.value)}
									name="password"
									id="password"
									placeholder="Senha do Usuário"
									required
								/>
								{confirmpasswordVisible ? (
									<FiEye
										className="h-4 w-4 text-black"
										onClick={handleToggleConfirmPasswordVisibility}
									/>
								) : (
									<FiEyeOff
										className="h-4 w-4 text-black"
										onClick={handleToggleConfirmPasswordVisibility}
									/>
								)}
							</div>
						</div>

						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="instituicao">
								Instituição Referente
							</label>

							<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full rounded-md border-0 bg-white text-sm outline-none"
									type="text"
									name="instituicao"
									id="instituicao"
									placeholder="Instituição do Usuário"
									value={instituicao}
									onChange={(e) => setInst(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="curso">
								Curso
							</label>

							<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full rounded-md border-0 bg-white text-sm outline-none"
									type="text"
									name="curso"
									id="curso"
									placeholder="Análise e Desenvolvimento de Sistemas"
									value={curso}
									onChange={(e) => setCurso(e.target.value)}
									required
								/>
							</div>
						</div>

						<div className="mb-5 flex w-[45%] items-center justify-around ">
							<label className="text-sm font-medium">
								Cadastrar mais Instituições
							</label>

							<button
								className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
								type="button"
							>
								<p className="text-3xl text-white">+</p>
							</button>
						</div>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="periodo">
								Período de Estudo:
							</label>

							<div className="flex items-center gap-3 py-1">
								{checkboxPeriodo.map((name, index) => (
									<div key={index}>
										<div className="flex items-center">
											<input
												className="hidden"
												type="checkbox"
												name={`checkbox-${index}`}
												id={`checkbox-${index}`}
												checked={checkboxes[index]}
												onChange={() => handleCheckboxChangeEvento(index)}
											/>
											<label
												className="flex cursor-pointer items-center"
												style={
													checkboxes[index]
														? {
																color: '#4B00E0',
														  }
														: {
																color: '#000',
														  }
												}
												htmlFor={`checkbox-${index}`}
											>
												<div
													className="mr-2 flex h-4 w-4 items-center justify-center"
													style={
														checkboxes[index]
															? {
																	backgroundColor: '#4B00E0',
																	border: '1px solid #4B00E0',
															  }
															: {
																	backgroundColor: '#fff',
																	border: '1px solid #4B00E0',
															  }
													}
												>
													{checkboxes[index] && (
														<svg
															className="pointer-events-none h-2 w-3 fill-current text-white"
															viewBox="0 0 20 20"
														>
															<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
														</svg>
													)}
												</div>
												<span className="text-sm font-medium">{name}</span>
											</label>
										</div>
									</div>
								))}
							</div>
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
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#8A8A8A' }}
						>
							Voltar
						</button>
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#4B00E0' }}
							type="submit"
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
