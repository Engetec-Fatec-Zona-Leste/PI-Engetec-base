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
import NavbarAuthenticated from '@/components/NavbarAuthenticated';

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
			<NavbarAuthenticated />

			<div className="mt-28 w-full p-5">
				<div className="w-full">
					<div>
						<h1
							className="text-center text-2xl font-bold text-black"
							style={{ color: '#4B00E0' }}
						>
							Gerenciamento do Sistema
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
									className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									style={{ cursor: 'pointer' }}
								>
									<AiOutlineStar color="black" className="h-10 w-10" />
									<div className="flex flex-col gap-0.5">
										<p
											className="text-base font-semibold"
											style={{ color: '#4B00E0' }}
										>
											Gerenciamento de Administradores do site
										</p>
										<p className="text-sm font-medium">
											Adicione as informações sobre a data, horário e
											localização do evento
										</p>
									</div>
								</div>
								<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
									<FiUsers className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Gerenciamento de usuários
										</p>
										<p className="text-sm font-medium">
											Cadastre uma ou mais atividades (caso não possua não
											preencha)
										</p>
									</div>
								</div>

								<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
									<MdDateRange className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-base font-semibold text-[#4B00E0]">
											Gerenciamento de Instituições
										</p>
										<p className="text-sm font-medium">
											Cadastre ou envie o link para os membros da equipe e
											administre os já cadastrados
										</p>
									</div>
								</div>

								<h1
									className="mt-12 text-left text-2xl font-bold text-black"
									style={{ color: '#4B00E0' }}
								>
									Gerenciamento das áreas de conhecimento
								</h1>

								<div className="grid grid-cols-2 gap-8">
									<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<BiBrain className="h-12 w-12" color="black" />
										<div className="flex flex-col gap-0.5">
											<p className="text-base font-semibold text-[#4B00E0]">
												Grandes Áreas de Conhecimento
											</p>
											<p className="text-sm font-medium">
												Criar uma nova versão do evento
											</p>
										</div>
									</div>

									<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<BiBrain className="h-12 w-12" color="black" />
										<div className="flex flex-col gap-0.5">
											<p className="text-base font-semibold text-[#4B00E0]">
												Áreas de Conhecimento
											</p>
											<p className="text-sm font-medium">
												Ver todas as edições desse evento
											</p>
										</div>
									</div>

									<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<BiBrain className="h-12 w-12" color="black" />
										<div className="flex flex-col gap-0.5">
											<p className="text-base font-semibold text-[#4B00E0]">
												Sub-Áreas de Conhecimento
											</p>
											<p className="text-sm font-medium">
												Gere os proceedings deste evento (Opção habilitada)
											</p>
										</div>
									</div>

									<div className="flex gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl">
										<BiBrain className="h-12 w-12" color="black" />
										<div className="flex flex-col gap-0.5">
											<p className="text-base font-semibold text-[#4B00E0]">
												Especialidade de Conhecimento
											</p>
											<p className="text-sm font-medium">
												Baixe e imprima os QrCodes para que os
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-12 flex items-center justify-center gap-5">
								<button
									className="w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
									style={{ backgroundColor: '#501EB4' }}
									type="submit"
								>
									Voltar
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
