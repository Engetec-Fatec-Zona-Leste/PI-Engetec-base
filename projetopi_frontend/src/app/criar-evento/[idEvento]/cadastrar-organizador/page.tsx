'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { TfiPlus } from 'react-icons/tfi';

import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import IncrementInput from '@/components/IncrementInput';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { areas } from '@/mocks/Areas';
import { instituicoesMock } from '@/mocks/Instituicoes';
import { checkboxPeriodo } from '@/mocks/checkboxes';

export default function CadastrarOrganizadorEmEvento({
	params,
}: {
	params: { idEvento: string };
}) {
	const router = useRouter();
	const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
	const handleCheckboxChangePeriod = (periodId: string) => {
		setSelectedPeriods((prevSelected) =>
			prevSelected.includes(periodId)
				? prevSelected.filter((id) => id !== periodId)
				: [...prevSelected, periodId]
		);
	};

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
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<Title
						title="Cadastrar"
						subtitle={`Cadastro como organizador em evento ${params.idEvento}`}
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
								id="link"
								label="Link Lattes"
								placeholder="https://link.lattes.da.comissão.com"
								name="lattes"
								required
								type="url"
							/>

							<Select
								label="Instituição Referente"
								options={instituicoesMock}
								disabled={false}
								preSelect={0}
								id="institution"
								name="instituicao"
							/>

							<div className="mb-5 w-[45%]">
								<label className="mb-2 text-sm font-medium">Período:</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxPeriodo.map((name, index) => (
										<CheckInput
											label={name}
											key={index}
											name={name}
											value={name}
											checked={selectedPeriods.includes(name)}
											onChange={() => handleCheckboxChangePeriod(name)}
										/>
									))}
								</div>
							</div>
							<Select
								options={areas}
								label="Áreas de Conhecimento"
								preSelect={0}
								name="areas"
								placeholder="Selecione uma Área"
							/>

							<IncrementInput
								label="Sub Áreas de Conhecimento"
								customWidth="45%"
								placeholder="SubAreas de Conhecimento da Comissão"
								name="sub-areasx"
							/>
						</div>

						<div className="mb-5 flex w-full items-center justify-center gap-5 ">
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
