export type Proceedings = {
	EventName: string;
	authors: string[];
	date: string;
};

export const proceedingsMock: Proceedings[] = [
	{
		EventName: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		authors: ['Ana', 'Cassio'],
		date: '7º EngeTec(2024)',
	},
	{
		EventName: 'Blockchain: Uma Revolução na Segurança de Dados e Transações',
		authors: ['Rodrigo', 'Maria'],
		date: '8º EngeTec(2024)',
	},

	{
		EventName: 'Digital Transformation Symposium',
		authors: ['Ana Konda', 'Déssio Pinto'],
		date: '7º EngeTec(2024)',
	}
];
