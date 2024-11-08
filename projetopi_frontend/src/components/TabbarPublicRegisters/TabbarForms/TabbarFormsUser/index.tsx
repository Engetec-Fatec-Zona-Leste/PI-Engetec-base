import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import baseURL from '@/_actions/configUrl';
import { registerUser } from '@/_actions/registerUser';
import DefaultButton from '@/components/DefaultButton';
import NormalInput from '@/components/NormalInput';
import DefaultSelect from '@/components/Select';
import Title from '@/components/Title';

export default function CadastroUser() {
    const router = useRouter();

    const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];
    const [periodo, setPeriodo] = useState('');
    const [instituicoes, setInstituicoes] = useState([]); // Estado para armazenar as instituições
    const [loading, setLoading] = useState(true); // Para mostrar um indicador de carregamento

    // Fazendo a requisição para pegar as instituições
    useEffect(() => {
        const fetchInstituicoes = async () => {
            try {
                const response = await axios.get('http://localhost:3031/instituicao');
                console.log('Resposta da API:', response.data);
        
                // Aqui você verifica qual é a estrutura correta
                const instituicoesData = response.data.instituicoes || response.data;  // Adapta se necessário
        
                if (Array.isArray(instituicoesData)) {
                    const instituicoesOptions = instituicoesData.map(instituicao => ({
                        label: instituicao.nome,
                        value: instituicao.id,
                    }));
                    setInstituicoes(instituicoesOptions); // Atualiza o estado com as opções
                } else {
                    console.error("A resposta não contém um array de instituições", instituicoesData);
                    throw new Error("Formato inesperado na resposta da API");
                }
            } catch (error) {
                console.error('Erro ao carregar as instituições:', error);
                throw error;
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchInstituicoes();
    }, []); // Apenas faz a requisição uma vez, após o componente ser montado

    return (
        <div className="container-submenu">
            <div className="w-[60vw]">
                <Title
                    title="Cadastro como usuário"
                    subtitle="Cadastro como usuário - Aluno"
                    colorHex="#4B00E0"
                />

<form className="card mt-8 w-full" action={registerUser} method="POST">
                    <div className="flex flex-wrap items-center justify-center gap-5">
                        <NormalInput
                            id="fullName"
                            label="Nome completo"
                            placeholder="Nome do aluno"
                            required
                            name="nome"
                        />
                        <NormalInput
                            id="email"
                            label="E-mail"
                            placeholder="emailuser@email.com"
                            name="email"
                            type="email"
                        />
                        <NormalInput
                            id="password"
                            label="Senha"
                            placeholder="Senha do Usuário"
                            type="password"
                            required
                            name="senha"
                        />
                        <NormalInput
                            id="confirmPassword"
                            label="Confirmar Senha"
                            placeholder="Senha do Usuário"
                            type="password"
                            required
                            name="confirmeSenha"
                        />
                        <NormalInput
                            id="cpf"
                            label="CPF"
                            placeholder="CPF do Usuário"
                            name="cpf"
                            required
                            type="text"
                        />
                        {/* Verifica se as instituições estão carregadas */}
                        {loading ? (
                            <p>Carregando instituições...</p> // Exibe um loading enquanto está carregando
                        ) : (
                            <DefaultSelect
                                label="Instituição Referente"
                                id="institution"
                                name="instituicao"
                                options={instituicoes}
                                preSelect={0}
                            />
                        )}

                        <NormalInput
                            id="curso"
                            label="Curso"
                            placeholder="Análise e Desenvolvimento de Sistemas"
                            name="curso"
                            required
                        />

                        <DefaultSelect
                            label="Período de Estudo: "
                            id="turno"
                            name="periodo"
                            options={checkboxPeriodo.map((tur, i) => ({
                                label: tur,
                                value: i,
                            }))} 
                            selected={periodo}
                            onChange={(e) => setPeriodo(e.target.value)}
                            preSelect={0}
                        />

                        <div className="mb-5 flex w-[45%] items-center justify-around ">
                            <label className="text-sm font-medium">
                                Cadastrar mais Instituições
                            </label>

                            <button
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-red-500"
                                type="button"
                                onClick={() =>
                                    router.push(`/criar-evento/cadastrar-instituicao`)
                                }
                            >
                                <p className="text-3xl text-white">+</p>
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <p className="text-center text-xs font-normal text-slate-400">
                            Já tem uma conta？
                            <a
                                className="cursor-pointer font-bold text-[#4B00E0] underline"
                                href="/login"
                            >
                                Log in
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <DefaultButton
                            backgroundColorHex="#8A8A8A"
                            label="Voltar"
                            onClick={() => router.back()}
                        />
                        <DefaultButton
                            backgroundColorHex="#4B00E0"
                            label="Cadastrar"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
