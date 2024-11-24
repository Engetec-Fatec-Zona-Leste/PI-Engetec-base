'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaRegEye } from 'react-icons/fa';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Rating from '@/components/Rating';
import Title from '@/components/Title';

import * as S from './index';

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

export default function RateArticlePage({
	params,
}: {
	params: {
		idArquivo: string;
	};
}) {
	const router = useRouter();

	const [currentOption, setCurrentOption] = useState('articles-rate');
	const handleOptionClick = (option: string) => {
		setCurrentOption(option);
	};

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
	const [comentarioAutores, setComentarioAutores] = useState('');
	const [comentarioOrg, setcomentarioOrg] = useState('');
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
	const handleSendRate = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	const resendAvalible = true; // valor é capturado na entidade evento "reenvio permitido"

	const renderContent = () => {
		switch (currentOption) {
			case 'articles-rate':
				return (
					<div className="container mx-auto mt-[210px] flex flex-col items-center">
						<Title
							title="Avaliar Artigo"
							subtitle="A média é calculada conforme as perguntas são respondidas"
							colorHex="#4B00E0"
						/>

						<div className="my-5 flex w-[60vw] flex-row items-end justify-end">
							<div className="mr-5 flex flex-row items-center gap-2 rounded-xl ring-1 ring-black ">
								<Link
									className="ml-2 p-1 text-[12px] font-medium text-[#000000]"
									href={`/dashboard/avaliar-artigo/${params.idArquivo}`}
								>
									Ver Artigo
								</Link>
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
									onRatingChange={(value) =>
										handleRatingChange('objetivos', value)
									}
								/>

								<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
									3. Revisão de Literatura (reflete o estado-da-arte do
									conhecimento na área)
								</span>
								<Rating
									title="Avaliação de Revisão"
									defaultRating={ratings.revisao || undefined}
									onRatingChange={(value) =>
										handleRatingChange('revisao', value)
									}
								/>

								<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
									4. Consistência conceitual ou teórica do trabalho (adequada e
									bem estruturada)
								</span>
								<Rating
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
									onRatingChange={(value) =>
										handleRatingChange('conclusao', value)
									}
								/>

								<span className="mb-2 mt-8 w-full text-left text-sm font-bold text-gray-600">
									7. Contribuição científica (para o conhecimento na área
									temática)
								</span>
								<Rating
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
				);
			case 'rate':
				return (
					<div className="container mt-52 flex flex-col items-center">
						<Title
							title="Avaliar Artigo"
							subtitle="A média é calculada conforme as perguntas são respondidas"
							colorHex="#4B00E0"
						/>

						<div
							className="mt-12 flex w-[60vw] flex-col
			items-center justify-center rounded-xl border-[1px] border-black bg-transparent p-5 shadow-md"
						>
							<h1
								className="w-28 rounded-xl border-2 border-sky-400 p-4 text-center 
				font-bold"
							>
								Média: 0
							</h1>

							<div className="mb-8 mt-8 flex w-9/12 flex-col">
								<label
									className="mb-2 text-center text-base font-medium"
									htmlFor="abstract"
								>
									Comentário para os autores:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="comentarioAutores"
										id="comentarioAutores"
										placeholder="Comentário....."
										value={comentarioAutores}
										onChange={(e) => setComentarioAutores(e.target.value)}
										rows={6}
									/>
								</div>
							</div>
							<div className="mb-8 mt-8 flex w-9/12 flex-col">
								<label
									className="mb-2 text-center text-base font-medium"
									htmlFor="abstract"
								>
									Comentário para os organizadores:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="comentarioOrg"
										id="comentarioOrg"
										placeholder="Comentário....."
										value={comentarioOrg}
										onChange={(e) => setcomentarioOrg(e.target.value)}
										rows={6}
									/>
								</div>
							</div>

							{resendAvalible && (
								<div className="mb-5 flex flex-col">
									<label
										className="mb-2 flex flex-row gap-3 text-base"
										htmlFor="needAvaliation"
									>
										<input
											type="checkbox"
											className="w-6"
											id="needAvaliation"
											name="needAvaliation"
										/>
										Permitir Reenvio
									</label>
								</div>
							)}
						</div>

						<div className="mt-8 flex flex-row items-center justify-center gap-6">
							<button
								className="w-40 rounded-xl border bg-[#8A8A8A] p-2.5 text-center text-sm font-medium text-white"
								onClick={() => handleOptionClick('articles-rate')}
							>
								Voltar
							</button>

							<button
								className="w-40 rounded-xl border bg-[#4B00E0] p-2.5 text-center text-sm font-medium text-white"
								onClick={handleSendRate}
							>
								Enviar
							</button>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div>
			<Navbar />
			<div>
				<div className="flex w-full justify-center">
					<div
						className="absolute z-30 mt-32 flex h-16 w-60 flex-row items-center
				justify-center gap-5 bg-[#F4F4F4] px-16 py-5"
					>
						<div className="flex items-center">
							<S.OptionMenu
								onClick={() => handleOptionClick('articles-rate')}
								selected={currentOption === 'articles-rate'}
							></S.OptionMenu>
						</div>
						<div className="flex flex-row items-center">
							<S.OptionMenu
								onClick={() => handleOptionClick('rate')}
								selected={currentOption === 'rate'}
							></S.OptionMenu>
						</div>
					</div>
					{renderContent()}
				</div>
			</div>

			<Footer />
		</div>
	);
}
