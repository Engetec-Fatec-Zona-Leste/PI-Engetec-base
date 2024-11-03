'use client';

import { useState } from 'react';

import CadastroComissaoAvaliador from './TabbarForms/TabbarFormsComissaoAvaliador';
import CadastroComissaoOrganizador from './TabbarForms/TabbarFormsComissaoOrganizador';
import CadastroEditorChefe from './TabbarForms/TabbarFormsEditorChefe';
import CadastroUser from './TabbarForms/TabbarFormsUser';
import * as S from './styles';

type TabbarProps = {
	eventId: string;
};

export default function Tabbar({ eventId }: TabbarProps) {
	const [currentOption, setCurrentOption] = useState('cadastrar-user');

	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};
	const renderContent = () => {
		switch (currentOption) {
			case 'cadastrar-user':
				return <CadastroUser eventId={eventId} />;
			case 'cadastrar-comissao-avaliadora':
				return <CadastroComissaoAvaliador eventId={eventId} />;
			case 'cadastrar-comissao-organizadora':
				return <CadastroComissaoOrganizador eventId={eventId} />;
			case 'cadastrar-editorchefe':
				return <CadastroEditorChefe eventId={eventId} />;
			default:
				return null;
		}
	};
	return (
		<div>
			<div className="fixed left-0 right-0 top-24 z-40 bg-[#F4F4F4] px-28 pb-5 pt-8 shadow">
				<div className="flex flex-wrap items-center justify-center gap-5">
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-user')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-user'}
						>
							Cadastrar Usuário Aluno
						</S.OptionMenu>
						<S.IconUser selected={currentOption === 'cadastrar-user'} />
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-comissao-avaliadora')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-comissao-avaliadora'}
						>
							Cadastrar Comissão Avaliadora
						</S.OptionMenu>
						<S.IconComission
							selected={currentOption === 'cadastrar-comissao-avaliadora'}
						/>
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() =>
								handleOptionClick('cadastrar-comissao-organizadora')
							}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-comissao-organizadora'}
						>
							Cadastrar Comissão Organizadora
						</S.OptionMenu>
						<S.IconComission
							selected={currentOption === 'cadastrar-comissao-organizadora'}
						/>
					</div>
					<div className="flex items-center gap-2">
						<S.OptionMenu
							onClick={() => handleOptionClick('cadastrar-editorchefe')}
							className="flex-shrink-0 cursor-pointer text-sm"
							selected={currentOption === 'cadastrar-editorchefe'}
						>
							Cadastrar Editor Chefe
						</S.OptionMenu>
						<S.IconEditor
							selected={currentOption === 'cadastrar-editorchefe'}
						/>
					</div>
				</div>
			</div>
			{renderContent()}
		</div>
	);
}
