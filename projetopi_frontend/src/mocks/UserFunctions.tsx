export type UserFunctionType = {
	name: string;
	email: string;
	area: string;
	instituition: string;
	situation: string;
	function?: string;
};

export const UsersFunction: UserFunctionType[] = [
	{
		name: 'Heitor Golsavez',
		email: 'heitor@gmail.com',
		area: 'Matematica',
		instituition: 'Etec Itaqua',
		situation: 'pending',
		function: 'avaliador',
	},
	{
		name: 'Kaue Castro',
		email: 'kaue@gmail.com',
		area: 'Matematica',
		instituition: 'Etec Itaqua',
		situation: 'pending',
		function: 'editor chefe',
	},
	{
		name: 'Sarah Figueiredo',
		email: 'sarah@gmail.com',
		area: 'Matematica',
		instituition: 'Etec Sao Matheus',
		situation: 'pending',
		function: 'administrador',
	},
	{
		name: 'Lavínia Rocha',
		email: 'lavinia@gmail.com',
		area: 'Dados',
		instituition: 'Etec Zona Leste',
		situation: 'accept',
		function: 'avalidador',
	},
	{
		name: 'Alana Novaes',
		email: 'alana@gmail.com',
		area: 'Redes',
		instituition: 'Etec Sao Paulo',
		situation: 'accept',
		function: 'avaliador',
	},
	{
		name: 'Julia Araujo',
		email: 'julia@gmail.com',
		area: 'Dados',
		instituition: 'Etec Sao Paulo',
		situation: 'accept',
		function: 'editor chefe',
	},
	{
		name: 'Manoel Vieira',
		email: 'vieira@gmail.com',
		area: 'Fisica',
		instituition: 'Etec Sao Bernardo',
		situation: 'declined',
		function: 'avaliador',
	},
	// {
	// 	name: 'Evelyn Carvalho',
	// 	email: 'carvalho@gmail.com',
	// 	area: 'Dados',
	// 	instituition: 'Fatec Sao Paulo',
	// 	situation: 'declined',
	// 	function: 'autor',
	// },
	// {
	// 	name: 'Heloise Peixoto',
	// 	email: 'helo@gmail.com',
	// 	area: 'Fisica',
	// 	instituition: 'Fatec Itaqua',
	// 	situation: 'declined',
	// 	function: 'autor',
	// },
	// {
	// 	name: 'Stephany Veganandry',
	// 	email: 'stephany@gmail.com',
	// 	area: 'Redes',
	// 	instituition: 'Fatec Zona Leste',
	// 	situation: 'declined',
	// 	function: 'autor',
	// },
];
