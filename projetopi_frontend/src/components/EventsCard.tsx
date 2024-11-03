import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FaCheck, FaRegEye } from 'react-icons/fa';

import { EventType } from '@/mocks/EventCards';

interface EventCardsI {
	card: EventType;
	manageAvaliations: boolean; // informação que virá do usuario logado
}
export default function EventsCard({ card, manageAvaliations }: EventCardsI) {
	const router = useRouter();
	return (
		<div
			key={card.id}
			className="my-6 flex h-max w-[60vw] flex-col items-center justify-self-center rounded-lg p-6 ring-2 ring-[#FA023E]"
		>
			<div className="flex w-full justify-between gap-10">
				<div className="relative flex h-[20vw] w-[20vw]">
					<Image
						src={card.imageUrl}
						alt={`Imagem do evento ${card.title}`}
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className="flex flex-col">
					<h3 className="mb-2 text-[21px] font-bold text-[#FA023E]">
						{card.title}
					</h3>
					<div className="flex gap-8">
						<div>
							<p className="mb-4 font-bold">
								Data de Inicio:{' '}
								<span className="font-normal">{card.startDate}</span>
							</p>
							<p className="font-bold">Período e horário:</p>
							<p className="font-bold">
								Manhã:{' '}
								<span className="font-normal">{card.schedule.morning}</span>
							</p>
							<p className="font-bold">
								Tarde:{' '}
								<span className="font-normal">{card.schedule.afternoon}</span>
							</p>
						</div>
						<div>
							<p className="mb-4 font-bold">
								Data de Finalização:{' '}
								<span className="font-normal">{card.endDate}</span>
							</p>
							<p className="font-bold">
								Carga horária:{' '}
								<span className="font-normal">{card.duration}</span>
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<button
						className="flex items-center justify-between gap-3 rounded-lg p-2 py-1.5 text-[12px] font-medium text-[#000000] ring-2 ring-black"
						type="button"
						onClick={() =>
							router.push(`/dashboard/meus-eventos-criados/${card.id}/menu`)
						}
					>
						Ver evento
						<FaRegEye className="w-5" />
					</button>
					{manageAvaliations && (
						<div className="flex items-center justify-between gap-3 rounded-lg bg-[#4B00E0] p-2 py-1 text-[12px] font-medium ring-2 ring-[#4B00E0]">
							<button className="ml-2 text-[12px] font-medium text-white">
								Ver avaliações{' '}
							</button>
							<FaCheck className="w-5 text-white" width={100} />
						</div>
					)}
				</div>
			</div>

			<div className="mt-6 flex justify-items-stretch">
				<h3 className="justify-self-start font-bold">Descrição: </h3>
				<p className="-ml-20 mt-8 justify-self-start">{card.description}</p>
			</div>
		</div>
	);
}
