import { useRouter } from 'next/navigation';

import { FaRegEdit } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

import { showToast } from '@/contexts/ToastProvider';
import { CardsDataType } from '@/mocks/ArtigosCards';

interface CardI {
	card: CardsDataType;
	prazoAberto: boolean;
}

export default function ArticleCard({ card, prazoAberto }: CardI) {
	const router = useRouter();

	const handleDownloadFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		// backend instructions
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	const handleOnClickDiv = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (card.sendedArticle) return;
		router.push(
			`/eventos/${card.ArticleToSendInfos?.refEvent}/submissoes/submeter`
		);
	};

	return (
		<div>
			<div
				key={card.id}
				className={`mb-6 mt-6 flex w-[1000px] items-center gap-10 rounded-lg p-6 shadow-lg 
					${card.status === 'Reprovado' && 'ring-2 ring-red-500'}
					${card.status === 'Aprovado' && 'ring-2 ring-green-500'}
					${card.status === 'Em andamento' && 'ring-2 ring-orange-500'}
				`}
				onClick={handleOnClickDiv}
			>
				<div className="w-full">
					<>
						<h3
							className={`mb-5 text-[23px] font-medium
								${card.status === 'Reprovado' && 'text-red-500'}
								${card.status === 'Aprovado' && 'text-green-500'}
								${card.status === 'Em andamento' && 'text-orange-500'}
								`}
						>
							{card.title}
						</h3>
						<p className="mb-4 font-bold">
							Tipo do Arquivo: <span className="font-normal">{card.type}</span>
						</p>
						<p className="mb-4 font-bold">
							Status: <span className="font-normal">{card.status}</span>
						</p>
						<p className="font-bold">
							Autores: <span className="font-normal">{card.authorsString}</span>
						</p>
						{card.schedule && (
							<>
								<div className="mt-4 flex gap-10">
									<p className="font-bold">
										Data de Envio:{' '}
										<span className="font-normal">
											{card.schedule.sendDate}
										</span>
									</p>
									{card.schedule.sendDate && (
										<p className="font-bold">
											Apresentação:{' '}
											<span className="font-normal">
												{card.schedule.sendDate}
											</span>
										</p>
									)}
									{card.rooms && (
										<p className="font-bold">
											Sala: <span className="font-normal">{card.rooms}</span>
										</p>
									)}
								</div>
							</>
						)}
					</>
				</div>

				<div>
					<div className="flex w-full flex-col items-end gap-4">
						{card.presentation && (
							<div className="mb-2 rounded-lg bg-[#00B7FF]">
								<button
									className="text-nowrap px-2 py-1 text-[14px] font-medium text-[#000000]"
									type="button"
									onClick={() =>
										router.push(
											`/dashboard/meus-arquivos/${card.id}/adicionar-palestrante`
										)
									}
								>
									Definir Apresentador
								</button>
							</div>
						)}
						<div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-1 rounded-full px-4 text-[#000000] ring-2 ring-black">
							<button
								className="h-full w-full p-1 text-[14px] font-medium"
								type="button"
								onClick={() =>
									router.push(`/dashboard/meus-arquivos/arquivos-finalizados`)
								}
							>
								Ver artigo
							</button>
							<IoEyeOutline />
						</div>

						<div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-1 rounded-full px-4 text-[#4B00E0] ring-2 ring-[#4B00E0]">
							<button
								className="h-full w-full p-1 text-[14px] font-medium"
								type="button"
								onClick={handleDownloadFile}
							>
								Baixar
							</button>
							<IoMdDownload />
						</div>

						{prazoAberto ? (
							<div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-1 rounded-full px-4 text-[#126A10] ring-2 ring-[#126A10]">
								<button
									className="h-full w-full p-1 text-[14px] font-medium"
									type="button"
									onClick={() =>
										router.push(`/dashboard/meus-arquivos/${card.id}`)
									}
								>
									Editar
								</button>
								<FaRegEdit />
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
