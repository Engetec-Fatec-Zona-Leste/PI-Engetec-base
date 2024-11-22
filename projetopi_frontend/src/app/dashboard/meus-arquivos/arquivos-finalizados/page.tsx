'use client';

import { useRouter } from 'next/navigation';

import { IoDownloadOutline } from 'react-icons/io5';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import Title from '@/components/Title';
import { finishedArticles } from '@/mocks/FinishedArticles';

export default function MeusArquivosFinalizados() {
	const router = useRouter();

	const handleDownloadArticle = (id: number) => {
		// backend tasks...
	};

	return (
		<div>
			<Navbar />
			<main>
				<div className="container flex-col items-center">
					<Title
						title="Artigos"
						subtitle="Visualizar Informações"
						colorHex="#4B00E0
"
					/>

					{/* Card Grande */}
					<div className="mb-14 w-[75%]">
						<form className=" rounded-xl bg-white p-8 shadow-lg">
							<div className="flex gap-8">
								<div className="flex w-full flex-col gap-5">
									<div>
										<label
											htmlFor="resumo"
											className="mb-2 block font-medium"
										>
											Resumo:
										</label>
										<textarea
											id="resumo"
											name="resumo"
											className="h-48 w-full overflow-y-auto rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
											placeholder="Texto 1"
											disabled
											value="Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado."
										></textarea>
									</div>
									<div>
										<label
											htmlFor="abstract"
											className="mb-2 block font-normal"
										>
											Abstract:
										</label>
										<textarea
											id="abstract"
											name="abstract"
											className="h-48 w-full overflow-y-auto rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
											placeholder="Texto 1"
											disabled
											value="This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment."
										></textarea>
									</div>

									<div>
										<label
											htmlFor="titulo"
											className="mb-2 block font-normal"
										>
											Áreas do artigo:
										</label>
										<input
											type="text"
											id="titulo"
											name="titulo"
											className="w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 1"
											disabled
											value="Tecnologia, Análise Estratégicas"
										/>
									</div>

								</div>
								<div className="flex w-full flex-col justify-between gap-5">
									<div>
										<label
											htmlFor="titulo"
											className="mb-2 block font-normal"
										>
											Título:
										</label>
										<input
											type="text"
											id="titulo"
											name="titulo"
											className="w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 1"
											disabled
											value="Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital"
										/>
									</div>
									<div>
										<label
											htmlFor="autores"
											className="mb-2 block font-normal"
										>
											Autores:
										</label>
										<input
											type="text"
											id="autores"
											name="autores"
											className="h-12 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 2"
											disabled
											value="Clara Santos, Gustavo Oliveira, Marina Almeida"
										/>
									</div>
									<div>
										<label htmlFor="tema" className="mb-2 block font-normal">
											Tema:
										</label>
										<input
											type="text"
											id="tema"
											name="tema"
											className="h-12 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 3"
											disabled
											value="Estratégias para o Sucesso Empresarial na Era Digital"
										/>
									</div>
									<div>
										<label
											htmlFor="palavrasChaves"
											className="mb-2 block font-normal"
										>
											Palavras-Chaves:
										</label>
										<input
											type="text"
											id="palavrasChaves"
											name="palavrasChaves"
											className="h-12 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="Input 4"
											disabled
											value="Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital"
										/>
									</div>
									<div>
										<label
											htmlFor="titulo"
											className="mb-2 block font-normal"
										>
											Keyword:
										</label>
										<input
											type="text"
											id="keywords"
											name="keywords"
											className="w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
											placeholder="KeyWords"
											disabled
											value="Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change"
										/>
									</div>
								</div>
							</div>

							<div className='w-full flex flex-row items-center justify-center'>
								<div className="mt-24 flex flex-row w-3/6 items-center justify-center gap-5">
									<DefaultButton
										label="Baixar Artigo"
										backgroundColorHex="#4B00E0"
										textColorHex="#FFFFFF"
										icon={<IoDownloadOutline />}
										customWidth="40%"
									/>
									<DefaultButton
										label="Voltar"
										type="button"
										customWidth="40%"
										onClick={() => router.back()}
									/>
								</div>
							</div>
						</form>
					</div>

					{/* Três Cards em Linha */}
					<div className="grid grid-cols-3 gap-4 w-[100%]">
						{['jonathan', 'joão', 'Estefanie'].map((index) => (
							<div key={index} className="rounded-xl bg-white p-6 shadow-lg">
								<div className="mb-4">
									<label
										htmlFor={`avaliador-${index}`}
										className="mb-2 block font-normal"
									>
										Avaliador:
									</label>
									<select
										id="avaliador3"
										className="border border-gray-300 p-2 w-full rounded-xl px-4 py-2 text-[18px]"
									>
										<option value="avaliador1">Avaliador 1</option>
										<option value="avaliador2">Avaliador 2</option>
										<option value="avaliador3">Avaliador 3</option>
									</select>
								</div>
								<div>
									<label htmlFor={`area-${index}`} className="mb-2 mt-12 block font-normal">
										Área:
									</label>
									<input
										type="text"
										id={`area-${index}`}
										name={`area-${index}`}
										className="w-full rounded-xl text-black bg-gray-400 border border-gray-400 px-4 py-2 text-[18px]"
										placeholder="Ex: Tecnologia ou Desenvolvimento"
										value="Tecnologia"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}