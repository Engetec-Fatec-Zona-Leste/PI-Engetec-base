'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { IoMdDownload } from 'react-icons/io';
import { MdStarBorder } from 'react-icons/md';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { articlesToRate } from '@/mocks/ArtigosRate';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';

export default function ViewArticlePage() {
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
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
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
			<NavbarAuthenticated />
			<div className="container">
				<div className="w-3/4">
					<Title
						title="Avaliações do Artigo"
						subtitle="Avaliações realizadas"
						colorHex="#4B00E0"
					/>


					<div className="form grid grid-cols-2">
						<div className='flex flex-col space-y-2'>
							<label>Titulos:</label>
							<textarea
								name="resume"
								id="resume"
								placeholder="Era da Internet das Coisas: Transformando a Sociedade e os Negócios"
								value="Era da Internet das Coisas: Transformando a Sociedade e os Negócios"
								onChange={(e) => setResumo(e.target.value)}
								rows={6}
								className='bg-[#D8D8D8] w-full h-[100px] p-4 rounded-[10px]'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label>Autores:</label>
							<textarea
								name="resume2"
								id="resume2"
								placeholder="Clara Santos, Gustavo Oliveira, Marina Almeida"
								value="Clara Santos, Gustavo Oliveira, Marina Almeida"
								onChange={(e) => setResumo(e.target.value)}
								rows={6}
								className='bg-[#D8D8D8] w-full h-[100px] p-4 rounded-[10px]'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label>Palavras-Chaves:</label>
							<textarea
								name="resume2"
								id="resume2"
								placeholder="Clara Santos, Gustavo Oliveira, Marina Almeida"
								value="Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital"
								onChange={(e) => setResumo(e.target.value)}
								rows={6}
								className='bg-[#D8D8D8] w-full h-[120px] p-4 rounded-[10px]'
							/>
						</div>

						<div className='flex flex-col space-y-2'>
							<label>Tema: </label>
							<textarea
								name="resume2"
								id="resume2"
								placeholder="Clara Santos, Gustavo Oliveira, Marina Almeida"
								value="Tecnologia, Análise Estratégicas"
								onChange={(e) => setResumo(e.target.value)}
								rows={6}
								className='bg-[#D8D8D8] w-full h-[120px] p-4 rounded-[10px]'
							/>
						</div>
						<div className="mt-8 overflow-x-auto col-span-2">
							<table className="w-full table-auto border-separate border-spacing-0 rounded-xl border-2 border-[#BCBCBC] bg-white">
								<thead className="bg-[#E4E4E4]">
									<tr>
										<th className="px-4 py-2 text-center text-base font-bold text-black">Avaliadores</th>
										<th className="px-4 py-2 text-center text-base font-bold text-black">Média</th>
										<th className="px-4 py-2 text-center text-base font-bold text-black">Status</th>
										<th className="px-4 py-2 text-center text-base font-bold text-black">Ações</th>
									</tr>
								</thead>
								<tbody>
									{articlesToRate.map((article) => (
										<tr
											key={article.id}
											className={`border-t ${article.id % 2 === 0 ? '' : 'bg-[#e4e4e4]'}`}
										>
											<td className="px-4 py-3 text-sm text-black text-center">{article.evaluators1}</td>
											<td className="px-4 py-3 text-sm text-black text-center">{article.media}</td>
											<td className="px-4 py-3 text-sm text-black text-center">
												{article.status === 'Aprovado' ? (
													<span className="text-green-500 underline">{article.status}</span>
												) : article.status === 'Reprovado' ? (
													<span className="text-red-500 underline">{article.status}</span>
												) : article.status === 'Em andamento' ? (
													<span className="text-blue-500 underline">{article.status}</span>
												) : (
													<span className="text-black underline">{article.status}</span>
												)}
											</td>
											<td className="px-4 py-8 text-center flex justify-center">

												{article.status === 'Recusou Avaliar' ? '' : <button
													className="flex items-center justify-center rounded-full border px-2 py-[2px] text-base font-medium border-cyan-500 bg-[#0391C9] text-white"
												>
													Ver Avaliação
													<MdStarBorder className="ml-2 text-xl text-cyan-500" />
												</button>}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>


					</div>

					<div className="mt-8 flex flex-col items-center">
						<DefaultButton label="Voltar" onClick={() => router.back()} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
