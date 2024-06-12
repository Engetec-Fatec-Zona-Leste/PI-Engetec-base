type Aluno = {
  nome: string;
  email: string;
  curso: string;
  instituicao: string;
  periodo: number;
  palestrante: boolean
};

const alunos: Aluno[] = [
  {
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    curso: 'Engenharia de Software',
    instituicao: 'Universidade XYZ',
    periodo: 0,
    palestrante: false

  },
  {
    nome: 'Maria Santos',
    email: 'maria.santos@example.com',
    curso: 'Ciência da Computação',
    instituicao: 'Instituto ABC',
    periodo: 2,
    palestrante: false
  },
  {
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
    curso: 'Sistemas de Informação',
    instituicao: 'Faculdade DEF',
    periodo: 0,
    palestrante: false
  },
];

export default alunos
