import { StaticImageData } from 'next/image';

import amorPerfeito from '@/assets/Amor Perfeito.png';
import Caroline from '@/assets/Caroline.png';
import CultFest from '@/assets/CultureFest.png';

export type EventType = {
	id: number;
	title: string;
	description: string;
	imageUrl: StaticImageData;
	startDate: string;
	endDate: string;
	duration: string;
	schedule: {
		morning: string;
		afternoon: string;
	};

	presentation?: boolean;
	sendedArticle?: boolean;
	ArticleToSendInfos?: {
		refEvent: number;
		dateToSend?: string;
	};
};

export const cardsData: EventType[] = [
	{
		id: 1,
		title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		description:
			'Prepare-se para uma experiência musical única e emocionante! Estamos entusiasmados em anunciar o incrível Festival Melodias Vibrantes, um evento que celebrará a diversidade musical e encantará os amantes de todos os gêneros. Além das performances épicas, o CultureFest também contará com uma série de atividades emocionantes para enriquecer a experiência dos participantes. Teremos oficinas interativas com músicos experientes, onde você poderá aprender técnicas, explorar seu próprio talento musical e descobrir os segredos dos bastidores da indústria.',
		imageUrl: amorPerfeito,
		startDate: '10/07/2023',
		endDate: '10/12/2023',
		schedule: {
			morning: '7 as 12h',
			afternoon: '13 as 18h',
		},
		duration: '250h',
	},
	{
		id: 2,
		title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		description:
			'O amor Perfeito  tem como objetivo proporcionar um momento de reflexão, crescimento pessoal e inspiração, onde cada participante será convidado a explorar e fortalecer sua relação consigo mesmo. Estaremos juntos nessa jornada de autodescoberta, com atividades enriquecedoras, palestras inspiradoras e momentos de conexão com outras pessoas que também valorizam o amor-próprio.',
		imageUrl: Caroline,
		startDate: '15/08/2023',
		endDate: '20/08/2023',
		schedule: {
			morning: '8 as 13h',
			afternoon: '14 as 17h',
		},
		duration: '100h',
	},

	{
		id: 3,
		title: 'Tech Talks: Descobrindo as Fronteiras da Tecnologia',
		description:
			'O amor Perfeito  tem como objetivo proporcionar um momento de reflexão, crescimento pessoal e inspiração, onde cada participante será convidado a explorar e fortalecer sua relação consigo mesmo. Estaremos juntos nessa jornada de autodescoberta, com atividades enriquecedoras, palestras inspiradoras e momentos de conexão com outras pessoas que também valorizam o amor-próprio.',
		imageUrl: CultFest,
		startDate: '15/08/2023',
		endDate: '20/08/2023',
		schedule: {
			morning: '8 as 13h',
			afternoon: '14 as 17h',
		},
		duration: '100h',
	},
];
