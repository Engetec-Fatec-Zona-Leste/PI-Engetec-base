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
		link: '/',
		title: 'Página Inicial',
	},
	{
		link: '/criar-evento',
		title: 'Criar Evento',
	},
	{
		link: '/dashboard/meus-arquivos',
		title: 'Meus Arquivos',
		subtitle: [
			{
				name: 'Arquivos Submetidos',
				link: '/dashboard/meus-arquivos',
			},
			{
				name: 'Arquivos Finalizados',
				link: '/dashboard/meus-arquivos/arquivos-finalizados',
			},
		],
	},

	{
		link: '/dashboard/avaliar-artigo',
		title: 'Avaliar Arquivo',
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
				link: '',
			},
			{
				name: 'Cadastrar Instituição',
				link: '',
			},
			{
				name: 'Cadastrar Comissão',
				link: '',
			},
			{
				name: 'Cadastrar Áreas',
				link: '',
			},
		],
	},
	{
		link: '/dashboard/certificados',
		title: 'Certificados',
	},

	// {
	// 	link: '/dashboard/artigos/artigos-finalizados',
	// 	title: 'Artigos Finalizados',
	// },
	// {
	// 	link: '/dashboard/artigos/artigos-para-avaliar/principal',
	// 	title: 'Artigos para Avaliar',
	// },
	// {
	// 	link: '/dashboard/artigos/artigos-para-avaliar/todos-arquivos',
	// 	title: 'Todos artigos - Avaliação',
	// },
	// {
	// 	link: '/dashboard/artigos/menu-submissao',
	// 	title: 'Menu de Submissão',
	// },
	// {
	// 	link: '/dashboard/artigos/submeter-artigo',
	// 	title: 'Submeter Artigo',
	// },
	// {
	// 	link: '/dashboard/editar/editar-artigos',
	// 	title: 'Editar Artigo',
	// },
	// {
	// 	link: '/dashboard/adicionar-palestrante',
	// 	title: 'Adicionar Palestrante',
	// },
	// {
	// 	link: '/dashboard/avaliacao/avaliar-artigo',
	// 	title: 'Avaliar Artigo',
	// },
	// {
	// 	link: '/dashboard/avaliacao/visualizar-artigo',
	// 	title: 'Visualizar Artigo ',
	// },
	// {
	// 	link: '/dashboard/cadastrar-instituicao',
	// 	title: 'Cadastrar Instituição',
	// },
	// {
	// 	link: '/dashboard/cadastrar-comissao-by-editor-chefe',
	// 	title: 'Cadastrar Comissão como Editor Chefe',
	// },
	// {
	// 	link: '/dashboard/cadastrar-comissao-by-admin',
	// 	title: 'Cadastrar Comissão como Admin',
	// },
	// {
	// 	link: '/dashboard/certificados',
	// 	title: 'Certificados',
	// },
];
