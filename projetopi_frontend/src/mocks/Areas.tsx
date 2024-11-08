import { OptionsType } from '@/components/Select';

type Especialidade = {
	nome: string;
};

type SubArea = {
	nome: string;
	especialidades: Especialidade[];
};

type Area = {
	nome: string;
	subAreas: SubArea[];
};

type GrandeArea = {
	nome: string;
	areas: Area[];
};

export const grandeAreas: GrandeArea[] = [
	{
		nome: 'Ciências Exatas e da Terra',
		areas: [
			{
				nome: 'Matemática',
				subAreas: [
					{
						nome: 'Álgebra',
						especialidades: [
							{ nome: 'Álgebra Linear' },
							{ nome: 'Álgebra Abstrata' },
						],
					},
					{
						nome: 'Análise',
						especialidades: [
							{ nome: 'Análise Real' },
							{ nome: 'Análise Complexa' },
						],
					},
					{
						nome: 'Geometria',
						especialidades: [
							{ nome: 'Geometria Euclidiana' },
							{ nome: 'Geometria Diferencial' },
						],
					},
				],
			},
			{
				nome: 'Física',
				subAreas: [
					{
						nome: 'Física Teórica',
						especialidades: [
							{ nome: 'Mecânica Quântica' },
							{ nome: 'Relatividade' },
						],
					},
					{
						nome: 'Física Experimental',
						especialidades: [
							{ nome: 'Física de Partículas' },
							{ nome: 'Física Nuclear' },
						],
					},
					{
						nome: 'Astrofísica',
						especialidades: [
							{ nome: 'Cosmologia' },
							{ nome: 'Astronomia Estelar' },
						],
					},
				],
			},
			{
				nome: 'Química',
				subAreas: [
					{
						nome: 'Química Orgânica',
						especialidades: [
							{ nome: 'Síntese Orgânica' },
							{ nome: 'Química Medicinal' },
						],
					},
					{
						nome: 'Química Inorgânica',
						especialidades: [
							{ nome: 'Química de Coordenação' },
							{ nome: 'Química de Materiais' },
						],
					},
					{
						nome: 'Bioquímica',
						especialidades: [{ nome: 'Enzimologia' }, { nome: 'Metabolismo' }],
					},
				],
			},
		],
	},
	{
		nome: 'Ciências Biológicas',
		areas: [
			{
				nome: 'Biologia Molecular',
				subAreas: [
					{
						nome: 'Genética',
						especialidades: [{ nome: 'Genômica' }, { nome: 'Epigenética' }],
					},
					{
						nome: 'Biotecnologia',
						especialidades: [
							{ nome: 'Engenharia Genética' },
							{ nome: 'Bioprocessos' },
						],
					},
					{
						nome: 'Bioinformática',
						especialidades: [
							{ nome: 'Análise de Sequências' },
							{ nome: 'Modelagem Molecular' },
						],
					},
				],
			},
			{
				nome: 'Ecologia',
				subAreas: [
					{
						nome: 'Ecologia de Ecossistemas',
						especialidades: [
							{ nome: 'Ecologia Florestal' },
							{ nome: 'Ecologia Marinha' },
						],
					},
					{
						nome: 'Ecologia Evolutiva',
						especialidades: [
							{ nome: 'Seleção Natural' },
							{ nome: 'Co-evolução' },
						],
					},
					{
						nome: 'Ecologia Humana',
						especialidades: [
							{ nome: 'Ecologia Urbana' },
							{ nome: 'Antropoecologia' },
						],
					},
				],
			},
			{
				nome: 'Zoologia',
				subAreas: [
					{
						nome: 'Entomologia',
						especialidades: [
							{ nome: 'Insetos Sociais' },
							{ nome: 'Taxonomia de Insetos' },
						],
					},
					{
						nome: 'Herpetologia',
						especialidades: [{ nome: 'Anfíbios' }, { nome: 'Répteis' }],
					},
					{
						nome: 'Ornitologia',
						especialidades: [
							{ nome: 'Comportamento de Aves' },
							{ nome: 'Ecologia de Aves' },
						],
					},
				],
			},
		],
	},
	{
		nome: 'Ciências Humanas',
		areas: [
			{
				nome: 'História',
				subAreas: [
					{
						nome: 'História Antiga',
						especialidades: [
							{ nome: 'História do Egito' },
							{ nome: 'História da Grécia' },
						],
					},
					{
						nome: 'História Medieval',
						especialidades: [
							{ nome: 'História da Europa Medieval' },
							{ nome: 'História das Cruzadas' },
						],
					},
					{
						nome: 'História Moderna',
						especialidades: [
							{ nome: 'Renascimento' },
							{ nome: 'Revolução Industrial' },
						],
					},
				],
			},
			{
				nome: 'Filosofia',
				subAreas: [
					{
						nome: 'Filosofia Antiga',
						especialidades: [
							{ nome: 'Pré-Socráticos' },
							{ nome: 'Socráticos' },
						],
					},
					{
						nome: 'Filosofia Contemporânea',
						especialidades: [
							{ nome: 'Existencialismo' },
							{ nome: 'Fenomenologia' },
						],
					},
					{
						nome: 'Ética',
						especialidades: [
							{ nome: 'Ética Normativa' },
							{ nome: 'Ética Aplicada' },
						],
					},
				],
			},
			{
				nome: 'Sociologia',
				subAreas: [
					{
						nome: 'Sociologia Urbana',
						especialidades: [
							{ nome: 'Estrutura Social' },
							{ nome: 'Movimentos Sociais' },
						],
					},
					{
						nome: 'Sociologia Rural',
						especialidades: [
							{ nome: 'Agricultura e Sociedade' },
							{ nome: 'Desenvolvimento Rural' },
						],
					},
					{
						nome: 'Sociologia Política',
						especialidades: [
							{ nome: 'Teoria Política' },
							{ nome: 'Políticas Públicas' },
						],
					},
				],
			},
		],
	},
];

