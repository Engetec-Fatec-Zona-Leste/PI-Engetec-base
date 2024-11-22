import { ReactElement } from 'react';

type Item = {
	name: string;
	link: string;
};
type navItemType = {
	link: string;
	title: string;
	subtitle?: Item[];
	icon?: ReactElement;
};

export const navigationAuthenticatedRoutes: navItemType[] = [
	{
		link: '/eventos',
		title: 'Página Inicial',
	},
	{
		link: '/dashboard/meus-arquivos',
		title: 'Meus Arquivos',
		subtitle: [
			{
				name: 'Arquivos Finalizados',
				link: '/dashboard/meus-arquivos/arquivos-finalizados',
			},
		],
	},

	{
		link: '/dashboard/avaliar-artigo',
		title: 'Avaliar Arquivo',
		subtitle: [
			{
				name: 'Avaliações Realizadas',
				link: '/dashboard/dashboard/avaliar-artigo/avalicoesRealizadas',
			},
		],
	},
	{
		link: '/dashboard/meus-eventos-criados',
		title: 'Meus Eventos Criados',
	},
	{
		link: '/dashboard/gerenciamento-avaliacoes',
		title: 'Gerenciamento de Avaliações',
		subtitle: [],
	},
	{
		link: '/dashboard/gerenciamento-site',
		title: 'Gerenciamento de Site',
		subtitle: [
			{
				name: 'Cadastrar Admin',
				link: '/dashboard/gerenciamento-site/cadastrar-admin',
			},
			{
				name: 'Cadastrar Instituição',
				link: '/dashboard/gerenciamento-site/cadastrar-instituicao',
			},
			{
				name: 'Cadastrar Comissão',
				link: '/dashboard/gerenciamento-site/cadastrar-comissao',
			},
			{
				name: 'Cadastrar Áreas',
				link: '/dashboard/gerenciamento-site/cadastrar-area',
			},
		],
	},
	{
		link: '/dashboard/proceedings',
		title: 'Proceedings',
	},
	{
		link: '/dashboard/certificados',
		title: 'Certificados',
	},
];
