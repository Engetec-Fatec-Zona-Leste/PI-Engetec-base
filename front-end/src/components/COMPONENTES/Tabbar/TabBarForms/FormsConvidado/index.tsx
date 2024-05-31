'use client';

import { useState } from 'react';

import Select from 'react-select';

import CheckInput from '@/components/COMPONENTES/CheckInput';
import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Title from '@/components/COMPONENTES/Title';
import mockedOptionTurnos from '@/mocks/OptionsTurnos';

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

export default function CadastroConvidado() {
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador', 'Admin'];

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');
	const [turno, setTurno] = useState<string | undefined>('');

	return (
		<div className="container-submenu">
			<div className="w-[60vw]">
				<Title
					title="Cadastrar Convidado"
					subtitle="Cadastrar como convidado"
					colorHex="#4B00E0"
				/>

				<form className="form bg-white shadow-md">
					<NormalInput
						id="fullName"
						label="Nome completo"
						placeholder="Nome do convidado"
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
						placeholder="Senha do convidado"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<NormalInput
						id="confirmPassword"
						label="Confirmar Senha"
						placeholder="Senha do convidado"
						type="password"
						value={confirmpassword}
						onChange={(e) => setConfirmpassword(e.target.value)}
						required
					/>

					<div className="mb-5 w-[45%]">
						<label className="mb-2 text-sm font-medium" htmlFor="funcao">
							Função no Evento
						</label>
						<div className="flex items-center gap-3 py-2.5">
							{checkboxNames.map((name, index) => (
								<CheckInput
									id={`${name}-${index}`}
									key={index}
									label={name}
									disabled={false}
									selected={false}
								/>
							))}
						</div>
					</div>
					<div className="mb-5 flex w-[45%] flex-col">
						<label className="mb-2 text-sm font-medium" htmlFor="turno">
							Turno
						</label>
						<div className="w-full">
							<Select
								name="turnos"
								options={mockedOptionTurnos}
								className="basic-multi-select border-gray-300"
								classNamePrefix="select"
								styles={customStyles}
								onChange={(choice) => setTurno(choice?.label)}
							/>
						</div>
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
