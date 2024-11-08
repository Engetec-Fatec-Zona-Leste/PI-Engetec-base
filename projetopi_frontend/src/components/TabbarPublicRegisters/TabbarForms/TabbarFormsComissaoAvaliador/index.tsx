'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { TfiPlus } from 'react-icons/tfi';

import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import IncrementInput from '@/components/IncrementInput';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import DefaultSelect from '@/components/Select';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { areas, grandesAreas } from '@/mocks/Areas';
import { instituicoesMock } from '@/mocks/Instituicoes';
import { checkboxPeriodo, checkboxRole } from '@/mocks/checkboxes';

export default function CadastroComissaoAvaliador() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// action(formData)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	const router = useRouter();

	const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
	const handleCheckboxChangePeriod = (periodId: string) => {
		setSelectedPeriods((prevSelected) =>
			prevSelected.includes(periodId)
				? prevSelected.filter((id) => id !== periodId)
				: [...prevSelected, periodId]
		);
	};

	return (
		<div className="container-submenu">
			<div className="w-[60vw]">
				<Title
					title="Cadastrar Comissão Avaliador"
					subtitle="Cadastro como parte da comissão"
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

						<DefaultSelect
							label="Instituição Referente"
							id="institution"
							name="instituicao"
							options={instituicoesMock}
							preSelect={0}
						/>

						<div className="mb-5 w-[45%]">
							<label className="mb-2 text-sm font-medium">Período:</label>
							<div className="flex items-center gap-3 py-2.5">
								{checkboxPeriodo.map((name, index) => (
									<CheckInput
										label={`periodo-${name}`}
										key={index}
										name={name}
										value={name}
										checked={selectedPeriods.includes(name)}
										onChange={() => handleCheckboxChangePeriod(name)}
									/>
								))}
							</div>
						</div>

						<NormalInput
							id="link"
							label="Link Lattes"
							placeholder="https://link.lattes.da.comissão.com"
							name="lattes"
							required
							type="url"
						/>
						<Select
							name="grande-area"
							options={grandesAreas}
							placeholder="Selecione uma Grande Área"
							label="Grandes Áreas de Conhecimento"
							preSelect={0}
						/>
						<Select
							name="area"
							options={areas}
							placeholder="Selecione uma Área"
							label="Áreas de Conhecimento"
							preSelect={0}
						/>

						<IncrementInput
							label="Sub Áreas de Conhecimento"
							name="sub-area"
							customWidth="45%"
							placeholder="SubAreas de Conhecimento da Comissão"
						/>
					</div>

					<div className="mb-5 flex w-full items-center justify-center gap-5 ">
						<label className="text-sm font-medium">
							Cadastrar mais Instituições
						</label>

						<button
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
							type="button"
							onClick={() =>
								router.push(`/criar-evento/1234/cadastrar-instituicao`)
							}
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
