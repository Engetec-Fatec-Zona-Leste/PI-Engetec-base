'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import 'react-tagsinput/react-tagsinput.css';

import CheckInput from '@/components/CheckInput';
import Footer from '@/components/Footer';
import ImgInput from '@/components/ImgInput';
import IncrementInput from '@/components/IncrementInput';
import Navbar from '@/components/Navbar';
import { showToast } from '@/contexts/ToastProvider';
import { checkboxEvento, checkboxGerar } from '@/mocks/checkboxes';
import slugify from 'slugify';
import baseURL from '@/_actions/configUrl';
import Cookies from 'js-cookie';



export default function CriarEventoPage({params}: {
	params: { idEvento: string }
}) {
	// const pathname = usePathname();
	// const searchParams = useSearchParams();
	//Do something in response to a route change
	// useEffect(() => {
	// 	// Do something here...
	// }, [pathname, searchParams]);

	const [selectedVisibilidade, setSelectedVisibilidade] = useState<string[]>(
		[]
	);

	const handleCheckboxChangeVisibilidade = (idP: string) => {
		setSelectedVisibilidade((prevSelected) =>
			prevSelected.includes(idP)
				? prevSelected.filter((id) => id !== idP)
				: [...prevSelected, idP]
		);
	};
	const [selectedGerar, setSelectedGerar] = useState<string[]>([]);
	const handleCheckboxChangeGerar = (idP: string) => {
		setSelectedGerar((prevSelected) =>
			prevSelected.includes(idP)
				? prevSelected.filter((id) => id !== idP)
				: [...prevSelected, idP]
		);
	};

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
		const formData   = new FormData(e.currentTarget);
		const nomeEvento = formData.get('eventName') as string;
		const modalidade = formData.get('modalidade') as string;


		if (!nomeEvento) {
			return showToast('error', 'Por favor, insira um nome válido para o evento.');
		}
	
		const endpoint 		  = slugify(nomeEvento);
		const logo 	   		  = formData.get('logo') as File | null;
		const file 	   		  = document.querySelector('input[type="file"]')
		const corpoEditorial  = [...document.querySelectorAll('input[name^="corpo-editorial"]')].map(input => input.value);
		const apoiadores  	  = [...document.querySelectorAll('input[name^="apoiador"]')].map(input => input.value);

		if (!logo) {
			return showToast('error', 'Por favor, insira um logo para o evento.');
		}


	
		const requestBody = new FormData();

		requestBody.append("nome", 			    nomeEvento);
		requestBody.append("descricao", 		formData.get('descricao'));
		requestBody.append("assuntoPrincipal",  formData.get('assunto'));
		requestBody.append("emailEvento", 		formData.get('emailEvent'));
		requestBody.append("publico", 			formData.get('public') == 'Público' ? true : false);
		requestBody.append("proceedings", 		formData.get('gerar-Proceedings') ? true : false);
		requestBody.append("certificados", 		formData.get('gerar-Certificados') ? true : false);
		requestBody.append("formato", 			formData.get('modalidade'));
		requestBody.append("logo", 				file.files[0], "[PROXY]");
		requestBody.append("apoiadores", 		apoiadores);
		requestBody.append("corpoEditorial", 	corpoEditorial);
		
		try {
			const token =
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImNhcmdvIjpbIkFkbWluIl0sImlhdCI6MTczMjgxMjg1MCwiZXhwIjoxNzMyODMwODUwfQ.8fZBTFOTQbtt6FaQwl8SNVT-Wpd_J8jtI6OmCNee3DM';
	
			const response = await baseURL.post(`/evento/${endpoint}`, requestBody, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			});
	
			if (response.status === 200 && response.data.eventId) {
				const eventId = response.data.eventId;
	
				// Exibe a notificação de sucesso
				showToast('info', 'Evento criado com sucesso!');
	
				// Define a URL de redirecionamento com base na modalidade capturada
				let modalidadePath = 'arquivos'; // Rota padrão
				switch (modalidade) {
					case 'Presencial':
						modalidadePath = 'Presencial';
						break;
					case 'Hibrido':
						modalidadePath = 'Hibrido';
						break;
					case 'Remoto':
					case 'Online': // Suporte para "Online" ou "Remoto"
						modalidadePath = 'Online';
						break;
					default:
						modalidadePath = 'arquivos';
						break;
				}
	
				// Redireciona para a página correspondente
				router.push(`/criar-evento/${eventId}/data?evento=${nomeEvento}&modalidade=${modalidadePath}`);

			} else {
				showToast('error', 'Erro inesperado ao criar o evento.');
			}
		} catch (error: any) {
			if (error.response) {
				console.error('Erro ao cadastrar evento:', error.response.data);
				const errorMessage =
					error.response.data.message || 'Erro ao criar evento.';
				showToast('error', `Erro ao criar evento: ${errorMessage}`);
			} else {
				console.error('Erro na comunicação com a API:', error);
				showToast('error', 'Erro na comunicação com a API.');
			}
		}
	};
	
	
	  

	return (
		<div>
			<Navbar />
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
												name="public"
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
							<input
								type="file"
								id="logo"
								name="logo"
								accept=".jpg,.jpeg,.png,.gif,.bmp,.webp,.tiff,.svg,.heic,.avif"
							/>
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
