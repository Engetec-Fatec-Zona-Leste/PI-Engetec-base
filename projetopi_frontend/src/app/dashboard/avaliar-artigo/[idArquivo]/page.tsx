'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { IoMdDownload } from 'react-icons/io';
import { MdStarBorder } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';

export default function ViewArticlePage({
	params,
}: {
	params: { idArquivo: string };
}) {
	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [areas, setAreas] = useState('');
	const [titulo, setTitulo] = useState('');
	const [knowlogyArea, setKnowlogyArea] = useState('');
	const [palavraChave, setPalavraChave] = useState('');
	const [keyword, setKeyword] = useState('');

	const router = useRouter();

	useEffect(() => {
		setResumo('Resumo');
		setAbstract('Abstract');
		setAreas('Areas');
		setTitulo('Titulo');
		setKnowlogyArea('Area de Conhecimento');
		setPalavraChave('PalavraChave');
		setKeyword('Keyword');
	}, []);

	const handleRecuseArticle = async (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		//backend actions...
		// showToast(
		// 	'info',
		// 	'Informarion: use this to display a card message on the top left of the screen'
		// );
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// actions({states}, params.idArquivo)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="w-3/5">
					<Title
						title="Artigo"
						subtitle="Visualizar Informações"
						colorHex="#4B00E0"
					/>

					<form
						className="rounded-xl bg-[#FDFDFD] p-5 shadow-md"
						onSubmit={handleSubmit}
					>
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
							<DefaultButton
								label="Recusar"
								backgroundColorHex="#840120"
								onClick={handleRecuseArticle}
							/>
							<DefaultButton
								label="Avaliar"
								backgroundColorHex="#4B00E0"
								icon={<MdStarBorder />}
								onClick={(e) => {
									e.stopPropagation();
									router.push(
										`/dashboard/avaliar-artigo/${params.idArquivo}/avaliar`
									);
								}}
							/>
						</div>
					</form>
					<div className="mt-8 flex flex-col items-center">
						<DefaultButton label="Voltar" onClick={() => router.back()} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
