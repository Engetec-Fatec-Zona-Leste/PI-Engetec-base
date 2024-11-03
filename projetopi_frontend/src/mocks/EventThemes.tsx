import React from 'react';

import { StaticImageData } from 'next/image';

import { Image } from 'next-auth/providers/42-school';
import { FaCode } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';
import { LuMusic } from 'react-icons/lu';

import art from '@/assets/art.png';
import food from '@/assets/food.png';
import music from '@/assets/music.png';
import tecnologia from '@/assets/tecnologia.png';

type EventTheme = {
	id: number;
	title: string;
	description: string;
	icon: React.ReactElement;
	image: StaticImageData;
};

export const eventThemeMocks: EventTheme[] = [
	{
		id: 0,
		title: 'Tecnologia',
		description:
			'Os eventos de tecnologia permitirão que você aprimore suas habilidades, explore novas tecnologias e mergulhe em projetos emocionantes. De codificação e desenvolvimento de aplicativos a projetos de hardware e design.',
		icon: <FaCode />,
		image: tecnologia,
	},
	{
		id: 1,
		title: 'Música',
		description:
			'Prepare-se para mergulhar em um mundo de melodias envolventes, Participe de oficinas de música com profissionais experientes, onde poderá aprimorar suas habilidades, aprender novas técnicas e descobrir os segredos por trás das criações musicais.',
		icon: <LuMusic />,
		image: music,
	},
	{
		id: 2,
		title: 'Culinária',
		description:
			'Você poderá aprender técnicas, dicas e truques para aprimorar suas habilidades na cozinha e experimentar pratos únicos e autênticos. Deixe-se envolver por uma atmosfera de prazer, descoberta e pratos irresistíveis.',
		icon: <GiKnifeFork />,
		image: food,
	},
	{
		id: 3,
		title: 'Artes',
		description:
			'Artistas de diferentes estilos e técnicas se reunirão para compartilhar seu amor pela pintura e inspirar uns aos outros. Estes eventos são um convite para explorar seu lado artístico, expressar-se livremente e mergulhar em um universo repleto de pinceladas de imaginação.',
		icon: <IoIosColorPalette />,
		image: art,
	},
];
