export type EventCertificate = {
	eventName: string;
	authors: string[];
	date: string;
};

export const eventCertificate: EventCertificate[] = [
	{
		eventName: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		authors: ['Clara Santos', 'Gustavo Oliveira', 'Marina Almeida'],
		date: '10/12/2023',
	},
	{
		eventName: 'Blockchain: Uma Revolução na Segurança de Dados e Transações',
		authors: ['Clara Santos', 'Gustavo Oliveira', 'Marina Almeida'],
		date: '10/12/2023',
	},
	{
		eventName: 'Digital Transformation Symposium',
		authors: ['Clara Santos', 'Gustavo Oliveira', 'Marina Almeida'],
		date: '10/12/2023',
	},
];
