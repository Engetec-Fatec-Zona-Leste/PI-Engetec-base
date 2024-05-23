'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

// import Select from 'react-select';
import AlertCard from '@/components/COMPONENTES/AlertCard';
import FixedSelect, {
	FixedOptionsType,
} from '@/components/COMPONENTES/FixedSelect';
import useClipboard from '@/hooks/useClipboard';
import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';

import Select from '../COMPONENTES/Select';

Select;

export default function EditarComissao() {
	// card for status from back
	const [showCard, setShowCard] = useState(false);

	const { copyToClipboard, renderClipCard } = useClipboard();

	// estilo areas:
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

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState('');
	const [instituicao, setInst] = useState('');
	const [lattes, setLattes] = useState('');

	// funcao no evento:
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador', 'Admin'];
	const [checkboxesCharge, setCheckboxesCharge] = useState(
		checkboxNames.map(() => false)
	);
	const handleCheckboxChangeCharge = (index: any) => {
		setCheckboxesCharge((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	//retornar um index: number
	function getSelectedItem(booleanArray: boolean[], stringArray: string[]) {
		if (!Array.isArray(booleanArray) || !Array.isArray(stringArray)) {
			throw new Error('Os parâmetros devem ser arrays');
		}
		if (booleanArray.length !== stringArray.length) {
			throw new Error('Os arrays devem ter o mesmo tamanho');
		}
		const trueIndex = booleanArray.findIndex((value) => value === true);
		if (trueIndex === -1) {
			return [];
		}
		return [stringArray[trueIndex]];
	}

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [turno, setTurno] = useState(checkboxPeriodo);
	const [checkboxesPeriodos, setCheckboxesPeri] = useState(
		checkboxPeriodo.map(() => false)
	);
	const handleCheckboxChangePeriodo = (index: any) => {
		setCheckboxesPeri((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	// areas:
	const [realAreas, setRealAreas] = useState<(string | undefined)[]>([]);
	let optionsArea: FixedOptionsType[] = [
		{
			value: 0,
			label: 'boa sorte guilherme',
			isFixed: true,
		},
		{
			value: 1,
			label: 'isso é mock time',
			isFixed: true,
		},
	];

	const [areas, setAreas] = useState(['']);
	const [ass, setAss] = useState(['']);
	// const handleAddArea = (
	// 	setArea: React.Dispatch<React.SetStateAction<string[]>>
	// ) => {
	// 	const lastArea =
	// 		setArea === setAreas ? areas[areas.length - 1] : ass[ass.length - 1];
	// 	if (lastArea.trim() !== '') {
	// 		setArea((prevAreas) => [...prevAreas, '']);
	// 	}
	// };
	// const handleRemoveArea = (
	// 	index: number,
	// 	setArea: React.Dispatch<React.SetStateAction<string[]>>
	// ) => {
	// 	setArea((prevAreas) => prevAreas.filter((_, i) => i !== index));
	// };
	// const handleAreaChange = (
	// 	index: number,
	// 	value: string,
	// 	setArea: React.Dispatch<React.SetStateAction<string[]>>
	// ) => {
	// 	const newAreas = [...(setArea === setAreas ? areas : ass)];
	// 	newAreas[index] = value;
	// 	setArea(newAreas);
	// };

	useEffect(() => {
		async function getAreas() {
			try {
				setName('');
				setEmail('');
				setCpf('');
				setInst('');
				setLattes('');
				setCheckboxesCharge(checkboxNames.map(() => false));
				setCheckboxesPeri(checkboxPeriodo.map(() => false));

				// const id = localStorage.getItem('comissaoId');
				const id = '2ef81a36-96ac-46d6-a254-0704903c9dcc';

				const result = await axios.get(`http://localhost:5002/comissao/${id}`);

				if (result.data.comissao) {
					const comissao: Comissao = result.data.comissao;

					setName(comissao.name);
					setEmail(comissao.email);
					setCpf(comissao.cpf);
					setInst(comissao.instituicao);
					setLattes(comissao.lattes);
					// 'Organizador', 'Chair', 'Avaliador', 'Admin'
					if (comissao.organizador) handleCheckboxChangeCharge(0);
					if (comissao.chair) handleCheckboxChangeCharge(1);
					if (comissao.avaliador) handleCheckboxChangeCharge(2);
					if (comissao.adm) handleCheckboxChangeCharge(3);

					// 'Matutino', 'Vespertino', 'Noturno'
					if (comissao.turno === checkboxPeriodo[0])
						handleCheckboxChangePeriodo(0);
					if (comissao.turno === checkboxPeriodo[1])
						handleCheckboxChangePeriodo(1);
					if (comissao.turno === checkboxPeriodo[2])
						handleCheckboxChangePeriodo(2);

					const areasComming: Area[] = result.data.comissao.areaConhecimento;
					setAreas(areasComming.map((area) => area.nome));

					console.log(getSelectedItem(checkboxesPeriodos, checkboxPeriodo)[0]);

					optionsArea = areas.map((area, i) => ({
						label: area,
						value: i,
						isFixed: false,
					}));
					console.log(optionsArea);
				}
			} catch (error) {
				console.log(error);
			}
		}
		getAreas();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// const organizador = checkboxesCharge.filter((item) => item === checkboxesCharge[0] ? true : false)[0];
			// const adm = checkboxesCharge.filter(item => item ==checkboxesCharge[3] ? true : false)[0];
			// const chair = checkboxesCharge.filter(item => item ==checkboxesCharge[1] ? true : false)[0];
			// const avaliador = checkboxesCharge.filter(item => item ==checkboxesCharge[2] ? true : false)[0]

			console.log(realAreas?.map((area) => area));
			const data: Comissao = {
				name,
				email,
				cpf,
				instituicao,
				turno: turno[0] || turno[1] || turno[2],
				lattes,
				// 'Organizador', 'Chair', 'Avaliador', 'Admin'
				organizador: checkboxesCharge[0],
				chair: checkboxesCharge[1],
				avaliador: checkboxesCharge[2],
				adm: checkboxesCharge[3],
				// certificado: '',
				areaConhecimento: realAreas?.map((area) => area),
			};
			const result = await axios.put('http://localhost:5002/comissao', data);
			console.log(result);
			if (result.data.comissaoUpdated) {
				// habilitar card de 3seg indicando cadastro realizado
				console.log(result);
				setShowCard(true);
				setTimeout(() => {
					setShowCard(false);
				}, 3000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#5321BF' }}
				>
					Informações do Usuário - Editar Comissão
				</h1>
				<AlertCard message="Comissao cadastrada com sucesso" show={showCard} />
				{renderClipCard()}
				<p className="text-center text-sm text-black">
					Visualize ou altere as informações de usuário
				</p>

				<form
					className="mt-8 w-full rounded-2xl bg-white px-28 py-10 shadow-md"
					onSubmit={handleSubmit}
				>
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="fullName">
									Nome completo
								</label>

								<div className="rounded-md border border-gray-300 bg-[#B7B7B7] px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-[#B7B7B7] text-sm outline-none"
										type="text"
										name="fullName"
										id="fullName"
										placeholder="Nome da Comissão"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
										disabled
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cpf">
									CPF
								</label>

								<div className="rounded-md border border-gray-300 bg-[#B7B7B7] px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-[#B7B7B7] text-sm outline-none"
										type="text"
										name="cpf"
										id="cpf"
										placeholder="CPF da Comissão"
										value={cpf}
										onChange={(e) => setCpf(e.target.value)}
										required
										disabled
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="email">
									Email
								</label>

								<div className="rounded-md border border-gray-300 bg-[#B7B7B7] px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-[#B7B7B7] text-sm outline-none"
										type="email"
										name="email"
										id="email"
										placeholder="emailcomissao@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										disabled
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="instituicao"
								>
									Instituição Referente
								</label>

								<div className="rounded-md border border-gray-300 bg-[#B7B7B7] px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-[#B7B7B7] text-sm outline-none"
										type="text"
										name="instituicao"
										id="instituicao"
										placeholder="Instituição da Comissão"
										value={instituicao}
										onChange={(e) => setInst(e.target.value)}
										required
										disabled
									/>
								</div>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areas">
									Áreas de Conhecimento
								</label>
								<div className="w-full">
									<FixedSelect isDisabled={true} options={optionsArea} />
									{/* <Select
										isMulti
										name="areas"
										options={areas.map((area, i) => ({
											value: i,
											label: area,
										}))}
										className="basic-multi-select border-gray-300"
										classNamePrefix="select"
										styles={customStyles}
										onChange={(choice) =>
											setRealAreas(choice.map((a) => a.label))
										}
									/> */}
								</div>
							</div>

							<Select
								options={turno.map((tur, i) => ({ label: tur, value: i }))}
								preSelect={0}
								disabled={false}
								label={'Turno'}
								id={'turno'}
							/>

							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="link">
									Link Lattes
								</label>

								<div className="flex rounded-md border border-gray-300 bg-white ">
									<input
										className="w-full rounded-md border-0 bg-white px-4 py-2 text-sm outline-none"
										type="url"
										name="link"
										id="link"
										placeholder="link Lattes da Comissão"
										value={lattes}
										onChange={(e) => setLattes(e.target.value)}
										required
										disabled
									/>
									<button
										className="rounded-md bg-[#B7B7B7] px-4 py-2 text-center text-base"
										onClick={() => copyToClipboard(lattes)}
										type="button"
									>
										Copiar
									</button>
								</div>
							</div>

							<div className="mb-5">
								<label className="mb-2 text-sm font-medium" htmlFor="funcao">
									Função no Evento
								</label>
								<div className="flex items-center gap-3 py-2.5">
									{checkboxNames.map((name, index) => (
										<div key={index}>
											<div className="flex items-center">
												<input
													className="hidden"
													type="checkbox"
													name={`checkbox-${index}`}
													id={`checkbox-${index}`}
													checked={checkboxesCharge[index]}
													onChange={() => handleCheckboxChangeCharge(index)}
												/>
												<label
													className="flex cursor-pointer items-center"
													style={
														checkboxesCharge[index]
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
														className="mr-2 flex h-3.5 w-3.5 items-center justify-center"
														style={
															checkboxesCharge[index]
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
														{checkboxesCharge[index] && (
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
					</div>

					<div className="mt-10 flex items-center justify-center gap-5">
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							type="button"
							style={{ backgroundColor: '#8A8A8A' }}
						>
							Voltar
						</button>
						<button
							className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#4B00E0' }}
							type="submit"
						>
							Salvar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
