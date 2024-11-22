import Link from 'next/link';

import * as S from './styles';

export default function Footer() {
	return (
		<S.ContainerFooter className="mt-10 flex max-h-max items-end bg-[#F4f4f4] p-5 pt-20">
			<div className="flex w-full flex-wrap items-end justify-between gap-12">
				<div>
					<Link href="/eventos">
						<p className="text-md text-center font-medium text-white">
							Página Inicial
						</p>
					</Link>
					<Link href="/criar-evento">
						<p className="text-md text-center font-medium text-white">
							Criar Evento
						</p>
					</Link>
					<Link href="/dashboard/meus-eventos-criados">
						<p className="text-md text-center font-medium text-white">
							Meus Eventos Criados
						</p>
					</Link>
					<Link href="/dashboard/avaliar-artigo">
						<p className="text-md text-center font-medium text-white">
							Minhas Avaliações
						</p>
					</Link>
					<Link href="/dashboard/certificados">
						<p className="text-md text-center font-medium text-white">
							Meus Certificados
						</p>
					</Link>
				</div>
				<div>
					<Link href="/dashboard/meus-arquivos">
						<p className="text-md text-center font-medium text-white">
							Minhas Submissões
						</p>
					</Link>
					<Link href="/dashboard/gerenciamento-avaliacoes">
						<p className="text-md text-center font-medium text-white">
							Gerenciamento de Avaliações
						</p>
					</Link>
					<Link href="/eventos">
						<p className="text-md text-center font-medium text-white">
							Menu para Submissão
						</p>
					</Link>
					<Link href="/eventos">
						<p className="text-md text-center font-medium text-white">
							Anais Anteriores
						</p>
					</Link>
					<Link href="/dashboard/proceedings">
						<p className="text-md text-center font-medium text-white">
							Proceedings
						</p>
					</Link>
				</div>
			</div>
		</S.ContainerFooter>
	);
}
