import React, { useState } from 'react';

import Select from 'react-select';

import grandeAreasMock from '@/mocks/Areas';

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

      {/* <div>
				{selectedGrandeArea && <p>Grande Área: {selectedGrandeArea.nome}</p>}
				{selectedArea && <p>Área: {selectedArea.nome}</p>}
				{selectedSubArea && <p>SubÁrea: {selectedSubArea.nome}</p>}
				{selectedEspecialidade && (
					<p>Especialidade: {selectedEspecialidade.nome}</p>
				)}
			</div> */}

		</>
	);
};

export default Areas;
