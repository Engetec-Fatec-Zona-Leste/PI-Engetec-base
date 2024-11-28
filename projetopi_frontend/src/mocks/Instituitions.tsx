export type InstituitionType = {
	name: string;
	cnpj: string;
	situation: string;
};

export const instituitions: InstituitionType[] = [
	{
		name: 'Fatec Zona Leste',
		cnpj: '000000',
		situation: 'pending',
	},
	{
		name: 'Fatec Itaqua',
		cnpj: '8904385098',
		situation: 'pending',
	},
	{
		name: 'Fatec Sao Paulo',
		cnpj: '111111',
		situation: 'pending',
	},
	{
		name: 'Etec Itaqua',
		cnpj: '90584609',
		situation: 'accept',
	},
	{
		name: 'Fatec Zona Leste',
		cnpj: '000000',
		situation: 'accept',
	},
	{
		name: 'Etec Sao Paulo',
		cnpj: '984985792',
		situation: 'accept',
	},
	{
		name: 'Fatec Sao Paulo',
		cnpj: '111111',
		situation: 'accept',
	},
	{
		name: 'Fatec Sao Bernardo',
		cnpj: '546809589',
		situation: 'accept',
	},
	{
		name: 'Fatec Zona Leste',
		cnpj: '546809589',
		situation: 'accept',
	},
	{
		name: 'Fatec Itaquera',
		cnpj: '9982739847',
		situation: 'declined',
	},
];
