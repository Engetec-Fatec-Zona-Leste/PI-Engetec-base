import Link from 'next/link';

import * as S from './styles';

export default function Footer() {
	return (
		<S.ContainerFooter className="flex h-[25vh] items-end bg-[#F4f4f4] pb-10">
			<div className="flex w-full flex-wrap items-start justify-evenly ">
				<Link href="/eventos">
					<p className="text-md text-center font-bold text-white">
						Página Inicial
					</p>
				</Link>
				{/* <Link href="/">
					<p className="text-center text-md font-bold text-white">
						Eventos Inscritos
					</p>
				</Link> */}
				<Link href="/criar-evento">
					<p className="text-md text-center font-bold text-white">
						Criar Evento
					</p>
				</Link>
				<Link href="/dashboard/meus-eventos-criados">
					<p className="text-md text-center font-bold text-white">
						Meus Eventos Criados
					</p>
				</Link>
				<Link href="/dashboard/avaliar-artigo">
					<p className="text-md text-center font-bold text-white">
						Minhas Avaliações
					</p>
				</Link>
				<Link href="/dashboard/meus-arquivos">
					<p className="text-md text-center font-bold text-white">
						Minhas Submissões
					</p>
				</Link>
				<Link href="/dashboard/gerenciamento-avaliacoes">
					<p className="text-md text-center font-bold text-white">
						Gerenciamento de Avaliações
					</p>
				</Link>
				<Link href="/eventos">
					<p className="text-md text-center font-bold text-white">
						Menu para Submissão
					</p>
				</Link>
				<Link href="/eventos">
					<p className="text-md text-center font-bold text-white">
						Anais Anteriores
					</p>
				</Link>
			</div>
		</S.ContainerFooter>
	);
}
