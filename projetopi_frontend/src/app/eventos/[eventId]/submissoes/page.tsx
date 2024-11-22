'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IoBookOutline, IoBookSharp } from 'react-icons/io5';
import { SlScreenDesktop } from 'react-icons/sl';
import { TfiEmail } from 'react-icons/tfi';

import CultureFest from '@/assets/CultureFest.png';
import ArticleModel from '@/assets/Modelo de apresentação.png';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';

export default function PageMenuSubmissao({
	params,
}: {
	params: { eventId: string };
}) {
	const router = useRouter();
	return (
		<div>
			<NavbarAuthenticated />
			<div className="container">
				<div className="w-11/12">
					<div className="flex justify-between gap-16">
						<div className="flex w-1/2 gap-8">
							<div>
								<Image
									src={CultureFest}
									width={275}
									height={275}
									alt="Picture of the author"
								/>
							</div>
							<div>
								<h1 className="text-2xl font-medium">CultureFest</h1>
								<div className="mt-2 flex items-center gap-2">
									<TfiEmail className="h-4 w-4" />
									<p className="text-base font-medium">cultureFest@gmail.com</p>
								</div>
								<div className="mt-4 flex flex-col gap-4">
									<button
										className="rounded-xl border-none p-3 text-center text-base font-medium text-white"
										type="button"
										style={{ backgroundColor: '#4B00E0' }}
										onClick={() =>
											router.push(
												`/eventos/${params.eventId}/submissoes/submeter`
											)
										}
									>
										Submeter Artigo
									</button>
									<button
										className="rounded-xl border-none p-3 text-center text-base font-medium text-white"
										type="submit"
										style={{ backgroundColor: '#0391C9' }}
									>
										Informações do Evento
									</button>
									<button
										className="rounded-xl border-none p-3 text-center text-base font-medium text-white"
										onClick={() => router.back()}
										style={{ backgroundColor: '#8A8A8A' }}
									>
										Voltar
									</button>
								</div>
							</div>
						</div>
						<div className="flex w-2/5 gap-8">
							<div
								className="flex w-1/2 flex-col gap-3 rounded-xl p-4"
								style={{
									border: '1px solid #4B00E0',
									cursor: 'pointer',
								}}
							>
								<div className="flex items-center gap-2">
									<SlScreenDesktop />

									<h2
										className="text-sm font-semibold"
										style={{ color: '#4B00E0' }}
									>
										Modelo para Apresentação
									</h2>
								</div>
								<div className="flex justify-center">
									<Image
										src={ArticleModel}
										width={180}
										height={187}
										alt="Picture of the author"
									/>
								</div>
								<div className="flex justify-center">
									<button
										className="w-2/3 rounded-xl border-none p-1 text-center text-base font-medium text-white"
										type="submit"
										style={{ backgroundColor: '#4B00E0' }}
									>
										Baixar
									</button>
								</div>
							</div>
							<div
								className="flex w-1/2 flex-col gap-3 rounded-xl p-4"
								style={{
									border: '1px solid #4B00E0',
									cursor: 'pointer',
								}}
							>
								<div className="flex items-center gap-2">
									<IoBookOutline />

									<h2
										className="text-sm font-semibold"
										style={{ color: '#4B00E0' }}
									>
										Modelo do Artigo
									</h2>
								</div>
								<div className="flex justify-center">
									<Image
										src={ArticleModel}
										width={180}
										height={187}
										alt="Picture of the author"
									/>
								</div>
								<div className="flex justify-center">
									<button
										className="w-2/3 rounded-xl border-none p-1 text-center text-base font-medium text-white"
										type="submit"
										style={{ backgroundColor: '#4B00E0' }}
									>
										Baixar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-1/5 items-center gap-4 rounded-xl bg-slate-50 p-3 shadow-md">
						<p className="mr-2 text-sm">Artigo</p>
						<button
							className="rounded-lg border-none p-1.5 text-center text-xs font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#4B00E0' }}
						>
							Análise científica
						</button>
						<button
							className="rounded-lg border-none p-1.5 text-center text-xs font-medium text-white"
							type="submit"
							style={{ backgroundColor: '#4B00E0' }}
						>
							Resumo
						</button>
					</div>
					<div
						className="mt-5 w-full rounded-xl p-8 shadow-md"
						style={{ backgroundColor: '#EFEEEE' }}
					>
						<div className="flex items-center gap-3">
							<IoBookOutline />
							<h2
								className="text-lg font-semibold"
								style={{ color: '#4B00E0' }}
							>
								Normas de Publicação
							</h2>
						</div>
						<div className="mt-4">
							<p className="pl-2 text-base font-medium">
								1. Formato do Artigo:
							</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									Utilize um formato padrão, como o APA ou o MLA, conforme
									indicado pela instituição ou revista acadêmica.
								</li>
								<li className="text-base">
									Utilize uma fonte legível, como Arial ou Times New Roman, com
									tamanho de fonte recomendado (geralmente 12 pontos).
								</li>
								<li className="text-base">
									Utilize espaçamento duplo entre linhas.
								</li>
								<li className="text-base">
									Inclua margens adequadas nas páginas (geralmente 2,54 cm em
									todos os lados).
								</li>
							</ol>
							<p className="mt-2 pl-2 text-base font-medium">2. Título:</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									O título do artigo deve ser claro, conciso e representar com
									precisão o conteúdo do trabalho.
								</li>
								<li className="text-base">
									Evite títulos muito longos, mas garanta que transmitam a
									essência do estudo.
								</li>
							</ol>
							<p className="mt-2 pl-2 text-base font-medium">3. Resumo:</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									Inclua um resumo conciso que descreva brevemente o objetivo do
									estudo, a metodologia utilizada, os principais resultados e as
									conclusões.
								</li>
								<li className="text-base">
									O resumo deve ter entre 150 e 250 palavras.
								</li>
							</ol>
							<p className="mt-2 pl-2 text-base font-medium">4. Introdução:</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									Apresente o contexto e a relevância do tema do artigo.
								</li>
								<li className="text-base">
									Estabeleça a pergunta de pesquisa, os objetivos do estudo e a
									estrutura do artigo.
								</li>
								<li className="text-base">
									Fornecer uma revisão breve, mas abrangente, da literatura
									relevante.
								</li>
							</ol>
							<p className="mt-2 pl-2 text-base font-medium">5. Metodologia:</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									Descreva detalhadamente os procedimentos e métodos utilizados
									na coleta de dados ou realização do estudo.
								</li>
								<li className="text-base">
									Inclua informações sobre a população/alvo, amostragem,
									instrumentos de coleta de dados e análise estatística, quando
									aplicável.
								</li>
							</ol>
							<p className="mt-2 pl-2 text-base font-medium">6. Resultados:</p>
							<ol className="list-disc pl-10">
								<li className="text-base">
									Apresente de forma clara e concisa os principais resultados do
									estudo.
								</li>
								<li className="text-base">
									Utilize tabelas, gráficos ou figuras quando apropriado para
									facilitar a compreensão dos dados.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
