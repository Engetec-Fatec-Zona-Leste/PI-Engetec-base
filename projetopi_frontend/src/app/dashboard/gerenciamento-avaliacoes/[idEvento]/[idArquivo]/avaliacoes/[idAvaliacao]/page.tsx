'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Rating from '@/components/Rating';
import Title from '@/components/Title';

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

export default function ViewArticlePage() {
	const router = useRouter();
	const [ratings, setRatings] = useState<RatingsState>({
		tema: 4,
		objetivos: 4,
		revisao: 4,
		consistencia: 4,
		metodoDePesquisa: 4,
		conclusao: 4,
		constribuicao: 4,
		analiseDeDados: 4,
		redacaoOrganizacao: 4,
	});

	const handleRatingChange = (campo: keyof RatingsState, valor: number) => {
		setRatings((prevRatings) => ({
			...prevRatings,
			[campo]: valor,
		}));
	};
	return (
		<div>
			<Navbar />
			<div className="container mx-auto mt-[210px] flex flex-col items-center">
				<div className="w-3/5">
					<Title
						title="Avaliação do Artigo"
						subtitle="Avaliação realizada pelo Gabriel Oliveira"
						colorHex="#4B00E0"
					/>
					<div
						data-message-author-role="user"
						data-message-id="aaa297db-ff8a-407e-8b32-636d76c946b6"
						dir="auto"
						className="text-message flex min-h-8 w-full flex-col items-end gap-2 whitespace-normal break-words [.text-message+&]:mt-5"
					>
						<div className="flex w-full flex-col items-center gap-1 px-16 empty:hidden rtl:items-center">
							<div className="dark:bg-token-main-surface-secondary relative w-[90%] rounded-3xl bg-gray-300 px-5 py-2.5">
								<div className="whitespace-pre-wrap">
									Os exemplos e casos de uso mencionados no artigo são
									relevantes e ilustram de forma eficaz como a IoT está
									impactando positivamente a sociedade e impulsionando a
									inovação nos negócios. A argumentação é coerente e embasada, o
									que fortalece a validade das conclusões apresentadas. Em
									termos técnicos, a escrita do artigo é clara e acessível,
									tornando-o compreensível mesmo para leitores com conhecimento
									básico sobre o assunto. A estrutura do artigo é bem
									organizada, facilitando a leitura e a assimilação dos
									conteúdos abordados.
								</div>
								<div className="absolute bottom-0 right-full top-0 -mr-3.5 hidden pr-5 pt-1 [.group\/conversation-turn:hover_&]:block">
									<span className="" data-state="closed">
										<button
											aria-label="Editar mensagem"
											className="text-token-text-secondary hover:bg-token-main-surface-tertiary flex h-9 w-9 items-center justify-center rounded-full transition"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="icon-md"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>

					<form className="mt-[30px] rounded-xl border border-slate-900  bg-transparent p-5 shadow-md">
						<div className="flex w-full flex-row items-center justify-center">
							<div className="rounded-xl border-2 border-cyan-400 px-4 py-4">
								<p className="font-bold">Média 4.5</p>
							</div>
						</div>
						<div className="form -mt-2">
							<span className="mb-2 w-full text-left text-sm font-bold text-gray-600">
								1. Tema(atual e relevante)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Produto"
								defaultRating={ratings.tema || undefined}
								onRatingChange={(value) => handleRatingChange('tema', value)}
							/>

							<span className="mb-2 mt-12 w-full text-left text-sm font-bold text-gray-600">
								2. Objetivos (claros e bem definidos)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Objetivos"
								defaultRating={ratings.objetivos || undefined}
								onRatingChange={(value) =>
									handleRatingChange('objetivos', value)
								}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								3. Revisão de Literatura (reflete o estado-da-arte do
								conhecimento na área)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Revisão"
								defaultRating={ratings.revisao || undefined}
								onRatingChange={(value) => handleRatingChange('revisao', value)}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								4. Consistência conceitual ou teórica do trabalho (adequada e
								bem estruturada)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Consistência"
								defaultRating={ratings.consistencia || undefined}
								onRatingChange={(value) =>
									handleRatingChange('consistencia', value)
								}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								5. Método de Pesquisa utilizado (claramente definido e
								consistente com os objetivos do trabalho)
							</span>
							<Rating
								disabled={true}
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
								disabled={true}
								title="Avaliação de Conclusões"
								defaultRating={ratings.conclusao || undefined}
								onRatingChange={(value) =>
									handleRatingChange('conclusao', value)
								}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								7. Contribuição científica (para o conhecimento na área
								temática)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Contribuição"
								defaultRating={ratings.constribuicao || undefined}
								onRatingChange={(value) =>
									handleRatingChange('constribuicao', value)
								}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								8. Análise de dados e resultados (interpretação correta dos
								dados e articulada com a base teórica)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de Análise"
								defaultRating={ratings.analiseDeDados || undefined}
								onRatingChange={(value) =>
									handleRatingChange('analiseDeDados', value)
								}
							/>

							<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
								9. Redação e organização do texto (ortografia, gramática,
								clareza, objetividade e estrutura formal)
							</span>
							<Rating
								disabled={true}
								title="Avaliação de organização"
								defaultRating={ratings.redacaoOrganizacao || undefined}
								onRatingChange={(value) =>
									handleRatingChange('redacaoOrganizacao', value)
								}
							/>
						</div>
					</form>
					<div className="mt-12 flex flex-col items-center">
						<DefaultButton label="Voltar" onClick={() => router.back()} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
