import { ReactElement } from 'react';

type navItemType = {
	link: string;
	title: string;
	icon?: ReactElement;
};

export const navigationNotAuthenticatedRoutes: navItemType[] = [
	{
		link: '/eventos',
		title: 'Página Inicial',
	},
	{
		link: '/login',
		title: 'Login',
	},
	{
		link: '/cadastros-publicos',
		title: 'Cadastrar-se',
	},
	{
		link: '/criar-evento',
		title: 'Criar Evento',
	},
];
