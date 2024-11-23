export type InstituitionType = {
	name: string;
	cnpj: string;
	situation: string;
};

export const instituitions: InstituitionType[] = [
	{
		name: 'Fatec 1',
		cnpj: '00000000',
		situation: 'pending',
	},
	{
		name: 'Fatec 2',
		cnpj: '0000000',
		situation: 'pending',
	},
	{
		name: 'Fatec 3',
		cnpj: '0000000',
		situation: 'pending',
	},
	{
		name: 'Fatec 4',
		cnpj: '0000000',
		situation: 'accept',
	},
	{
		name: 'Fatec 5',
		cnpj: '0000000',
		situation: 'accept',
	},
	{
		name: 'Fatec 6',
		cnpj: '0000000',
		situation: 'accept',
	},
	{
		name: 'Fatec 7',
		cnpj: '0000000',
		situation: 'declined',
	},
	{
		name: 'Fatec 8',
		cnpj: '0000000',
		situation: 'declined',
	},
	{
		name: 'Fatec 9',
		cnpj: '0000000',
		situation: 'declined',
	},
];
