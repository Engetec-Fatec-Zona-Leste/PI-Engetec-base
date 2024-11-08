'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import 'react-tagsinput/react-tagsinput.css';

import CheckInput from '@/components/CheckInput';
import Footer from '@/components/Footer';
import IncrementInput from '@/components/IncrementInput';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import { showToast } from '@/contexts/ToastProvider';
import { checkboxEvento, checkboxGerar } from '@/mocks/checkboxes';

export default function CriarEventoPage({
	params,
}: {
	params: { idEvento: string };
}) {
	// const pathname = usePathname();
	// const searchParams = useSearchParams();
	//Do something in response to a route change
	// useEffect(() => {
	// 	// Do something here...
	// }, [pathname, searchParams]);
	const [showModal, setShowModal] = useState(false);

	const [selectedVisibilidade, setSelectedVisibilidade] = useState<string[]>(
		[]
	);
	const handleCheckboxChangeVisibilidade = (id: string) => {
		setSelectedVisibilidade((prevSelected) =>
			prevSelected.includes(id)
				? prevSelected.filter((id) => id !== id)
				: [...prevSelected, id]
		);
	};
	const [selectedGerar, setSelectedGerar] = useState<string[]>([]);
	const handleCheckboxChangeGerar = (id: string) => {
		setSelectedGerar((prevSelected) =>
			prevSelected.includes(id)
				? prevSelected.filter((id) => id !== id)
				: [...prevSelected, id]
		);
	};

	const [file, setFile] = useState<File | null>(null);
	const [previewURL, setPreviewURL] = useState<string | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];
		setFile(selectedFile || null);
		if (selectedFile) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewURL(reader.result as string);
			};
			reader.readAsDataURL(selectedFile);
		}
	};

	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		let eventIdCreated = 12;
		// eventIdCreated await = action(formData)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);

		router.push(
			`/criar-evento/${eventIdCreated}/data?modalidade=${formData.get(
				'modalidade'
			)}`
		);
		// router.push('/cadastrar/12345/data?modalidade=Presencial');
		// router.push('/cadastrar/12345/data?modalidade=Hibrido');
	};

	return (
		<div>
			<NavbarAuthenticated />
			<div className="container mb-6 mt-52 flex justify-center">
				<div className="w-[60vw]">
					<h1
						className="text-center text-2xl font-bold text-black"
						style={{ color: '#ef0037' }}
					>
						Crie seu próprio evento!
					</h1>
					<form className="mt-8 w-full" onSubmit={handleSubmit}>
						<div className="flex justify-center gap-10">
							<div className="w-full">
								<div className="mb-5 flex flex-col">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="eventName"
									>
										Nome do Evento
									</label>

									<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											type="text"
											name="eventName"
											id="feventName"
											placeholder="Nome do Evento"
											required
										/>
									</div>
								</div>
								<div className="mb-5 flex flex-col">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="nomeEditor"
									>
										Nome do Editor Chefe
									</label>

									<div className="flex items-center gap-2">
										<div className="w-11/12 rounded-md border border-gray-300 bg-white px-4 py-2">
											<select
												className="w-full rounded-md border-0 bg-white text-sm outline-none"
												name="nomeEditor"
												id="nomeEditor"
												required
											>
												<option value="Eduardo">Eduardo Lima</option>
											</select>
										</div>
										<div className="w-10 rounded-xl bg-[#EF0037]">
											<a
												href="/criar-evento/1234/cadastrar-editor-chefe"
												className="flex cursor-pointer items-center justify-center text-3xl font-semibold text-white"
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
										Descrição do Evento
									</label>

									<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
										<textarea
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											name="descricao"
											id="descricao"
											placeholder="Descrição do Evento"
											rows={4}
											required
										/>
									</div>
								</div>
								<div className="mb-5 flex flex-col">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="modalidade"
									>
										Modalidade
									</label>

									<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
										<select
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											name="modalidade"
											id="modalidade"
											required
										>
											<option selected value="">
												Selecione uma modalidade
											</option>
											<option value="Online">Online</option>
											<option value="Presencial">Presencial</option>
											<option value="Hibrido">Hibrido</option>
										</select>
									</div>
								</div>
								<div className="mb-5 flex flex-col">
									<label className="mb-2 text-sm font-medium" htmlFor="assunto">
										Assunto Principal
									</label>

									<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											type="text"
											name="assunto"
											id="assunto"
											placeholder="Assunto Principal do Evento"
											required
										/>
									</div>
								</div>
							</div>
							<div className="w-full">
								<div className="mb-5 flex flex-col">
									<label
										className="mb-2 text-sm font-medium"
										htmlFor="emailEvent"
									>
										Email do Evento
									</label>

									<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											type="text"
											name="emailEvent"
											id="emailEvent"
											placeholder="Email do Evento"
											required
										/>
									</div>
								</div>
								<div className="mb-0.5">
									<label className="mb-2 text-sm font-medium" htmlFor="evento">
										Evento
									</label>
									<div className="flex items-center gap-3 py-2.5">
										{checkboxEvento.map((name, index) => (
											<CheckInput
												key={index}
												label={name}
												name={`evento-${name}`}
												value={name}
												checked={selectedVisibilidade.includes(name)}
												onChange={() => handleCheckboxChangeVisibilidade(name)}
											/>
										))}
									</div>
								</div>
								<div className="mb-5">
									<label className="mb-2 text-sm font-medium" htmlFor="gerar">
										Gerar
									</label>
									<div className="flex items-center gap-3 py-2.5">
										{checkboxGerar.map((name, index) => (
											<CheckInput
												key={index}
												label={name}
												name={`gerar-${name}`}
												value={name}
												checked={selectedGerar.includes(name)}
												onChange={() => handleCheckboxChangeGerar(name)}
											/>
										))}
									</div>
								</div>
								<IncrementInput
									label="Corpo Editorial"
									placeholder="Adicione os integrantes do Corpo Editorial"
									name="corpo-editorial"
								/>
								<IncrementInput
									label="Apoiador"
									placeholder="Adicione os apoiadores"
									name="apoiador"
								/>
							</div>
						</div>
						<div className="flex flex-col items-center gap-5">
							<div className="mb-5 flex w-[40%] flex-col">
								<div className="mt-5 flex items-center gap-2">
									<div className="w-11/12 rounded-md border border-gray-300 bg-white px-4 py-2">
										<input
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											value="Cadastrar áreas de conhecimento do evento"
											readOnly
										/>
									</div>
									<div className="w-10 rounded-xl bg-[#EF0037]">
										<a
											href="/criar-evento/1234/criar-area"
											className="flex cursor-pointer items-center justify-center text-3xl font-semibold text-white"
										>
											+
										</a>
									</div>
								</div>
							</div>
							<div className="mb-6 flex flex-col">
								<label
									className="mb-2 text-center text-sm font-medium"
									htmlFor="file"
								>
									Anexar Logo
								</label>

								<div
									className={`flex w-full justify-center rounded-md border-0 ${
										previewURL ? 'bg-transparent py-3' : 'bg-gray-200 px-4 py-5'
									}`}
								>
									{!previewURL && ( // Renderiza o ícone de upload somente se não houver previewURL
										<label htmlFor="fileInput" className="cursor-pointer">
											<FiUpload className="mx-2 h-5 w-5 text-black" />{' '}
										</label>
									)}

									<div className="flex flex-col items-end">
										<input
											type="file"
											id="fileInput"
											name="file"
											style={{ display: 'none' }}
											onChange={(e) => handleFileChange(e)}
											required
										/>
										{file && (
											<button
												className="-mr-1 -mt-3 cursor-pointer rounded-full bg-red-500 p-0.5"
												onClick={() => {
													setFile(null);
													setPreviewURL(null);
												}}
											>
												<FaTimes className="text-[9px] text-white" />
											</button>
										)}
										{previewURL ? (
											<>
												<img
													src={previewURL}
													alt="Preview"
													className="mr-2 max-h-20 max-w-full cursor-pointer"
													onClick={() => setShowModal(true)}
												/>
												{showModal && (
													<div
														className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80 py-20"
														onClick={() => setShowModal(false)} // Fecha o modal quando o fundo escuro é clicado
													>
														<img
															src={previewURL}
															alt="Preview"
															className="max-h-full max-w-full"
															onClick={() => setShowModal(false)} // fecha o modal quando a imagem é clicada
														/>
													</div>
												)}
											</>
										) : (
											<span className="text-sm">{file ? file.name : ''}</span>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<button
								className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#4B00E0' }}
								type="submit"
							>
								Criar
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
