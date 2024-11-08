'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { BsPaperclip } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import EditLogo from '@/assets/editLogo.png';
import RemoveLogo from '@/assets/trashLogo.png';
import FileInput from '@/components/FileInput';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import { showToast } from '@/contexts/ToastProvider';
import { Arquivo } from '@/lib/repository/arquivo/index.repository';

export default function Arquivos({ params }: { params: { idEvento: string } }) {
	const router = useRouter();

	const [limiteArquivos, setLimiteArquivos] = useState('');
	const [categoriaArquivo, setCategoriaArquivo] = useState('');
	const [normas, setNormas] = useState('');
	const [checkAvaliation, setCheckAvaliation] = useState(false);
	const [checkApresentation, setCheckApresentation] = useState(false);
	const [checkResend, setCheckResend] = useState(false);
	const [showModeloApresentacao, setShowModeloApresentacao] = useState(false);
	const [showModeloArquivo, setShowModeloArquivo] = useState(false);
	const [files, setFiles] = useState<Arquivo[]>([]);

	const [file, setFile] = useState<File | null>(null);
	const [fileApresent, setFileApresent] = useState<File | null>(null);

	const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// await action(formData, files)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);

		router.push(`/criar-evento/${params.idEvento}/usuarios`);
	};

	const handleAddOnTable = () => {
		setFiles((prev) => [
			...prev,
			{
				category: categoriaArquivo,
				normasPub: normas,
				needAvaliation: checkAvaliation,
				needApresentation: checkApresentation,
			},
		]);
		setCategoriaArquivo('');
		setNormas('');
		setCheckAvaliation(false);
		setCheckApresentation(false);
	};

	const itemToRemove = (i: any) => {
		setFiles((prevFiles) => {
			const updatedArray = [...prevFiles];
			updatedArray.splice(i, 1);
			return updatedArray;
		});
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="w-full">
					<h1
						className="text-center text-2xl font-bold text-black"
						style={{ color: '#ef0037' }}
					>
						Arquivos
					</h1>
					<h2 className="text-center" style={{ color: '#000000' }}>
						Arquivos que serão submetidos pelos participantes
					</h2>
					<div className="flex justify-center">
						<form className="mt-8 w-[65%]" onSubmit={handleSubmit}>
							<div className="mt-8 flex justify-center gap-5 rounded-lg border bg-neutral-50 p-4 shadow-xl">
								<div className="ml-20 w-full">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicio"
										>
											Data de Inicio da Submissão
										</label>
										<div className="w-10/12 cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full cursor-pointer rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateActivity"
												id="dateActivity"
												required
											/>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicio"
										>
											Data de Final da Submissão
										</label>
										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="endDateActivity"
												id="dateActivity"
												required
											/>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="eventName"
										>
											Limite de autores por arquivo
										</label>

										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="number"
												name="activityTitle"
												id="activityTitle"
												placeholder="Limite de autores por arquivo"
												required
											/>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="eventName"
										>
											Limite de avaliadores por arquivo
										</label>

										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="number"
												name="activityTitle"
												id="activityTitle"
												placeholder="Limite de avaliadores por arquivo"
												required
											/>
										</div>
									</div>
								</div>

								<div className="w-full">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicio"
										>
											Data de Inicio da Avaliação
										</label>
										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateActivity"
												id="dateActivity"
												required
											/>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicio"
										>
											Data de Final da Avaliação
										</label>
										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="Date"
												name="dateActivity"
												id="dateActivity"
												required
											/>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="dateInicio"
										>
											Limites de arquivo por autor
										</label>
										<div className="w-10/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<input
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												type="text"
												name="dateActivity"
												id="dateActivity"
												placeholder="Limite de arquivos por autor"
												value={limiteArquivos}
												onChange={(e) => setLimiteArquivos(e.target.value)}
												required
											/>
										</div>
									</div>

									<div className="flex flex-col gap-4">
										{showModeloApresentacao ? (
											<button
												className="flex w-10/12 justify-between rounded-xl border-none p-2 text-center text-base font-medium text-black"
												style={{ backgroundColor: '#00B7FF' }}
												type="button"
											>
												<BsPaperclip className="w4 mt-0.5 text-xl text-black" />
												{file ? file.name : '.'}
												<FaTimes
													className="mt-1 w-4 text-black"
													onClick={() => {
														setFile(null);
														setShowModeloApresentacao(false);
													}}
												/>
											</button>
										) : (
											''
										)}

										<FileInput
											id="fileInput"
											label="Submeter Modelo de Apresentação"
											customWidth="100%"
											placeHolder="Submeter Modelo de Apresentação"
										/>
									</div>
								</div>
							</div>

							<div className="mt-14 flex justify-center gap-5">
								<div className="w-full">
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="select"
										>
											Categoria de Arquivo
										</label>
										<div className="mb-3 flex items-center">
											<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
												<select
													className="w-full rounded-md border-0 bg-white text-sm outline-none"
													name="selectType"
													id="selectType"
													value={categoriaArquivo}
													onChange={(e) => setCategoriaArquivo(e.target.value)}
													required
												>
													<option defaultChecked>Selecione</option>
													<option value="Analise">Análise Científica</option>
													<option value="Artigo">Artigo Científico</option>
												</select>
											</div>
											<div className="ml-3 cursor-pointer rounded-lg bg-[#EF0037] px-3 py-1">
												<a
													href="/dashboard/evento/criar-arquivos"
													target="_blank"
													className="text-xl font-bold text-white"
												>
													+
												</a>
											</div>
										</div>
									</div>

									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 text-sm font-medium"
											htmlFor="descricao"
										>
											Normas de Publicação
										</label>

										<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
											<textarea
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												name="activityDescription"
												id="activityDescription"
												rows={6}
												value={normas}
												onChange={(e) => setNormas(e.target.value)}
												required
											/>
										</div>
									</div>
								</div>
								<div className="ml-20 w-full">
									<div className="mb-5 mt-5 flex flex-col gap-4">
										{showModeloArquivo ? (
											<button
												className="flex w-full justify-between rounded-xl border-none p-2 text-center text-base font-medium text-black"
												style={{ backgroundColor: '#00B7FF' }}
												type="button"
											>
												<BsPaperclip className="w4 mt-0.5 text-xl text-black" />
												{fileApresent ? fileApresent.name : '.'}
												<FaTimes
													className="mt-1 w-4 text-black"
													onClick={() => {
														setShowModeloArquivo(false);
														setFileApresent(null);
													}}
												/>
											</button>
										) : (
											''
										)}

										<FileInput
											label="Submeter Modelo de Arquivo"
											id="FileModel"
											customWidth="100%"
											placeHolder="Submeter Modelo de Arquivo"
											primaryColorHex="#0391C9"
										/>
									</div>

									<div className="mt-8 flex w-full flex-wrap gap-5 ">
										<div className="flex w-full flex-row justify-between">
											<div className="mb-5 flex w-1/2 flex-col justify-center">
												<label
													className="mb-2 flex cursor-pointer flex-row gap-3 text-lg"
													htmlFor="needAvaliation"
												>
													<input
														type="checkbox"
														className="w-6 cursor-pointer"
														id="needAvaliation"
														name="needAvaliation"
														checked={checkAvaliation}
														onChange={() =>
															setCheckAvaliation(!checkAvaliation)
														}
													/>
													Precisa de Avaliação
												</label>
											</div>
											<div className="mb-5 flex w-1/2 flex-col">
												<label
													className="mb-2 flex cursor-pointer flex-row gap-3 text-lg"
													htmlFor="needApresentation"
												>
													<input
														type="checkbox"
														className="w-6 cursor-pointer"
														id="needApresentation"
														name="needApresentation"
														checked={checkApresentation}
														onChange={() =>
															setCheckApresentation(!checkApresentation)
														}
													/>
													Precisa de Apresentação
												</label>
											</div>
										</div>

										<div className="flex w-full flex-row content-center justify-between">
											<div className="mb-5 flex w-1/2 flex-col justify-center text-lg">
												<label
													className="mb-2 flex cursor-pointer flex-row gap-3 text-lg"
													htmlFor="needResend"
												>
													<input
														type="checkbox"
														className="w-6 cursor-pointer"
														id="needResend"
														name="needResend"
														checked={checkResend}
														onChange={() => setCheckResend(!checkResend)}
													/>
													Permitir reenvio
												</label>
											</div>

											<div className="w-1/2">
												<button
													className="w-full rounded-xl border-none p-2 text-center text-base font-medium text-white"
													style={{ backgroundColor: '#0391C9' }}
													type="button"
													onClick={handleAddOnTable}
												>
													Cadastrar Arquivo
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-14  flex w-full items-center justify-center gap-6">
								<button
									className="w-56 rounded-xl border-none p-2 text-center text-base font-medium text-white"
									style={{ backgroundColor: '#8A8A8A' }}
									type="button"
									onClick={() => router.back()}
								>
									Voltar
								</button>
								<button
									className="w-56 rounded-xl border-none p-2 text-center text-base font-medium text-white"
									style={{ backgroundColor: '#4B00E0' }}
									type="submit"
								>
									Avançar
								</button>

								<div className="ml-10 flex items-center justify-center">
									<SearchFilter />
								</div>
							</div>
						</form>
					</div>

					<div className="flex w-full justify-center">
						<div className="mt-12 w-3/4 overflow-hidden rounded-md">
							<table className="w-full table-auto items-center">
								<thead
									style={{ backgroundColor: '#E4E4E4' }}
									className="rounded-t-md"
								>
									<tr className="h-14">
										<th scope="col" className="border px-4 text-center">
											Categoria
										</th>
										<th scope="col" className="px-4 text-center">
											Avaliação
										</th>
										<th scope="col" className="px-4 text-center">
											Apresentação
										</th>
										<th scope="col" className="px-4 text-center">
											Ações
										</th>
									</tr>
								</thead>
								<tbody>
									{files && (
										<>
											{files.map((arquivo, index) => (
												<tr
													key={index}
													className="h-14"
													style={{
														backgroundColor:
															index % 2 === 0 ? '#fff' : '#E4E4E4',
													}}
												>
													<td className="px-4 text-center">
														{arquivo.category}
													</td>
													<td className="px-4 text-center">
														{arquivo.needAvaliation ? 'Sim' : 'Não'}
													</td>
													<td className="px-4 text-center">
														{arquivo.needApresentation ? 'Sim' : 'Não'}
													</td>
													<td className="px-4 text-center">
														<div className="flex flex-row justify-center gap-2">
															<button className="middle none center mb-2 mt-2 flex w-1/3 items-center justify-center rounded-2xl border-2 border-indigo-600 p-2 font-sans font-bold text-indigo-600 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
																<Image src={EditLogo} alt="" height={20} />
																<p className="ml-2">Editar</p>
															</button>
															<button
																className="middle none center mb-2 mt-2 flex w-1/3 items-center justify-center rounded-2xl border-2 border-rose-700 p-2 font-sans font-bold text-rose-700 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
																onClick={() => itemToRemove(index)}
															>
																<Image src={RemoveLogo} alt="" height={20} />
																<p className="ml-2">Excluir</p>
															</button>
														</div>
													</td>
												</tr>
											))}
										</>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
