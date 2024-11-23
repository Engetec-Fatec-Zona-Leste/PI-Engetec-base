'use client';

import { useRouter } from 'next/navigation';

import { AiOutlineStar } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GrNotes } from 'react-icons/gr';
import { ImFilesEmpty } from 'react-icons/im';
import { IoQrCode } from 'react-icons/io5';
import { LuFileSearch } from 'react-icons/lu';
import { LuEye } from 'react-icons/lu';
import { MdDateRange } from 'react-icons/md';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function EventoMenu({
	params,
}: {
	params: {
		eventId: string;
	};
}) {
	const router = useRouter();
	return (
		<div>
			<Navbar />

			<div className="mt-28 w-full p-5">
				<div className="w-full">
					<div>
						<h1
							className="text-center text-2xl font-bold text-black"
							style={{ color: '#ef0037' }}
						>
							Nome do Evento
						</h1>
						<p className="text-center text-sm text-black">
							Andamento da criação do Evento, acesse a área que deseja modificar
							ou incluir
						</p>
					</div>
					<div className="mt-12 flex w-full flex-col items-center justify-center">
						<div className="w-1/2">
							<div className="flex flex-col gap-6">
								<div
									className="flex cursor-pointer items-center gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#0391C9] bg-[#F5F5F5] p-3 shadow-xl"
									onClick={() => router.push(`/eventos/${params.eventId}`)}
								>
									<LuEye className="h-10 w-10" color="#0391C9" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-normal">
											Visualizar evento como participante
										</p>
									</div>
								</div>
								<div
									className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									style={{ cursor: 'pointer' }}
									onClick={() => router.push('/dashboard/editar/editar-evento')}
								>
									<AiOutlineStar color="#4B00E0" className="h-10 w-10" />
									<div className="flex flex-col gap-0.5">
										<p
											className="text-base font-semibold"
											style={{ color: '#4B00E0' }}
										>
											Editar Evento
										</p>
										<p className="text-sm font-medium">
											Edite as informações do evento cadastrado
										</p>
									</div>
								</div>
								<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
									<MdDateRange className="h-10 w-10" color="#4B00E0" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Data e Local
										</p>
										<p className="text-sm font-medium">
											Adicione as informações sobre a data, horário e
											localização do evento
										</p>
									</div>
								</div>
								<div className="flex items-stretch gap-5">
									<div className="flex h-52 w-1/2 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<div className="flex gap-4">
											<div>
												<ImFilesEmpty
													className="block h-8 w-8"
													color="#4B00E0"
												/>
											</div>
											<div className="flex flex-col flex-wrap gap-0.5">
												<p className="text-base font-semibold text-[#4B00E0]">
													Arquivos
												</p>
												<p className="mt-5 text-sm font-medium">
													Insira as informações sobre quais arquivos terão que
													ser submetidos durante evento (caso não possua não
													preencha)
												</p>
											</div>
										</div>
									</div>
									<div className="flex h-52 w-1/2 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<div className="flex gap-4">
											<div>
												<LuFileSearch
													className="block h-8 w-8"
													color="#4B00E0"
												/>
											</div>
											<div className="flex flex-wrap gap-0.5">
												<p className="text-base font-semibold text-[#4B00E0]">
													Visualizar Arquivos
												</p>
												<p className="mt-5 flex h-full text-sm font-medium">
													Visualize os arquivos enviados para este evento
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="flex gap-4 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5]  p-5 shadow-xl">
									<FaCheck className="h-8 w-8" color="#4B00E0" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Gerenciamento de Avaliações
										</p>
										<p className="text-sm font-medium">
											Gerencie todas as avaliações do evento
										</p>
									</div>
								</div>
								<div className="flex gap-4 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5]  p-5 shadow-xl">
									<FiUsers className="h-8 w-8" color="#4B00E0" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Usuários
										</p>
										<p className="text-sm font-medium">
											Cadastre ou envie o link para os membros da equipe e
											administre os já cadastrados
										</p>
									</div>
								</div>
								<div className="flex items-stretch gap-5">
									<div
										className="#F5F5F5 flex h-52 w-1/2 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
										style={{ height: '150px' }}
									>
										<div className="flex gap-4">
											<div>
												<GrNotes className="block h-8 w-8" color="#4B00E0" />
											</div>
											<div className="flex flex-col flex-wrap gap-0.5">
												<p className="text-base font-semibold text-[#4B00E0]">
													Nova edição do evento
												</p>
												<p className="mt-5 text-sm font-medium">
													Crir uma nova versão do evento
												</p>
											</div>
										</div>
									</div>
									<div
										className="#F5F5F5 flex h-52 w-1/2 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
										style={{ height: '150px' }}
									>
										<div className="flex gap-4">
											<div>
												<IoQrCode className="block h-8 w-8" color="#4B00E0" />
											</div>
											<div className="flex flex-col flex-wrap gap-0.5">
												<p className="text-base font-semibold text-[#4B00E0]">
													Ver edições desse evento
												</p>
												<p className="mt-5 text-sm font-medium">
													Ver todas as edições desse evento.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="flex gap-4 rounded-xl border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5]  p-8 shadow-xl">
									<BiBrain className="h-8 w-8" color="#4B00E0" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Gerar Proceedings
										</p>
										<p className="text-sm font-medium">
											Gere os proceedings deste evento (Opção habilitada apenas
											ao fim de todas as sessões previstas deste evento)
										</p>
									</div>
								</div>
							</div>
							<div className="mt-12 flex items-center justify-center gap-5">
								<button
									className="w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
									type="submit"
									style={{ backgroundColor: '#B9012D' }}
								>
									Excluir Evento
								</button>
								<button
									className="w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
									style={{ backgroundColor: '#501EB4' }}
									type="submit"
								>
									Postar Evento
								</button>
							</div>
						</div>
					</div>{' '}
					.
				</div>
			</div>

			<Footer />
		</div>
	);
}
