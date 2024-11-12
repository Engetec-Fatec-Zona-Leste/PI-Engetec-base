import { useRouter } from 'next/navigation';

import { FaRegEdit } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { showToast } from '@/contexts/ToastProvider';
import { CardsDataType } from '@/mocks/ArtigosCards';

interface CardI {
	card: CardsDataType;
}

// ver artigo - src/app/dashboard/meus-arquivos/arquivos-finalizados
// editar artigo - src/app/dashboard/meus-arquivos/[idArquivo]
// add palestrante/apresentador - src/app/dashboard/meus-arquivos/[idArquivo]/adicionar-palestrante

export default function ArticleCard({ card }: CardI) {
	const router = useRouter();
	// router.push(`${params.eventName}`);

	const handleDownloadFile = (e: React.MouseEvent<HTMLButtonElement>) => {
		// backend instructions
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};
	const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
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
				className={`mb-6 mt-6 flex w-[1000px] items-center gap-10 rounded-lg p-6 shadow-lg ${
					card.presentation ? 'ring-2 ring-purple-700' : 'ring-2 ring-[#FA023E]'
				}`}
				onClick={handleOnClickDiv}
			>
				<div className="w-full">
					{card.sendedArticle ? (
						<>
							<h3
								className={`${
									card.presentation ? 'text-[#4B00E0]' : 'text-[#FA023E]'
								} mb-5 text-[23px] font-medium`}
							>
								{card.title}
							</h3>
							<p className="mb-4 font-bold">
								Tipo do Arquivo:{' '}
								<span className="font-normal">{card.type}</span>
							</p>
							<p className="mb-4 font-bold">
								Status: <span className="font-normal">{card.status}</span>
							</p>
							<p className="font-bold">
								Autores:{' '}
								<span className="font-normal">{card.authorsString}</span>
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
					) : (
						<>
							<h3
								className={`${
									card.presentation ? 'text-[#4B00E0]' : 'text-[#FA023E]'
								} mb-5 text-[23px] font-medium`}
							>
								{card.type}
							</h3>
							<p className="font-bold">
								Prazo de submissão:{' '}
								<span className="font-normal">
									{card.ArticleToSendInfos?.dateToSend}
								</span>
							</p>
						</>
					)}
				</div>

				{card.sendedArticle && (
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
										Adicionar Palestrante
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

							<div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-1 rounded-full px-4 text-[#BF0000] ring-2 ring-[#BF0000]">
								<button
									className="h-full w-full p-1 text-[14px] font-medium"
									type="button"
									onClick={handleDeleteFile}
								>
									Excluir
								</button>
								<RiDeleteBin6Line />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
