'use client';

import CriarAreaConhecimento from '../_criar-area-conhecimento';
import CriarEspecialide from '../_criar-especialidade';
import CriarGrandeAreaConhecimento from '../_criar-grande-area';
import CriarSubAreaConhecimento from '../_criar-sub-area';
import SearchComponent from '../_pesquisar';
import * as S from './styles';

type SelectAreaProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function SelecionarArea({
	currentOption,
	handleOptionClick,
}: SelectAreaProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'criar-area':
				return (
					<CriarAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-area')}
					/>
				);
			case 'criar-especialidade':
				return (
					<CriarEspecialide
						handleOptionClick={() => handleOptionClick('criar-especialidade')}
					/>
				);
			case 'criar-grande-area':
				return (
					<CriarGrandeAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-grande-area')}
					/>
				);
			case 'criar-sub-area':
				return (
					<CriarSubAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-sub-area')}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<div>
			<div className="absolute w-full">
				<div className="mt-96 flex items-center justify-center gap-10">
					<div className="h-18 z-10 flex w-[60vw] flex-wrap items-center justify-center gap-3 rounded-xl bg-[#F4F4F4] pb-2 pt-4 shadow">
						<div className="flex items-center gap-2">
							<S.OptionMenu
								onClick={() => handleOptionClick('criar-grande-area')}
								className="text-md flex-shrink-0 cursor-pointer"
								selected={currentOption === 'criar-grande-area'}
							>
								Grande Área
							</S.OptionMenu>
						</div>

						<div className="flex items-center gap-2">
							<S.OptionMenu
								onClick={() => handleOptionClick('criar-area')}
								className="text-md flex-shrink-0 cursor-pointer"
								selected={currentOption === 'criar-area'}
							>
								Área
							</S.OptionMenu>
						</div>
						<div className="flex items-center gap-2">
							<S.OptionMenu
								onClick={() => handleOptionClick('criar-sub-area')}
								className="text-md flex-shrink-0 cursor-pointer"
								selected={currentOption === 'criar-sub-area'}
							>
								Sub-Área
							</S.OptionMenu>
						</div>
						<div className="flex items-center gap-2">
							<S.OptionMenu
								onClick={() => handleOptionClick('criar-especialidade')}
								className="text-md flex-shrink-0 cursor-pointer"
								selected={currentOption === 'criar-especialidade'}
							>
								Especialidade
							</S.OptionMenu>
						</div>
					</div>
					<SearchComponent />
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
