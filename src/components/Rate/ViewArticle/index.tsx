'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IoMdDownload } from 'react-icons/io';
import { MdStarBorder } from 'react-icons/md';

export default function ViewArticle() {
	const router = useRouter();

	const [resumo, setResumo] = useState('');
	const [abstract, setAbstract] = useState('');
	const [areas, setAreas] = useState('');
	const [titulo, setTitulo] = useState('');
	const [areasConhecimento, setAreasConhecimento] = useState('');
	const [palavraChave, setPalavraChave] = useState('');
	const [keyword, setKeyword] = useState('');

	return (
		<div className="container mt-40 flex justify-center">
			<div className="w-3/5">
				<h1
					className="text-center text-3xl font-bold text-black"
					style={{ color: '#4B00E0' }}
				>
					Artigo
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Visualizar Informações
				</h2>
				<div
					className="mt-6 w-full  rounded-xl p-5 shadow-md"
					style={{ backgroundColor: '#FDFDFD' }}
				>
					<div className="flex gap-10">
						<div className="w-1/2">
							<div className="mb-8 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="resume">
									Resumo:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="resume"
										id="resume"
										placeholder="Resumo....."
										value={resumo}
										onChange={(e) => setResumo(e.target.value)}
										rows={6}
									/>
								</div>
							</div>
							<div className="mb-8 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="abstract">
									Abstract:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="abstract"
										id="abstract"
										placeholder="Abstract....."
										value={abstract}
										onChange={(e) => setAbstract(e.target.value)}
										rows={6}
									/>
								</div>
							</div>
							<div className="mb-8 flex flex-col">
								<label className="text-sm font-medium" htmlFor="areas">
									Áreas do Artigo:
								</label>

								<div
									className="rounded-xl border bg-white px-4 py-2"
									style={{ borderColor: '#828282' }}
								>
									<input
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										type="text"
										name="areas"
										id="areas"
										placeholder="Áreas do Artigo..."
										value={areas}
										onChange={(e) => setAreas(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="w-1/2">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="titulo">
									Título:
								</label>

								<div
									className="rounded-xl border bg-white px-4 py-2"
									style={{ borderColor: '#828282' }}
								>
									<input
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										type="text"
										name="titulo"
										id="titulo"
										placeholder="Título..."
										value={titulo}
										onChange={(e) => setTitulo(e.target.value)}
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="areasConhecimento">
									Areas de Conhecimento:
								</label>

								<div
									className="rounded-xl border bg-white px-4 py-2"
									style={{ borderColor: '#828282' }}
								>
									<input
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										type="text"
										name="areasConhecimento"
										id="areasConhecimento"
										placeholder="Áreas de Conhecimento..."
										value={areasConhecimento}
										onChange={(e) => setAreasConhecimento(e.target.value)}
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="palavraChave"
								>
									Palavras-Chaves:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="palavraChave"
										id="palavraChave"
										placeholder="Palavras Chaves....."
										value={palavraChave}
										onChange={(e) => setPalavraChave(e.target.value)}
										rows={2}
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="keyword">
									Keyword:
								</label>

								<div
									className="rounded-xl border bg-white px-3 py-2"
									style={{ borderColor: '#828282' }}
								>
									<textarea
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										name="keyword"
										id="keyword"
										placeholder="Keyword....."
										value={keyword}
										onChange={(e) => setKeyword(e.target.value)}
										rows={6}
									/>
								</div>
							</div>
						</div>
					</div>

                    <div className="mb-5 flex justify-center gap-5">     
                        <button
                            className="flex w-96 h-12 items-center justify-center gap-2 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
                            type="submit"
                            style={{ backgroundColor: '#0391C9' }}
                        >
                            Baixar Artigo
                            <IoMdDownload className="h-4 w-4" />
                        </button>
                    </div>

					<div className="mb-5 flex justify-center gap-8">                        
						<div className="flex flex-col gap-4">
							<button
								className="w-44 h-10 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
								type="submit"
								style={{ backgroundColor: '#840120' }}
							>
								Recusar
							</button>
						</div>
						<div className="flex flex-col gap-4">
							<button
								className="flex w-44 h-10 items-center justify-center gap-2 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
								type="submit"
								style={{ backgroundColor: '#4B00E0' }}
							>
								Avaliar
								<MdStarBorder className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>
				<div className="mt-8 flex flex-col items-center">
                <button
					className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
					type="submit"
					style={{ backgroundColor: '#8A8A8A' }}
				>
					Voltar
				</button>
				</div>
			</div>
		</div>
	);
}
