import authors, { AuthorType } from './Aluno';

export type CardsDataType = {
	id: number;
	eventName?: string;
	title: string;
	type: string;
	status: string;
	authorsString: string;
	authors?: AuthorType[];
	rooms: string;
	schedule?: {
		sendDate: string;
		presentationDate?: string;
	};
	presentation?: boolean;
	sendedArticle?: boolean;
	ArticleToSendInfos?: {
		refEvent: number;
		dateToSend?: string;
	};
};

export const cardsData1: CardsDataType[] = [
	{
		id: 1,
		title:
			'Era da Internet das Coisas: Transformando a Sociedade e os Negócios',
		type: 'Artigo',
		status: 'Aprovado',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		authors: authors,
		rooms: '01',
		schedule: {
			sendDate: '7 as 12h',
			presentationDate: '13 as 18h',
		},
		presentation: true,
		sendedArticle: true,
	},
	{
		id: 2,
		title: 'Blockchain: Uma Revolução na Segurança de Dados e Transações',
		type: 'Artigo',
		status: 'Reprovado',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		authors: authors,
		rooms: '02',
		schedule: {
			sendDate: '10/12/2022',
		},
		presentation: false,
		sendedArticle: true,
	},
	{
		id: 2,
		title: 'Blockchain: Uma Revolução na Segurança de Dados e Transações',
		type: 'Artigo',
		status: 'Reprovado',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		authors: authors,
		rooms: '02',
		schedule: {
			sendDate: '10/12/2022',
		},
		presentation: false,
		sendedArticle: false,
		ArticleToSendInfos: {
			refEvent: 3,
			dateToSend: '10/12/2024',
		},
	},
];

export const cardsData2: CardsDataType[] = [
	{
		id: 3,
		title:
			'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		type: 'Artigo',
		status: 'Em andamento',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		authors: authors,
		rooms: '01',
		schedule: {
			sendDate: '10/12/2022',
		},
		presentation: false,
		sendedArticle: true,
	},

	{
		id: 4,
		title:
			'Era da Internet das Coisas: Transformando a Sociedade e os Negócios',
		type: 'Artigo',
		status: 'Aprovado',
		authorsString: ' Clara Santos, Gustavo Oliveira, Marina Almeida',
		rooms: '02',
		schedule: {
			sendDate: '10/12/2022',
			presentationDate: '13 as 18h',
		},
		presentation: true,
		sendedArticle: true,
	},
];

export const cardsData3: CardsDataType[] = [
	{
		id: 5,
		eventName: 'AAAAAAA',
		title:
			'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		type: 'Artigo',
		status: 'Em andamento',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		authors: authors,
		rooms: '01',
		schedule: {
			sendDate: '10/12/2022',
		},
		presentation: false,
		sendedArticle: true,
	},

	{
		id: 6,
		eventName: 'BBBBB',
		title:
			'Era da Internet das Coisas: Transformando a Sociedade e os Negócios',
		type: 'Artigo',
		status: 'Aprovado',
		authorsString: ' Clara Santos, Gustavo Oliveira, Marina Almeida',
		rooms: '02',
		schedule: {
			sendDate: '10/12/2022',
			presentationDate: '13 as 18h',
		},
		presentation: true,
		sendedArticle: true,
	},
];
