import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaRegEye } from 'react-icons/fa';

import Rating from '@/components/Rating';
import Title from '@/components/Title';

const handleRatingChange = (value: any) => {
	console.log('Nota selecionada:', value);
};
type NavBarRateProps = {
	handleOptionClick: (option: string) => void;
	idArquivo: string;
};
type RatingsState = {
	tema: number | null;
	objetivos: number | null;
	revisao: number | null;
	consistencia: number | null;
	metodoDePesquisa: number | null;
	conclusao: number | null;
	constribuicao: number | null;
	analiseDeDados: number | null;
	redacaoOrganizacao: number | null;
};
export default function RateByRanking({
	handleOptionClick,
	idArquivo,
}: NavBarRateProps) {
	const router = useRouter();

	// NAO TA GRAVANDO NOS STATES
	const [ratings, setRatings] = useState<RatingsState>({
		tema: null,
		objetivos: null,
		revisao: null,
		consistencia: null,
		metodoDePesquisa: null,
		conclusao: null,
		constribuicao: null,
		analiseDeDados: null,
		redacaoOrganizacao: null,
	});
	const handleRatingChange = (campo: keyof RatingsState, valor: number) => {
		setRatings((prevRatings) => ({
			...prevRatings,
			[campo]: valor,
		}));
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleOptionClick('rate');
	};
	return (
		<>
			<div className="container mx-auto mt-[210px] flex flex-col items-center">
				<Title
					title="Avaliar Artigo"
					subtitle="A média é calculada conforme as perguntas são respondidas"
					colorHex="#4B00E0"
				/>
				<h1>FALTA ARRUMAR AQUI</h1>

				<div className="my-5 flex w-[60vw] flex-row items-end justify-end">
					<div className="mr-5 flex flex-row items-center gap-2 rounded-xl ring-1 ring-black ">
						<button className="ml-2 p-1 text-[12px] font-medium text-[#000000]">
							Ver Artigo
						</button>
						<FaRegEye className="mr-4" />
					</div>
				</div>

				<form
					className="mt-[15px] w-[60vw] justify-center rounded-xl  border border-slate-900 bg-transparent p-5 shadow-md"
					onSubmit={handleSubmitForm}
				>
					<div className="flex w-full flex-row items-center justify-center">
						<div className="rounded-xl border-2 border-cyan-400 px-4 py-4">
							<p className="font-bold">Média 0</p>
						</div>
					</div>
					<div className="form -mt-2">
						<span className="mb-2 w-full text-left text-sm font-bold text-gray-600">
							1. Tema(atual e relevante)
						</span>
						<Rating
							title="Avaliação de Produto"
							defaultRating={ratings.tema || undefined}
							onRatingChange={(value) => handleRatingChange('tema', value)}
						/>

						<span className="mb-2 mt-12 w-full text-left text-sm font-bold text-gray-600">
							2. Objetivos (claros e bem definidos)
						</span>
						<Rating
							title="Avaliação de Objetivos"
							defaultRating={ratings.objetivos || undefined}
							onRatingChange={(value) => handleRatingChange('objetivos', value)}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							3. Revisão de Literatura (reflete o estado-da-arte do conhecimento
							na área)
						</span>
						<Rating
							title="Avaliação de Revisão"
							defaultRating={ratings.revisao || undefined}
							onRatingChange={(value) => handleRatingChange('revisao', value)}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							4. Consistência conceitual ou teórica do trabalho (adequada e bem
							estruturada)
						</span>
						<Rating
							title="Avaliação de Consistência"
							defaultRating={ratings.consistencia || undefined}
							onRatingChange={(value) =>
								handleRatingChange('consistencia', value)
							}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							5. Método de Pesquisa utilizado (claramente definido e consistente
							com os objetivos do trabalho)
						</span>
						<Rating
							title="Avaliação de Método"
							defaultRating={ratings.metodoDePesquisa || undefined}
							onRatingChange={(value) =>
								handleRatingChange('metodoDePesquisa', value)
							}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							6. Conclusões (fundamentadas nos dados da pesquisa, clara e
							objetivas)
						</span>
						<Rating
							title="Avaliação de Conclusões"
							defaultRating={ratings.conclusao || undefined}
							onRatingChange={(value) => handleRatingChange('conclusao', value)}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							7. Contribuição científica (para o conhecimento na área temática)
						</span>
						<Rating
							title="Avaliação de Contribuição"
							defaultRating={ratings.constribuicao || undefined}
							onRatingChange={(value) =>
								handleRatingChange('constribuicao', value)
							}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							8. Análise de dados e resultados (interpretação correta dos dados
							e articulada com a base teórica)
						</span>
						<Rating
							title="Avaliação de Análise"
							defaultRating={ratings.analiseDeDados || undefined}
							onRatingChange={(value) =>
								handleRatingChange('analiseDeDados', value)
							}
						/>

						<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
							9. Redação e organização do texto (ortografia, gramática, clareza,
							objetividade e estrutura formal)
						</span>
						<Rating
							title="Avaliação de organização"
							defaultRating={ratings.redacaoOrganizacao || undefined}
							onRatingChange={(value) =>
								handleRatingChange('redacaoOrganizacao', value)
							}
						/>
					</div>
					<div className="mt-8 flex flex-row items-center justify-center gap-6">
						<button
							className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
							onClick={() => router.back()}
							style={{ backgroundColor: '#8A8A8A' }}
						>
							Voltar
						</button>

						<button
							className="w-40 rounded-xl border bg-[#4b00e0] p-2.5 text-center text-sm font-medium text-white"
							type="submit"
						>
							Avançar
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
