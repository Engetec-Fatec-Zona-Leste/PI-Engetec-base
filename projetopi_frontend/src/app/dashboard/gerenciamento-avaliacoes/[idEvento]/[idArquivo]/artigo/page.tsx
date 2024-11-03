'use client';

import { useRouter } from 'next/navigation';

import { CiStar } from 'react-icons/ci';
import { IoDownloadOutline } from 'react-icons/io5';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import Title from '@/components/Title';

export default function ArtigoPage() {
	const router = useRouter();

	const initialValues = {
		resumo:
			'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
		abstract:
			'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
		avaliacao1:
			'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
		avaliacao2:
			'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
		titulo:
			'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
		autores: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
		tema: 'Estratégias para o Sucesso Empresarial na Era Digital',
		palavrasChaves:
			'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
		keyWords:
			'Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change',
		areas: 'Tecnologia, Análise Estratégicas',
	};

	const handleVoltarClick = () => {
		/*  Implemente a lógica para voltar para a página anterior*/
	};

	return (
		<div>
			<Navbar />
			<main>
				<div className="container flex-col items-center">
					<Title
						title="Artigos"
						subtitle="Visualizar Informações"
						colorHex="#ef0037"
					/>

					<form className="w-[75%] rounded-xl bg-white p-8 shadow-lg">
						<div className="grid grid-cols-2 gap-8">
							<div className="col-span-1 grid grid-cols-1 gap-4">
								<div>
									<label htmlFor="resumo" className="mb-2 block font-medium">
										Resumo:
									</label>
									<textarea
										id="resumo"
										name="resumo"
										className="h-48 w-full overflow-y-auto rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.resumo}
										disabled
									></textarea>
								</div>
								<div>
									<label htmlFor="abstract" className="mb-2 block font-normal">
										Abstract:
									</label>
									<textarea
										id="abstract"
										name="abstract"
										className="h-48 w-full overflow-y-auto rounded-lg border border-[#828282] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.abstract}
										disabled
									></textarea>
								</div>

								<div>
									<label
										htmlFor="avaliacao1"
										className="mb-2 block font-normal"
									>
										Comentário do primeiro avaliador:
									</label>
									<textarea
										id="avaliacao1"
										name="avaliacao1"
										className="h-48 w-full overflow-y-auto rounded-lg border bg-[#C6C6C6] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.avaliacao1}
										disabled
									></textarea>
								</div>

								<div>
									<label
										htmlFor="avaliacao2"
										className="mb-2 block font-normal"
									>
										Comentário do segundo avaliador:
									</label>
									<textarea
										id="avaliacao2"
										name="avaliacao2"
										className="h-48 w-full overflow-y-auto rounded-lg border bg-[#C6C6C6] px-4 py-2 text-[18px] font-medium"
										placeholder="Texto 1"
										defaultValue={initialValues.avaliacao2}
										disabled
									></textarea>
								</div>
							</div>
							<div className="col-span-1 grid grid-cols-1 gap-4">
								<div className="mb-8">
									<label htmlFor="titulo" className="mb-2 block font-normal">
										Título:
									</label>
									<input
										type="text"
										id="titulo"
										name="titulo"
										className="h-16 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 1"
										defaultValue={initialValues.titulo}
										disabled
									/>
								</div>
								<div>
									<label htmlFor="autores" className="mb-2 block font-normal">
										Autores:
									</label>
									<input
										type="text"
										id="autores"
										name="autores"
										className="h-12 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 2"
										defaultValue={initialValues.autores}
										disabled
									/>
								</div>
								<div className="mb-8">
									<label htmlFor="tema" className="mb-2 block font-normal">
										Tema:
									</label>
									<input
										type="text"
										id="tema"
										name="tema"
										className="h-12 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Input 3"
										defaultValue={initialValues.tema}
										disabled
									/>
								</div>
								<div className="mb-8">
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
										defaultValue={initialValues.palavrasChaves}
										disabled
									/>
								</div>
								<div className="mb-8">
									<label htmlFor="titulo" className="mb-2 block font-normal">
										Keyword:
									</label>
									<input
										type="text"
										id="keywords"
										name="keywords"
										className="h-16 w-full overflow-y-auto rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="KeyWords"
										defaultValue={initialValues.keyWords}
										disabled
									/>
								</div>
								<div>
									<label htmlFor="areas" className="mb-2 block font-normal">
										Áreas do artigo:
									</label>
									<input
										type="text"
										id="areas"
										name="areas"
										className="h-12 w-full rounded-xl border border-[#828282] px-4 py-2 text-[18px]"
										placeholder="Areas"
										defaultValue={initialValues.areas}
										disabled
									/>
								</div>

								<div className="mt-8 flex w-full justify-between gap-10">
									<div className="w-full">
										<DefaultButton
											label="Baixar Artigo"
											backgroundColorHex="#0391C9"
											textColorHex="#FFFFFF"
											icon={<IoDownloadOutline />}
											customWidth="100%"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-24 flex justify-center gap-10">
							<DefaultButton label="Voltar" type="button" />
							<DefaultButton
								label="Ver Avaliações"
								backgroundColorHex="#4B00E0"
								textColorHex="#FFFFFF"
								icon={<CiStar />}
								onClick={() =>
									router.push('/dashboard/avaliacao/avaliacoes-realizadas')
								}
							/>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
