export type FinishedArticleType = {
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

export const finishedArticles: FinishedArticleType[] = [
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
			'Este artigo explora o impacto da inteligência artificial no desenvolvimento de soluções inovadoras para a gestão empresarial, destacando como algoritmos avançados estão transformando processos decisórios e otimizando operações em organizações de diversos setores.',
		abstract:
			'This article explores the impact of artificial intelligence on the development of innovative solutions for business management, highlighting how advanced algorithms are transforming decision-making processes and optimizing operations across various industries.',
		avaliation1:
			'A abordagem sobre a influência da inteligência artificial na gestão empresarial é detalhada e relevante, apresentando informações atuais e práticas para gestores que desejam implementar tecnologias emergentes.',
		avaliation2:
			'O artigo está bem estruturado e oferece uma análise aprofundada sobre o uso de inteligência artificial como um catalisador para a inovação empresarial. As palavras-chave são precisas e refletem o escopo central do estudo.',
		avaliation3:
			'A pesquisa combina teoria e prática de forma equilibrada, proporcionando uma visão clara sobre como as empresas podem utilizar inteligência artificial para melhorar a eficiência e obter vantagem competitiva no mercado.',
		title:
			'Inteligência Artificial: O Papel dos Algoritmos na Inovação Empresarial',
		authorsString: 'Lucas Pereira, Ana Ribeiro, Rafael Costa',
		theme: 'Impacto da Inteligência Artificial na Gestão Empresarial',
		palavrasChaves:
			'Inteligência Artificial, Gestão Empresarial, Inovação, Automação de Processos, Algoritmos Avançados, Transformação Digital',
		keyWords:
			'Artificial Intelligence, Business Management, Innovation, Process Automation, Advanced Algorithms, Digital Transformation',
		areas: 'Tecnologia, Inovação e Gestão Estratégica',
	},	
];
