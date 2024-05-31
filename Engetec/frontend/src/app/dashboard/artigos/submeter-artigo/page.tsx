'use client';

import React, { ReactElement, useState } from 'react';

import { FaRegUser } from 'react-icons/fa';
import Select from 'react-select';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import FileInput from '@/components/COMPONENTES/FileInput';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import SelectCom from '@/components/COMPONENTES/Select';
import TextAreaInput from '@/components/COMPONENTES/TextAreaInput';
import Title from '@/components/COMPONENTES/Title';
import grandeAreasMock from '@/mocks/Areas';

export default function SubmeterArquivoPage() {
	const [titulo, setTitulo] = useState('');
	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [palavras, setPalavras] = useState('');
	const [words, setWords] = useState('');

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
	const [turno, setTurno] = useState(checkboxPeriodo);
	const [autores, setAutores] = useState<ReactElement[]>([]);

	const handleAddAutores = () => {
		const index = autores.length;
		const novoFormulario = (
			<div
				className="relative mb-8 flex flex-wrap justify-center gap-5 rounded-md bg-[#DEDEDE] pt-8"
				key={index}
			>
				<button
					className="absolute right-4 top-4 m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
					onClick={() => excluirFormularioAutor(index)}
				>
					<p className="text-xl font-bold ">X</p>
				</button>

				<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
					<FaRegUser />
					<p>Autor</p>
				</div>

				<SelectCom
					options={turno.map((tur, i) => ({ label: tur, value: i }))}
					preSelect={0}
					disabled={false}
					id={`turno-${index}`}
					label="Turno"
				/>

				<NormalInput
					label="Nome completo"
					id={`fullName-${index}`}
					placeholder="Nome do autor"
				/>

				<NormalInput
					label="Curso"
					id={`curso-${index}`}
					placeholder="Curso atual"
				/>

				<NormalInput
					label="E-mail"
					id={`email-${index}`}
					placeholder="emailexemplo@email.com"
				/>

				<NormalInput
					label="Instituição Referente"
					id={`instituicao-${index}`}
					placeholder="Instituição do autor"
				/>
			</div>
		);
		setAutores([...autores, novoFormulario]);
	};
	const excluirFormularioAutor = (index: number) => {
		setAutores((prevAutores: any) => {
			const updatedArray = [...prevAutores];
			updatedArray.splice(index, 1);
			return updatedArray;
		});
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="w-[60vw] ">
					<Title
						colorHex="#4B00E0"
						title="Submeter Arquivos"
						subtitle="Submeta o arquivo para participar do evento CultureFest"
					/>
					<form className="mt-8 w-full" onSubmit={handleSubmitForm}>
						<div className="mb-8 flex flex-wrap justify-center gap-5">
							<NormalInput
								id="title"
								label="Título"
								placeholder="Título do artigo"
								value={titulo}
								onChange={(e) => setTitulo(e.target.value)}
							/>

							<NormalInput
								id="palavras"
								label="Palavras-Chaves"
								placeholder="Artigo, Análise Científica, etc..."
								value={palavras}
								onChange={(e) => setPalavras(e.target.value)}
							/>

							<TextAreaInput
								id="resumo"
								label="Resumo"
								placeholder="Resumo do artigo"
								value={resumo}
								onChange={(e) => setResumo(e.target.value)}
								rows={5}
							/>

							<TextAreaInput
								id="abstract"
								label="Abstract"
								placeholder="Summary of article"
								value={abstract}
								onChange={(e) => setAbstract(e.target.value)}
								rows={5}
							/>

							<NormalInput
								id="words"
								label="Key-Words"
								placeholder="Plástico, Polímeros, Isopor"
								value={words}
								onChange={(e) => setWords(e.target.value)}
							/>

							{/* areas  */}
							<Areas />
						</div>

						{/* uploads  */}
						<div className="mb-8 flex flex-wrap justify-center gap-5">
							<FileInput id="artigoCompleto" label="Artigo Completo" />
							<FileInput id="artigoSemAutor" label="Artigo sem autoria" />
						</div>

						{/* forms autores  */}
						{autores.map((formulario) => formulario)}
						<div
							className="mb-8 flex cursor-pointer flex-wrap items-center justify-center gap-5 rounded-md bg-[#DEDEDE] px-4 py-3"
							onClick={handleAddAutores}
						>
							<button className="m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0">
								<p className="text-xl font-bold ">+</p>
							</button>
							<p>Adicionar mais autores</p>
						</div>

						{/* submit button  */}
						<div className="flex w-full items-center justify-center gap-5">
							<DefaultButton label="Voltar" backgroundColorHex="#8A8A8A" />
							<DefaultButton label="Enviar" backgroundColorHex="#4B00E0" />
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

type Especialidade = {
	nome: string;
};

type SubArea = {
	nome: string;
	especialidades: Especialidade[];
};

type Area = {
	nome: string;
	subAreas: SubArea[];
};

type GrandeArea = {
	nome: string;
	areas: Area[];
};

const grandeAreas: GrandeArea[] = grandeAreasMock;
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

const Areas: React.FC = () => {
	const [selectedGrandeArea, setSelectedGrandeArea] =
		useState<GrandeArea | null>(null);
	const [selectedArea, setSelectedArea] = useState<Area | null>(null);
	const [selectedSubArea, setSelectedSubArea] = useState<SubArea | null>(null);
	const [selectedEspecialidade, setSelectedEspecialidade] =
		useState<Especialidade | null>(null);

	const grandeAreaOptions = grandeAreas.map((grandeArea) => ({
		value: grandeArea.nome,
		label: grandeArea.nome,
		grandeArea: grandeArea,
	}));

	const areaOptions = selectedGrandeArea
		? selectedGrandeArea.areas.map((area) => ({
				value: area.nome,
				label: area.nome,
				area: area,
		  }))
		: [];

	const subAreaOptions = selectedArea
		? selectedArea.subAreas.map((subArea) => ({
				value: subArea.nome,
				label: subArea.nome,
				subArea: subArea,
		  }))
		: [];

	const especialidadeOptions = selectedSubArea
		? selectedSubArea.especialidades.map((especialidade) => ({
				value: especialidade.nome,
				label: especialidade.nome,
		  }))
		: [];

	const handleGrandeAreaChange = (selectedOption: any) => {
		setSelectedGrandeArea(selectedOption ? selectedOption.grandeArea : null);
		setSelectedArea(null);
		setSelectedSubArea(null);
		setSelectedEspecialidade(null);
	};

	const handleAreaChange = (selectedOption: any) => {
		setSelectedArea(selectedOption ? selectedOption.area : null);
		setSelectedSubArea(null);
		setSelectedEspecialidade(null);
	};

	const handleSubAreaChange = (selectedOption: any) => {
		setSelectedSubArea(selectedOption ? selectedOption.subArea : null);
		setSelectedEspecialidade(null);
	};

	const handleEspecialidadeChange = (selectedOption: any) => {
		setSelectedEspecialidade(selectedOption || null);
	};

	return (
		<>
			<div className="mb-5 flex w-[45%] flex-col">
				<label className="mb-2 text-sm font-medium" htmlFor="grandeArea">
					Grande Área
				</label>
				<Select
					options={grandeAreaOptions}
					onChange={handleGrandeAreaChange}
					placeholder="Selecione uma Grande Área"
					styles={customStyles}
					isClearable
					id="grandeArea"
				/>
			</div>

			<div className="mb-5 flex w-[45%] flex-col">
				<label className="mb-2 text-sm font-medium" htmlFor="area">
					Área
				</label>

				<Select
					options={areaOptions}
					onChange={handleAreaChange}
					placeholder="Selecione uma Área"
					styles={customStyles}
					isClearable
					isDisabled={!selectedGrandeArea}
					id="area"
				/>
			</div>

			<div className="mb-5 flex w-[45%] flex-col">
				<label className="mb-2 text-sm font-medium" htmlFor="subArea">
					Sub Área
				</label>
				<Select
					options={subAreaOptions}
					onChange={handleSubAreaChange}
					placeholder="Selecione uma SubÁrea"
					styles={customStyles}
					isClearable
					isDisabled={!selectedArea}
					id="subArea"
				/>
			</div>

			<div className="mb-5 flex w-[45%] flex-col">
				<label className="mb-2 text-sm font-medium" htmlFor="especialidade">
					Especialidade
				</label>
				<Select
					options={especialidadeOptions}
					onChange={handleEspecialidadeChange}
					placeholder="Selecione uma Especialidade"
					styles={customStyles}
					isClearable
					isDisabled={!selectedSubArea}
					id="especialidade"
				/>
			</div>
		</>
	);
};
