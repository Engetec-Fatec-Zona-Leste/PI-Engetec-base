
import { useState } from 'react';

import CriarAtividade from '@/components/TabBarFormsAuthenticated/Form-Atividades';
import Arquivos from '@/components/Artigos/ArtigosCards/Cards';
import DataLocal from '@/components/TabBarFormsAuthenticated/Forms-DataLocal';
import CriarEvento from '@/components/Artigos/ArtigosCards/Cards2';
import VisualizarSala from '@/components/TabBarFormsAuthenticated/Forms-Salas';
import Sessao from '@/components/TabBarFormsAuthenticated/Forms-Sessao';
import CadastrarUsuario from '@/components/TabBarFormsAuthenticated/Forms-UsuComissaoLink';
import Menu from '@/components/COMPONENTES/Menu';

import * as S from './styles';
import ArtigosConcluidos from '../ArtigosNoPrazo';

type TabbarProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function Tabfiles({
	currentOption,
	handleOptionClick,
}: TabbarProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'dentro-do-prazo':
				return (
					<ArtigosConcluidos
					/>
				);
			case 'arquivos':
				return (
					<Arquivos />
				);
			default:
				return null;
		}
	};
	return (
		<div className=''>
			<div className="fixed left-0 right-0 top-24 z-40 px-28 pb-5 pt-2 flex justify-center align-center">
				<div className="flex flex-wrap items-center justify-center gap-5 w-1/4 shadow-xl p-4 bg-[#F4F4F4]">
					<div className="flex items-center gap-2">
						
						<S.IconEvent selected={currentOption === 'dentro-do-prazo'} />
						<S.OptionMenu
							onClick={() => handleOptionClick('dentro-do-prazo')}
							className="flex-shrink-0 cursor-pointer text-base"
							selected={currentOption === 'dentro-do-prazo'}

						>
							Dentro do Prazo
						</S.OptionMenu>
					</div>
					<div className="flex items-center gap-2">
						<S.IconFiles selected={currentOption === 'arquivos'} />
						<S.OptionMenu
							onClick={() => handleOptionClick('arquivos')}
							className="flex-shrink-0 cursor-pointer text-base"
							selected={currentOption === 'arquivos'}
						>
							Concluidos
						</S.OptionMenu>
					</div>
					
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
