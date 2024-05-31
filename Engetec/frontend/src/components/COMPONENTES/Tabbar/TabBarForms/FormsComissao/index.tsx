'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import Select from 'react-select';

import AlertCard from '@/components/COMPONENTES/AlertCard';
import CheckInput from '@/components/COMPONENTES/CheckInput';
import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import { SimpleSelectType } from '@/components/COMPONENTES/Select';
import Title from '@/components/COMPONENTES/Title';
import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';
import mockedOptionAreas from '@/mocks/OptionsAreas';
import mockedOptionTurnos from '@/mocks/OptionsTurnos';

export default function CadastroComissao() {
	const [isAdmin, setIsAdmin] = useState(false);

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [email, setEmail] = useState('');
	const [instituicao, setInst] = useState('');
	const [turno, setTurno] = useState<string | undefined>('');
	const [lattes, setLattes] = useState('');
	const [confirmpasswordVisible, setConfirmpasswordVisible] = useState(false);
	const [confirmpassword, setConfirmpassword] = useState('');
	// funcao no evento:
	const checkboxNames = ['Organizador', 'Chair', 'Avaliador', 'Admin'];
	const [checkboxes, setCheckboxes] = useState(checkboxNames.map(() => false));
	const [showCard, setShowCard] = useState(false);

	const handleCheckboxChange = (index: any) => {
		setCheckboxes((prev) => {
			const newCheckboxes = [...prev];
			newCheckboxes[index] = !newCheckboxes[index];
			return newCheckboxes;
		});
	};

	const [areas, setAreas] = useState<SimpleSelectType[]>(mockedOptionAreas);
	const [realAreas, setRealAreas] = useState<(string | undefined)[]>([]);

	const [subareas, setSubAreas] = useState(['']);
	const [ass, setAss] = useState(['']);
	const handleAddSubArea = (
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const lastArea =
			setSubArea === setSubAreas
				? subareas[subareas.length - 1]
				: ass[ass.length - 1];
		if (lastArea.trim() !== '') {
			setSubArea((prevAreas) => [...prevAreas, '']);
		}
	};
	const handleRemoveSubArea = (
		index: number,
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		setSubArea((prevAreas) => prevAreas.filter((_, i) => i !== index));
	};
	const handleSubAreaChange = (
		index: number,
		value: string,
		setSubArea: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const newAreas = [...(setSubArea === setSubAreas ? subareas : ass)];
		newAreas[index] = value;
		setSubArea(newAreas);
	};

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

	useEffect(() => {
		async function getAreas() {
			setIsAdmin(false);
			try {
				const id = localStorage.getItem('eventId');

				const result = await axios.get(
					`http://localhost:5002/area-event/${id}`
				);
				if (result.data.areas) {
					const areasComming: Area[] = result.data.areas;
					const areasValueLabel = areasComming.map((area) => {
						const labelvalue = { value: area.id, label: area.nome };
						return labelvalue;
					});
					console.log(areasValueLabel);
					setAreas(areasValueLabel);
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
			const organizador = checkboxes.filter((item) =>
				item === checkboxes[0] ? true : false
			)[0];
			const adm = checkboxes.filter((item) =>
				item == checkboxes[3] ? true : false
			)[0];
			const chair = checkboxes.filter((item) =>
				item == checkboxes[1] ? true : false
			)[0];
			const avaliador = checkboxes.filter((item) =>
				item == checkboxes[2] ? true : false
			)[0];
			console.log(realAreas?.map((area) => area));
			const data: Comissao = {
				name,
				email,
				senha: password,
				cpf,
				instituicao,
				turno,
				lattes,
				// adm: checkboxes[3],
				// organizador: checkboxes[0],
				// chair: checkboxes[1],
				// avaliador: checkboxes[2],
				adm,
				organizador,
				chair,
				avaliador,
				// certificado: '',
				areaConhecimento: realAreas?.map((area) => area),
			};
			const result = await axios.post('http://localhost:5002/comissao', data);
			console.log(result);
			if (result.data.comissaoCreated) {
				// habilitar card de 3seg indicando cadastro realizado
				console.log(result);
				setShowCard(true);
				setTimeout(() => {
					setShowCard(false);
				}, 3000);
				setName('');
				setCpf('');
				setEmail('');
				setInst('');
				setPassword('');
				setConfirmpassword('');
				setLattes('');
				setCheckboxes(checkboxNames.map(() => false));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container-submenu">
			<div className="w-[60vw]">
				<AlertCard message="Comissao cadastrada com sucesso" show={showCard} />
				<Title
					title="Cadastrar Comissão"
					subtitle="Cadastro como parte da comissão, possível mais de uma função"
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
						{!isAdmin && (
							<>
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
							</>
						)}
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
							<label className="mb-2 text-sm font-medium" htmlFor="areas">
								Áreas de Conhecimento
							</label>
							<div className="w-full">
								<Select
									isMulti
									name="areas"
									options={areas}
									className="basic-multi-select border-gray-300"
									classNamePrefix="select"
									styles={customStyles}
									onChange={(choice) =>
										setRealAreas(choice.map((a) => a.value))
									}
								/>
							</div>
						</div>

						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="areas">
								Sub Áreas de Conhecimento
							</label>
							<div>
								<div className="mb-3 ">
									<div className="flex w-full items-center justify-around rounded-md border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full bg-white text-sm outline-none"
											type="text"
											name="subareas"
											value={subareas[subareas.length - 1]}
											onChange={(e) =>
												handleSubAreaChange(
													subareas.length - 1,
													e.target.value,
													setSubAreas
												)
											}
											placeholder="Áreas de Conhecimento da Comissão"
											required
										/>

										<div
											className="m-0 flex h-[2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
											onClick={() => handleAddSubArea(setSubAreas)}
										>
											<p className="text-xl font-bold ">+</p>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap gap-2.5">
									{subareas.map((area, index) => (
										<div
											key={index}
											className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
										>
											<div className="w-full">
												<input
													className="w-full rounded-md border-0 bg-white text-sm outline-none"
													type="text"
													name="subareas"
													value={area}
													onChange={(e) =>
														handleSubAreaChange(
															index,
															e.target.value,
															setSubAreas
														)
													}
													readOnly
													required
												/>
											</div>
											<div
												className="ml-2 cursor-pointer rounded-full px-1"
												style={{ backgroundColor: '#ef0037' }}
												onClick={() => handleRemoveSubArea(index, setSubAreas)}
											>
												<FaTimes className="w-2 text-white" />
											</div>
										</div>
									))}
								</div>
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
