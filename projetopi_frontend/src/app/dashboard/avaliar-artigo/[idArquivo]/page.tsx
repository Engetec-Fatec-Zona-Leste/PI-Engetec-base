'use client';

import { useState } from 'react';

import { IoMdDownload } from 'react-icons/io';
import { MdStarBorder } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';

export default function ViewArticlePage() {
	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [areas, setAreas] = useState('');
	const [titulo, setTitulo] = useState('');
	const [knowlogyArea, setKnowlogyArea] = useState('');
	const [palavraChave, setPalavraChave] = useState('');
	const [keyword, setKeyword] = useState('');

	return (
		<div>
			<NavbarAuthenticated />
			<div className="container">
				<div className="w-3/5">
					<Title
						title="Artigo"
						subtitle="Visualizar Informações"
						colorHex="#4B00E0"
					/>
					<h1 className="text-7xl">TEM QUE MOCKAR!!!!</h1>

					<form className="rounded-xl bg-[#FDFDFD] p-5 shadow-md">
						<div className="form">
							<TextAreaInput
								label="Resumo:"
								name="resume"
								id="resume"
								placeholder="Resumo....."
								value={resumo}
								onChange={(e) => setResumo(e.target.value)}
								rows={6}
							/>
							<TextAreaInput
								label="Abstract:"
								name="abstract"
								id="abstract"
								placeholder="Abstract....."
								value={abstract}
								onChange={(e) => setAbstract(e.target.value)}
								rows={6}
							/>

							<TextAreaInput
								label="Palavras-Chaves:"
								name="palavraChave"
								id="palavraChave"
								placeholder="Palavras Chaves....."
								value={palavraChave}
								onChange={(e) => setPalavraChave(e.target.value)}
								rows={2}
							/>
							<TextAreaInput
								label="Keyword:"
								name="keyword"
								id="keyword"
								placeholder="Keyword....."
								value={keyword}
								onChange={(e) => setKeyword(e.target.value)}
								rows={2}
							/>
							<NormalInput
								label="Título:"
								type="text"
								name="titulo"
								id="titulo"
								placeholder="Título..."
								value={titulo}
								onChange={(e) => setTitulo(e.target.value)}
							/>
							<NormalInput
								label="Áreas do Artigo:"
								type="text"
								name="areas"
								id="areas"
								placeholder="Áreas de conhecimento..."
								value={areas}
								onChange={(e) => setAreas(e.target.value)}
							/>
							<NormalInput
								label="Áreas de conhecimento:"
								type="text"
								name="areas"
								id="areas"
								placeholder="Áreas de conhecimento..."
								value={knowlogyArea}
								onChange={(e) => setKnowlogyArea(e.target.value)}
							/>
						</div>

						<div className="mb-5 flex justify-center gap-5">
							<DefaultButton
								label="Baixar Artigo"
								icon={<IoMdDownload />}
								backgroundColorHex="#0391C9"
								customWidth="45%"
							/>
						</div>

						<div className="mb-5 flex justify-center gap-8">
							<DefaultButton label="Recusar" backgroundColorHex="#840120" />
							<DefaultButton
								label="Avaliar"
								backgroundColorHex="#4B00E0"
								icon={<MdStarBorder />}
							/>
						</div>
					</form>
					<div className="mt-8 flex flex-col items-center">
						<DefaultButton label="Voltar" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
