import { ReactElement } from 'react';

type navItemType = {
	link: string;
	title: string;
	icon?: ReactElement;
};

export const navigationNotAuthenticatedRoutes: navItemType[] = [
	{
		link: '/',
		title: 'Página Inicial',
	},
	{
		link: '/login',
		title: 'Login',
	},
	{
		link: '/cadastrarUsuarios',
		title: 'Cadastrar',
	},
	{
		link: '/suporte',
		title: 'Suporte',
	},
];
