export type ArticleToRateType = {
	id: number;
	resumo: string;
	abstract: string;
	avaliation1: string;
	avaliation2: string;
	avaliation3?: string;
	title: string;
	authorsString: string;
	theme: string;
	palavrasChaves: string;
	keyWords: string;
	areas: string;
};

export const articlesToRate: ArticleToRateType[] = [
	{
		id: 0,
		resumo:
			'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
		abstract:
			'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
		avaliation1:
			'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
		avaliation2:
			'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
		title:
			'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		theme: 'Estratégias para o Sucesso Empresarial na Era Digital',
		palavrasChaves:
			'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
		keyWords:
			'Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change',
		areas: 'Tecnologia, Análise Estratégicas',
	},
	{
		id: 1,
		resumo:
			'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
		abstract:
			'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
		avaliation1:
			'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
		avaliation2:
			'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
		avaliation3:
			'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
		title:
			'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		authorsString: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		theme: 'Estratégias para o Sucesso Empresarial na Era Digital',
		palavrasChaves:
			'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
		keyWords:
			'Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change',
		areas: 'Tecnologia, Análise Estratégicas',
	},
];
