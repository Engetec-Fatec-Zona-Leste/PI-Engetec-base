'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaRegTrashCan } from 'react-icons/fa6';

import AlertCard from '@/components/AlertCard';
import CheckboxInput from '@/components/CheckInput';
import ClipInput from '@/components/ClipInput';
import DefaultButton from '@/components/DefaultButton';
import FixedSelect, { FixedOptionsType } from '@/components/DisabledSelect';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import OutlineButton from '@/components/OutlineButton';
import Select from '@/components/Select';
import Title from '@/components/Title';
import { Area } from '@/lib/repository/area/index.repository';
import { Comissao } from '@/lib/repository/comission/index.repository';

export default function VizualizarComissaoPage() {
	const [showCard, setShowCard] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState('');
	const [instituicao, setInst] = useState('');
	const [lattes, setLattes] = useState('');

	// funcao no evento:
	const checkboxRole = ['Organizador', 'Chair', 'Avaliador', 'Admin'];
	const [checkboxesCharge, setCheckboxesCharge] = useState(
		checkboxRole.map(() => false)
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
			label: 'Física',
			isFixed: true,
		},
		{
			value: 1,
			label: 'Química',
			isFixed: true,
		},
	];

	const [areas, setAreas] = useState(['']);

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
		<div>
			<NavbarAuthenticated />

			<div className="container">
				<div className="w-[60vw]">
					<AlertCard
						message="Comissao cadastrada com sucesso"
						show={showCard}
					/>

					<Title
						title="Informações do Usuário"
						colorHex="#4B00E0"
						subtitle="Visualize ou altere as informações de usuário"
					/>

					<form className="form bg-white shadow-md" onSubmit={handleSubmit}>
						<div className="flex w-full items-center justify-end">
							<OutlineButton
								label="excluir"
								outlineColorHex="red"
								textColorHex="red"
								icon={<FaRegTrashCan />}
								customWidth="120px"
							/>
						</div>

						<NormalInput
							id="fullName"
							label="Nome completo"
							placeholder="Nome"
							disabled={true}
							value={name}
						/>
						<NormalInput
							id="cpf"
							label="CPF"
							placeholder="CPF"
							disabled={true}
							value={cpf}
						/>
						<NormalInput
							id="email"
							label="E-mail"
							placeholder="E-mail"
							disabled={true}
							value={email}
						/>
						<NormalInput
							id="institution"
							label="Instituição Referente"
							placeholder="Instituição"
							disabled={true}
							value={instituicao}
						/>
						<FixedSelect
							id="areas"
							label="Áreas de conhecimento"
							isDisabled={true}
							options={optionsArea}
						/>
						<Select
							options={turno.map((tur, i) => ({ label: tur, value: i }))}
							preSelect={0}
							disabled={false}
							label={'Turno'}
							id={'turno'}
						/>
						<ClipInput
							id="link"
							label="Link Lattes"
							placeholder="https://link.lattes.da.comissão.com"
							value={lattes}
							onChange={(e) => setLattes(e.target.value)}
							disabled
						/>
						<div className="mb-5 flex w-[45%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="funcao">
								Função no Evento
							</label>
							<div className="flex flex-wrap items-center gap-3 py-2.5">
								{checkboxRole.map((name, index) => (
									<CheckboxInput
										id={`${name}-${index}`}
										label={name}
										disabled={false}
										onChange={handleCheckboxChangeCharge}
										key={index}
										checked
									/>
								))}
							</div>
						</div>
						<div className="flex w-full items-center justify-center gap-5">
							<DefaultButton label="Voltar" backgroundColorHex="#8A8A8A" />
							<DefaultButton label="Salvar" backgroundColorHex="#4B00E0" />
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
}
