'use client';

import React from 'react';

import * as S from './styles';

// Certifique-se de ter o arquivo de estilos

interface TabfilesProps {
	currentOption: string;
	handleOptionClick: (option: string) => void;
}

const Tabfiles: React.FC<TabfilesProps> = ({
	currentOption,
	handleOptionClick,
}) => {
	const tabs = [
		{ id: 'dentro-do-prazo', label: 'Dentro do Prazo' },
		{ id: 'concluidos', label: 'Concluídos' },
		// Adicione outras opções de tab conforme necessário
	];

	return (
		<div>
			<div className="align-center fixed left-0 right-0 top-24 z-40 flex justify-center px-28 pb-5 pt-2">
				<div className="flex w-2/6 flex-wrap items-center justify-center gap-5 bg-[#F4F4F4] p-4 shadow-xl">
					{tabs.map((tab) => (
						<div key={tab.id} className="flex items-center gap-2">
							{tab.id === 'dentro-do-prazo' && (
								<S.IconEvent selected={currentOption === tab.id} />
							)}
							{tab.id === 'concluidos' && (
								<S.IconFiles selected={currentOption === tab.id} />
							)}
							<S.OptionMenu
								onClick={() => handleOptionClick(tab.id)}
								className="flex-shrink-0 cursor-pointer text-base"
								selected={currentOption === tab.id}
							>
								{tab.label}
							</S.OptionMenu>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tabfiles;
