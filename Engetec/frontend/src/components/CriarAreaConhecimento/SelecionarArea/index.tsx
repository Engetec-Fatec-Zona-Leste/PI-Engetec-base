'use client';

import * as S from './styles';
import CriarAreaConhecimento from '../index';
import CriarEspecialide from '../CriarEspecialidade';
import CriarGrandeAreaConhecimento from '../CriarGrandeArea';
import CriarSubAreaConhecimento from '../CriarSubArea';
import SearchComponent from './ComponentePesquisar';

type SelectAreaProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};



export default function SelectArea({
	currentOption,
	handleOptionClick,
}: SelectAreaProps) {

	const renderContent = () => {
		switch (currentOption) {
			case 'criar-area':
				return (
					<CriarAreaConhecimento
                        handleOptionClick={() => handleOptionClick('criar-area')} />
				);
			case 'criar-especialidade':
				return (
					<CriarEspecialide handleOptionClick={() => handleOptionClick('criar-especialidade')} />
				);
			case 'criar-grande-area':
				return (
					<CriarGrandeAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-grande-area')}	/>
				);
			case 'criar-sub-area':
				return (
					<CriarSubAreaConhecimento
						handleOptionClick={() => handleOptionClick('criar-sub-area')}	/>
				);
			
			default:
				return null;
		}
	};

	return (
		<div>
                <div className="absolute ml-96 w-full flex-row">
                    <div className="flex flex-wrap w-1/4 h-18 mt-96 items-center justify-center rounded-xl gap-3 bg-[#F4F4F4] pb-2 pt-4 z-10 shadow">
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-grande-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-grande-area'}
                            >
                                Grande Área
                            </S.OptionMenu>
                        </div>

                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-area'}
                            >
                                Área
                            </S.OptionMenu>
                        </div>
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-sub-area')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-sub-area'}
                            >
                                Sub-Área
                            </S.OptionMenu>
                        </div>
                        <div className="flex items-center gap-2">
                            <S.OptionMenu
                                onClick={() => handleOptionClick('criar-especialidade')}
                                className="flex-shrink-0 cursor-pointer text-xs"
                                selected={currentOption === 'criar-especialidade'}
                            >
                                Especialidade
                            </S.OptionMenu>
                        </div> 
                    </div>
                <SearchComponent />
            </div>
			{renderContent()}

            
		    </div>
	);
}
