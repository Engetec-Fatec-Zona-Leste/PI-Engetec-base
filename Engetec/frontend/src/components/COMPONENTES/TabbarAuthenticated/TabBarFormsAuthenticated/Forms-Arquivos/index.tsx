'use client';

import { useState } from 'react';

import Image from 'next/image';

import axios from 'axios';
import { BsPaperclip } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

import EditLogo from '@/imgs/editLogo.png';
import RemoveLogo from '@/imgs/trashLogo.png';
import { Arquivo } from '@/lib/repository/arquivo/index.repository';
import { ArquivoConfig } from '@/lib/repository/arquivo/index.repositoryFiles';

import AlertCard from '../../../AlertCard';

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function Arquivos({ handleNextClick }: CriarEventoProps) {
	const [tipo, setTipo] = useState('');
	const [dataInicioSubmissao, setDataInicioSubmissao] = useState('');
	const [dataFinalSubmissao, setDataFinalSubmissao] = useState('');
	const [limiteAutores, setLimiteAutores] = useState('');
	const [limiteAvaliadores, setLimiteAvaliadores] = useState('');
	const [dataInicioAvaliacao, setDataInicioAvaliacao] = useState('');
	const [dataFinalAvaliacao, setDataFinalAvaliacao] = useState('');
	const [limiteArquivos, setLimiteArquivos] = useState('');
	const [categoriaArquivo, setCategoriaArquivo] = useState('');
	const [normas, setNormas] = useState('');
	const [arquivos, setArquivos] = useState<Arquivo[]>([]);
	const [arquivosConfig, setArquivosConfig] = useState<ArquivoConfig[]>([]);
	const [checkAvaliation, setCheckAvaliation] = useState(false);
	const [checkApresentation, setCheckApresentation] = useState(false);
	const [showCard, setShowCard] = useState(false);
	const [showModeloApresentacao, setShowModeloApresentacao] = useState(false);
	const [showModeloArquivo, setShowModeloArquivo] = useState(false);
	const [files, setFiles] = useState<Arquivo[]>([]);

	const handleNextButtonClick = () => {
		handleNextClick();
	};

	const [areas, setAreas] = useState(['']);
	const [autores, setAutores] = useState(['']);
	const [file, setFile] = useState<File | null>(null);
	const [fileApresent, setFileApresent] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
			setShowModeloApresentacao(true);
		}
	};

	const handleFileDelete = () => {
		setFile(null);
		setShowModeloApresentacao(false);
	};

	const handleFileApresentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setShowModeloArquivo(true);
			setFileApresent(selectedFile);
		}
	};

	const handleFileApresentDelete = () => {
		setShowModeloArquivo(false);
		setFileApresent(null);
	};

	const handleCheckAvaliation = () => {
		setCheckAvaliation(!checkAvaliation);
	};

	const handleCheckApresentation = () => {
		setCheckApresentation(!checkApresentation);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		localStorage.clear();
		localStorage.setItem('areas', JSON.stringify(areas));
		localStorage.setItem('autores', JSON.stringify(autores));

		const eventId = localStorage.getItem('eventId');

		if (eventId) {
			let ArquivoCreated: Arquivo[] = [];
			let FileConfig: ArquivoConfig[] = [];
			try {
				arquivos.forEach(async (arquivo) => {
					const arquivoObjt: Arquivo = {
						category: arquivo.category,
						normasPub: arquivo.normasPub,
						needAvaliation: arquivo.needAvaliation,
						needApresentation: arquivo.needApresentation,
					};
					const result = await axios.post(
						'http://localhost:5002/arquivos',
						arquivoObjt
					);
					console.log(result);
					if (result.data.arquivo) {
						ArquivoCreated.push(result.data.arquivo);
						// setShowCard(true);
						// setTimeout(() => {
						// 	setShowCard(false);
						// 	handleNextButtonClick();
						// }, 3000);
						setTipo('');
						setAutores(['']);
						setAreas(['']);
					}
				});
				arquivosConfig.forEach(async (config) => {
					const arquivoConfigObj: ArquivoConfig = {
						dataInicioSubmissao: config.dataInicioSubmissao,
						dataFimSubmissao: config.dataFimSubmissao,
						limiteAutoresPorArquivo: config.limiteAutoresPorArquivo,
						limiteAvaliadoresPorArquivo: config.limiteAvaliadoresPorArquivo,
						dataInicioAvaliacao: config.dataInicioAvaliacao,
						dataFimAvaliacao: config.dataFimAvaliacao,
						limiteArquivosPorAutor: config.limiteArquivosPorAutor,
						modeloApresentacao: config.modeloApresentacao,
						modeloArquivo: config.modeloArquivo,
					};
					const resultado = await axios.post(
						'http://localhost:5002/arquivos',
						arquivoConfigObj
					);
					console.log(resultado);
					if (resultado.data.config) {
						FileConfig.push(resultado.data.config);
						setShowCard(true);
						setTimeout(() => {
							setShowCard(false);
							handleNextButtonClick();
						}, 3000);
						setDataInicioSubmissao('');
						setDataFinalAvaliacao('');
						setLimiteAutores('');
						setLimiteAvaliadores('');
						setDataInicioAvaliacao('');
						setDataFinalAvaliacao('');
						setLimiteArquivos('');
						setFile(null);
						setFileApresent(null);
					}
				});
			} catch (error) {
				console.log(error);
			}
		}

		//handleNextClick();
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
		<div className="container-submenu">
			<AlertCard message="Arquivos cadastradas com sucesso" show={showCard} />
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
					<form className="mt-8 w-10/12" onSubmit={handleAddOnTable}>
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
											value={dataInicioSubmissao}
											onChange={(e) => setDataInicioSubmissao(e.target.value)}
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
											name="dateActivity"
											id="dateActivity"
											value={dataFinalSubmissao}
											onChange={(e) => setDataFinalSubmissao(e.target.value)}
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
											value={limiteAutores}
											onChange={(e) => setLimiteAutores(e.target.value)}
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
											value={limiteAvaliadores}
											onChange={(e) => setLimiteAvaliadores(e.target.value)}
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
											value={dataInicioAvaliacao}
											onChange={(e) => setDataInicioAvaliacao(e.target.value)}
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
											value={dataFinalAvaliacao}
											onChange={(e) => setDataFinalAvaliacao(e.target.value)}
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
												onClick={handleFileDelete}
											/>
										</button>
									) : (
										''
									)}

									<div
										className="flex w-10/12 items-center justify-center rounded-xl border-0 px-4 py-2 text-white"
										style={{ backgroundColor: '#0391C9' }}
									>
										<label
											htmlFor="fileInput"
											className="flex cursor-pointer text-lg"
										>
											Submeter Modelo de Apresentação
											<FiUpload className="mx-2 h-7 w-6 text-white" />{' '}
										</label>
										<input
											type="file"
											id="fileInput"
											name="file"
											style={{ display: 'none' }}
											onChange={(e) => handleFileChange(e)}
											required
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-14 flex justify-center gap-5">
							<div className="w-full">
								<div className="mb-5 flex flex-col">
									<label className="mb-2 text-sm font-medium" htmlFor="select">
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
												onClick={handleFileApresentDelete}
											/>
										</button>
									) : (
										''
									)}

									<div
										className="flex w-full items-center justify-center rounded-xl border-0 px-4 py-2 text-white"
										style={{ backgroundColor: '#0391C9' }}
									>
										<label
											htmlFor="FileModel"
											className="flex cursor-pointer text-lg"
										>
											Submeter Modelo de Arquivo
											<FiUpload className="mx-2 h-7 w-6 text-white" />{' '}
										</label>
										<input
											type="file"
											id="FileModel"
											name="FileModel"
											style={{ display: 'none' }}
											onChange={(e) => handleFileApresentChange(e)}
											required
										/>
									</div>
								</div>

								<div className="mt-8 flex w-full gap-5">
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
												checked={checkAvaliation}
												onChange={handleCheckAvaliation}
											/>
											Precisa de Avaliação
										</label>
									</div>
									<div className="mb-5 flex flex-col">
										<label
											className="mb-2 flex flex-row gap-3 text-base"
											htmlFor="needApresentation"
										>
											<input
												type="checkbox"
												className="w-6"
												id="needApresentation"
												name="needApresentation"
												checked={checkApresentation}
												onChange={handleCheckApresentation}
											/>
											Precisa de Apresentação
										</label>
									</div>
								</div>

								<div className="mt-14 flex items-center justify-center gap-5">
									<button
										className="w-56 rounded-xl border-none p-2 text-center text-base font-medium text-white"
										style={{ backgroundColor: '#0391C9' }}
										type="button"
										onClick={handleAddOnTable}
									>
										Cadastrar Arquivo
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="mt-6 flex items-center justify-center gap-6">
					<button
						className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#8A8A8A' }}
						type="submit"
					>
						Voltar
					</button>
					<button
						className="w-56
                    rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#4B00E0' }}
						type="button"
						// onClick={handleNextButtonClick}
					>
						Avançar
					</button>
				</div>
				<table className="mt-14 w-full text-center">
					<thead style={{ backgroundColor: '#E4E4E4' }}>
						<tr className="h-14">
							<th scope="col">Categoria</th>
							<th scope="col" className="">
								Avaliação
							</th>
							<th scope="col" className="">
								Apresentação
							</th>
							<th scope="col" className="">
								Ações
							</th>
						</tr>
					</thead>
					<tbody>
						{files && (
							<>
								{files.map((arquivo, index) => {
									return (
										<tr
											key={index}
											className="h-14"
											style={{
												backgroundColor: !(index % 2 === 0)
													? '#E4E4E4'
													: '#fff',
											}}
										>
											<td scope="row" className="">
												{arquivo.category}
											</td>
											<td className="">
												{arquivo.needAvaliation ? 'Sim' : 'Não'}
											</td>
											<td className="">
												{arquivo.needApresentation ? 'Sim' : 'Não'}
											</td>
											<td className="">
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
									);
								})}
							</>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