export const grandesAreas: OptionsType[] = [
	{
		label: 'Ciências Exatas e da Terra',
		value: 0,
	},
	{
		label: 'Ciências Humanas',
		value: 1,
	},
];
type AreaType = {
	label: string;
	value: number;
	idGrandeArea: number;
};
export const areas: AreaType[] = [
	{
		label: 'Matemática',
		value: 0,
		idGrandeArea: 0,
	},
	{
		label: 'Física',
		value: 1,
		idGrandeArea: 0,
	},
	{
		label: 'História',
		value: 2,
		idGrandeArea: 1,
	},
	{
		label: 'Filosofia',
		value: 3,
		idGrandeArea: 1,
	},
];
type SubAreaType = {
	label: string;
	value: number;
	idArea: number;
};
export const subAreas: SubAreaType[] = [
	{
		label: 'Álgebra',
		value: 0,
		idArea: 0,
	},
	{
		label: 'Geometria',
		value: 1,
		idArea: 0,
	},
	{
		label: 'Cálculo',
		value: 2,
		idArea: 0,
	},
	{
		label: 'História Antiga',
		value: 3,
		idArea: 2,
	},
	{
		label: 'História Moderna',
		value: 4,
		idArea: 2,
	},
	{
		label: 'Filosofia Antiga',
		value: 5,
		idArea: 3,
	},
	{
		label: 'Filosofia Contemporânea',
		value: 6,
		idArea: 3,
	},
];
export const especialidades: SubAreaType[] = [
	{
		label: 'Álgebra',
		value: 0,
		idArea: 0,
	},
	{
		label: 'Geometria',
		value: 1,
		idArea: 0,
	},
	{
		label: 'Cálculo',
		value: 2,
		idArea: 0,
	},
	{
		label: 'História Antiga',
		value: 3,
		idArea: 2,
	},
	{
		label: 'História Moderna',
		value: 4,
		idArea: 2,
	},
	{
		label: 'Filosofia Antiga',
		value: 5,
		idArea: 3,
	},
	{
		label: 'Filosofia Contemporânea',
		value: 6,
		idArea: 3,
	},
];
