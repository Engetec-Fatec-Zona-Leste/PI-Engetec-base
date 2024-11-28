export type AuthorType = {
	id: number;
	name: string;
	email: string;
	curse: string;
	institution: string;
	period: string; // 0,1,2 => ['Matutino', 'Vespertino', 'Noturno'];
	speaker?: boolean;
};

const authors: AuthorType[] = [
	{
		id: 0,
		name: 'João Silva',
		email: 'joao.silva@example.com',
		curse: 'Análise e Desenvolvimento de Sistemas AMS',
		institution: 'Fatec Zona Leste',
		period: 'Noturno',
		speaker: true,
	},
	{
		id: 1,
		name: 'Maria Santos',
		email: 'maria.santos@example.com',
		curse: 'Administração',
		institution: 'Fatec Sao Paulo',
		period: 'Vespertino',
		speaker: false,
	},
	{
		id: 2,
		name: 'Pedro Oliveira',
		email: 'pedro.oliveira@example.com',
		curse: 'Sistemas de Informação',
		institution: 'Etec Itaqua',
		period: 'Matutino',
		speaker: false,
	},
];

export default authors;
