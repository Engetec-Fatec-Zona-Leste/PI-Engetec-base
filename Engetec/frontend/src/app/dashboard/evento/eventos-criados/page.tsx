'use client';

import EventsCard from '@/components/COMPONENTES/EventsCard';
import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import Pagination2 from '@/components/COMPONENTES/Pagination2';
import SearchFilter from '@/components/COMPONENTES/SearchFilter';
import Title from '@/components/COMPONENTES/Title';

export default function Evento() {
	return (
		<div>
			<NavbarAuthenticated />

			<div className="mt-36 flex h-[1280px] flex-col items-center justify-items-stretch">
				<Title
					title="Meus Eventos"
					colorHex="red"
					subtitle="Todos os eventos que você organiza ou administra."
				/>

				<div className="ml-[780px] flex flex-col gap-4">
					<SearchFilter />
				</div>

				<EventsCard />
			</div>

			<Pagination2 />

			<Footer />
		</div>
	);
}
