'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaRegTrashCan } from 'react-icons/fa6';
import { IoMdDownload } from 'react-icons/io';
import { MdFileUpload, MdOutlineSaveAs } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import OutlineButton from '@/components/OutlineButton';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';

export default function EditArquivePage({
	params,
}: {
	params: {
		idArquivo: string;
	};
}) {
	const router = useRouter();

	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [areas, setAreas] = useState('');
	const [titulo, setTitulo] = useState('');
	const [autores, setAutores] = useState('');
	const [palavraChave, setPalavraChave] = useState('');
	const [keyword, setKeyword] = useState('');
	const [subAreas, setSubAreas] = useState('');

	useEffect(() => {
		setResumo('Resumo');
		setAbstract('Abstract');
		setAreas('Areas');
		setTitulo('Titulo');
		setAutores('Autores');
		setPalavraChave('PalavraChave');
		setKeyword('Keyword');
		setSubAreas('SubAreas');
	}, []);

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
				<div className="w-[60vw]">
					<Title
						title="Artigo"
						subtitle="Visualizar Informações"
						colorHex="#ef0037"
					/>

					<form
						className=" rounded-xl bg-[#FDFDFD] p-5 shadow-md"
						onSubmit={handleSubmit}
					>
						<div className="form">
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
								label="Autores:"
								type="text"
								name="autores"
								id="autores"
								placeholder="Autores..."
								value={autores}
								onChange={(e) => setAutores(e.target.value)}
							/>
							<NormalInput
								label="Áreas de conhecimento:"
								type="text"
								name="areas"
								id="areas"
								placeholder="Áreas de conhecimento..."
								value={areas}
								onChange={(e) => setAreas(e.target.value)}
							/>
							<NormalInput
								label="Subáreas:"
								type="text"
								name="subAreas"
								id="subAreas"
								placeholder="Subáreas....."
								value={subAreas}
								onChange={(e) => setSubAreas(e.target.value)}
							/>

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
						</div>
						<div className="mb-5 flex justify-center gap-5 ">
							<div className="flex w-[20%] flex-col ">
								<DefaultButton
									label="Baixar Artigo"
									backgroundColorHex="#4B00E0"
									icon={<IoMdDownload />}
									customWidth="100%"
								/>
								<DefaultButton
									label="Voltar"
									customWidth="100%"
									onClick={(e) => {
										e.preventDefault();
										router.back();
									}}
								/>
							</div>
							<div className="flex w-[20%] flex-col">
								<DefaultButton
									label="Alterar Artigo"
									backgroundColorHex="#0391C9"
									icon={<MdFileUpload />}
									customWidth="100%"
								/>
								<OutlineButton
									label="Salvar"
									customWidth="100%"
									outlineColorHex="#126A10"
									textColorHex="#126A10"
									icon={<MdOutlineSaveAs />}
									type="submit"
								/>
							</div>
						</div>
					</form>
					<div className="mt-5 flex flex-col items-end">
						<OutlineButton
							label="Excluir"
							outlineColorHex="#BF0000"
							textColorHex="#BF0000"
							icon={<FaRegTrashCan />}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
