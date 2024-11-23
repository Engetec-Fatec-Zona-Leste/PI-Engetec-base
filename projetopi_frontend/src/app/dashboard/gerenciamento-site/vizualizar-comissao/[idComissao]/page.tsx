'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toNumber } from 'lodash';
import { FaRegTrashCan } from 'react-icons/fa6';

import CheckboxInput from '@/components/CheckInput';
import ClipInput from '@/components/ClipInput';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import OutlineButton from '@/components/OutlineButton';
import Select, { OptionsType } from '@/components/Select';
import Title from '@/components/Title';
import { areas } from '@/mocks/Areas';
import { checkboxPeriodo, checkboxRole } from '@/mocks/checkboxes';

export default function VizualizarComissaoPage() {
	const router = useRouter();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState('');
	const [instituicao, setInst] = useState('');
	const [lattes, setLattes] = useState('');
	const [areasState, setAreasState] = useState<OptionsType[]>([]);
	const [period, setPeriod] = useState<number>(0);
	const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
	const handleCheckboxChangeRole = (roleId: string) => {
		setSelectedRoles((prevSelected) =>
			prevSelected.includes(roleId)
				? prevSelected.filter((id) => id !== roleId)
				: [...prevSelected, roleId]
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	useEffect(() => {
		setSelectedRoles(['Avaliador']);
		setPeriod(2);
		setAreasState(areas);
		setLattes('https://linkJuliaMartins1.lattes.com');
		setName('Julia Martins');
		setEmail('juliamartins@gmail.com');
		setCpf('114567432-87');
		setInst('Fatec São Paulo');
	}, []);

	return (
		<div>
			<Navbar />

			<div className="container">
				<div className="w-[60vw]">
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
						<Select
							id="areas"
							label="Áreas de conhecimento"
							options={areasState}
							preSelect={0}
							disabled
						/>
						<Select
							options={checkboxPeriodo.map((tur, i) => ({
								label: tur,
								value: i,
							}))}
							preSelect={period}
							label={'Turno'}
							id={'turno'}
							onChange={(e) => setPeriod(toNumber(e.target.value))}
							value={period}
						/>
						<ClipInput
							id="link"
							label="Link Lattes"
							placeholder="https://link.lattes.da.comissão.com"
							value={lattes}
							disabled
						/>
						<div className="mb-5 w-[45%]">
							<label className="mb-2 text-sm font-medium">
								Função no Evento
							</label>
							<div className="flex items-center gap-3 py-2.5">
								{checkboxRole.map((name, index) => (
									<CheckboxInput
										label={name}
										key={index}
										name={name}
										value={name}
										checked={selectedRoles.includes(name)}
										onChange={() => handleCheckboxChangeRole(name)}
									/>
								))}
							</div>
						</div>

						<div className="flex w-full items-center justify-center gap-5">
							<DefaultButton
								label="Voltar"
								backgroundColorHex="#8A8A8A"
								onClick={() => router.back()}
							/>
							<DefaultButton
								label="Salvar"
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
