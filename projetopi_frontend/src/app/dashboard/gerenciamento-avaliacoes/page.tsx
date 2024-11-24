'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import EventsCard from '@/components/EventsCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Pagination2 from '@/components/Pagitation/Pagination2';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { cardsData } from '@/mocks/EventCards';

export default function EventosParaGerenciarPage() {
	const [authenticated, setAuthenticated] = useState(true);
	const router = useRouter();

	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />

			<div className="mt-36 flex flex-col items-center justify-items-stretch">
				<Title
					title="Meus Eventos"
					colorHex="red"
					subtitle="Todos os eventos que você organiza ou administra."
				/>

				<div className="flex w-[60vw] justify-end">
					<SearchFilter />
				</div>

				{cardsData.map((card) => (
					<EventsCard card={card} key={card.id} manageAvaliations={true} />
				))}
			</div>

			<Pagination2 />

			<Footer />
		</div>
	);
}
