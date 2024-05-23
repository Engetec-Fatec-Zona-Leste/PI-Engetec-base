'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './styles';

export default function NavbarAuthenticated() {
	const router = useRouter();
	const [currentOption, setCurrentOption] = useState('/evento/criar-evento');
	const [query, setQuery] = useState('');

	useEffect(() => {
		const currentRoute = window.location.pathname;
		setCurrentOption(currentRoute);
	}, []);

	const handleOptionClick = (option: any) => {
		setCurrentOption(option);
		router.push(`${option}`);
	};

	return (
		<div className="fixed left-0 right-0 top-0 z-50 bg-[#F4F4F4] px-16 py-5 shadow-md">
			<div className="flex items-center justify-between">
				<Image
					src="/assets/navbar/logo-engetec.svg"
					alt="logo engetec"
					width={180}
					height={180}
				/>
				<div className="flex items-center gap-4">
					<S.OptionMenu
						onClick={() => handleOptionClick('/')}
						className="cursor-pointer text-base"
						selected={currentOption === '/'}
					>
						Página Inicial
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/evento/meus-eventos')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/evento/meus-eventos'}
					>
						Menu do Evento
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/evento/eventos-criados')}
						className="cursor-pointer text-base"
						selected={currentOption === '/evento/eventos-criados'}
					>
						Meus Eventos
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/evento/criar-evento')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/evento/criar-evento'}
					>
						Criar Evento
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/artigos/menu-artigos')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/artigos/menu-artigos'}
					>
						Menu de Submissão
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/artigos')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/artigos'}
					>
						Artigos
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() =>
							handleOptionClick('/dashboard/artigos/editar-artigo')
						}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/artigos/editar-artigo'}
					>
						Editar Artigo
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() =>
							handleOptionClick('/dashboard/editar/editar-comissao')
						}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/editar/editar-comissao'}
					>
						Editar Comissao
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/editar/editar-sessao')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/editar/editar-sessao'}
					>
						Editar Sessao
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/dashboard/certificados')}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/certificados'}
					>
						Certificados
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => handleOptionClick('/suporte')}
						className="cursor-pointer text-base"
						selected={currentOption === '/suporte'}
					>
						Suporte
					</S.OptionMenu>
				</div>
			</div>
		</div>
	);
}
