'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { AiOutlineStar } from 'react-icons/ai';
import { BiBrain } from 'react-icons/bi';
import { FaBuilding, FaCheck } from 'react-icons/fa';
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
							style={{ color: '#4B00E0' }}
						>
							Gerenciamento do Sistema
						</h1>
						<p className="text-md text-center text-black">
							Veja o andamento do evento, gerencie usuários, áreas de
							conhecimento e instituições no evento
						</p>
					</div>
					<div className="mt-12 flex w-full flex-col items-center justify-center">
						<div className="w-1/2">
							<div className="flex flex-col gap-6">
								<Link
									className="flex cursor-pointer gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									href="/dashboard/gerenciamento-site/cadastrar-admin"
								>
									<FiUsers className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p
											className="text-md font-semibold"
											style={{ color: '#4B00E0' }}
										>
											Gerenciamento de Administradores no evento
										</p>
										<p className="text-md font-medium">
											Aprove ou recuse Administradores pendentes de aprovação
										</p>
									</div>
								</Link>

								<Link
									className="flex cursor-pointer gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									href="									/dashboard/gerenciamento-site/cadastrar-editorchefe"
								>
									<FiUsers className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-md font-semibold text-[#4B00E0]">
											Gerenciamento de Editores Chefes no evento
										</p>
										<p className="text-md font-medium">
											Aprove ou recuse Editores Chefes pendentes de aprovação
										</p>
									</div>
								</Link>
								<Link
									className="flex cursor-pointer gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									href="/dashboard/gerenciamento-sitecadastrar-avaliador"
								>
									<FiUsers className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-md font-semibold text-[#4B00E0]">
											Gerenciamento de Avaliadores no evento
										</p>
										<p className="text-md font-medium">
											Aprove ou recuse Avaliadores pendentes de aprovação
										</p>
									</div>
								</Link>

								<Link
									className="flex cursor-pointer gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									href="/dashboard/gerenciamento-site/cadastrar-instituicao"
								>
									<FaBuilding className="h-10 w-10" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-md font-semibold text-[#4B00E0]">
											Gerenciamento de Instituições
										</p>
										<p className="text-md font-medium">
											Aprove ou recuse Intituições pendentes de aprovação
										</p>
									</div>
								</Link>

								<Link
									className="flex cursor-pointer gap-4 rounded-md border-2 border-l-4 border-[#e3e3e3] border-l-[#4B00E0] bg-[#F5F5F5] p-5 shadow-xl"
									href="/dashboard/gerenciamento-site/cadastrar-area"
								>
									<BiBrain className="h-12 w-12" color="black" />
									<div className="flex flex-col gap-0.5">
										<p className="text-md font-semibold text-[#4B00E0]">
											Gerenciamento das áreas de conhecimento
										</p>
										<p className="text-md font-medium">Criar novas áreas</p>
									</div>
								</Link>
							</div>
							<div className="mt-12 flex items-center justify-center gap-5">
								<button
									className="text-md w-1/5 rounded-xl border-none p-2 text-center font-medium text-white"
									style={{ backgroundColor: '#501EB4' }}
									onClick={() => router.back()}
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
