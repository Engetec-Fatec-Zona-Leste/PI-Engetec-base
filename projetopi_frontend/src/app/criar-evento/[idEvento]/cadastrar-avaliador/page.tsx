'use client';

import { useState } from 'react';

import { TfiPlus } from 'react-icons/tfi';
import Select from 'react-select';

import AlertCard from '@/components/AlertCard';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import IncrementInput from '@/components/IncrementInput';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import { OptionsType } from '@/components/Select';
import Title from '@/components/Title';
import { instituicoesMock } from '@/mocks/Instituicoes';
import { customStyles } from '@/utils/customStyle';

export default function CadastrarAvaliadorEmEvento({
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

	type Option = { label: string; value: string };

	const data: Record<string, Record<string, string[]>> = {
		'Ciências Exatas e da Terra': {
			Matemática: ['Álgebra', 'Geometria', 'Cálculo'],
			Física: ['Física Teórica', 'Física Aplicada'],
		},
		'Ciências Humanas': {
			História: ['História Antiga', 'História Moderna'],
			Filosofia: ['Filosofia Antiga', 'Filosofia Contemporânea'],
		},
	};
	const [selectedGrandeArea, setSelectedGrandeArea] = useState<Option | null>(
		null
	);
	const [selectedArea, setSelectedArea] = useState<Option | null>(null);

	const areasOptions: Option[] = selectedGrandeArea
		? Object.keys(data[selectedGrandeArea.value]).map((key) => ({
				label: key,
				value: key,
		  }))
		: [];

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [lattes, setLattes] = useState('');
	const [instituicao, setInst] = useState('');
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [showCard, setShowCard] = useState(false);
	const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
	const handleCheckboxChangePeriod = (periodId: string) => {
		setSelectedPeriods((prevSelected) =>
			prevSelected.includes(periodId)
				? prevSelected.filter((id) => id !== periodId)
				: [...prevSelected, periodId]
		);
	};

	const [subareas, setSubAreas] = useState(['']);

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
						title="Cadastrar"
						subtitle={`Cadastro como avaliador em evento ${params.idEvento}`}
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
								id="link"
								label="Link Lattes"
								placeholder="https://link.lattes.da.comissão.com"
								value={lattes}
								onChange={(e) => setLattes(e.target.value)}
								required
								type="url"
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

							<div className="mb-5 flex w-[45%] flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div className="w-full">
									<Select
										options={areasOptions}
										value={selectedArea}
										onChange={(option) => {
											setSelectedArea(option);
										}}
										isDisabled={!selectedGrandeArea}
										placeholder="Selecione uma Área"
										styles={customStyles}
									/>
								</div>
							</div>

							<IncrementInput
								label="Sub Áreas de Conhecimento"
								arrayValue={subareas}
								setArrayValue={setSubAreas}
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
							>
								<TfiPlus height="40px" color="white" />
							</button>
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
