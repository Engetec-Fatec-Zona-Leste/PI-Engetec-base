'use client';

import Footer from '@/components/COMPONENTES/Footer';
import EventosCriados from '@/components/EventosCriados/Content';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default function Evento() {

	return (
		<div>
			<NavbarAuthenticated />
				<EventosCriados />
			<Footer />
		</div>
	);
}
