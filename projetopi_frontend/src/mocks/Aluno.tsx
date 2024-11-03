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
		curse: 'Engenharia de Software',
		institution: 'Universidade XYZ',
		period: 'Matutino',
		speaker: true,
	},
	{
		id: 1,
		name: 'Maria Santos',
		email: 'maria.santos@example.com',
		curse: 'Ciência da Computação',
		institution: 'Instituto ABC',
		period: 'Noturno',
		speaker: false,
	},
	{
		id: 2,
		name: 'Pedro Oliveira',
		email: 'pedro.oliveira@example.com',
		curse: 'Sistemas de Informação',
		institution: 'Faculdade DEF',
		period: 'Matutino',
		speaker: false,
	},
];

export default authors;
