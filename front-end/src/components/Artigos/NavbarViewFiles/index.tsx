import { useState } from 'react';

import Arquivos from '@/components/Artigos/ArtigosCards/Cards';
import CriarEvento from '@/components/Artigos/ArtigosCards/Cards2';
import Menu from '@/components/COMPONENTES/Menu';
import CriarAtividade from '@/components/COMPONENTES/TabbarAuthenticated/TabBarFormsAuthenticated/Form-Atividades';
import DataLocal from '@/components/COMPONENTES/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-DataLocal';
import VisualizarSala from '@/components/COMPONENTES/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-Salas';
import Sessao from '@/components/COMPONENTES/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-Sessao';
import CadastrarUsuario from '@/components/COMPONENTES/TabbarAuthenticated/TabBarFormsAuthenticated/Forms-UsuComissaoLink';

import ArtigosConcluidos from '../ArtigosNoPrazo';
import * as S from './styles';

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
				return <ArtigosConcluidos />;
			case 'arquivos':
				return <Arquivos />;
			default:
				return null;
		}
	};
	return (
		<div className="">
			<div className="align-center fixed left-0 right-0 top-24 z-40 flex justify-center px-28 pb-5 pt-2">
				<div className="flex w-1/4 flex-wrap items-center justify-center gap-5 bg-[#F4F4F4] p-4 shadow-xl">
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
