'use client';

import Footer from '@/components/COMPONENTES/Footer';
import Menu from '@/components/COMPONENTES/Menu';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default function Evento() {

	return (
		<div>
			<NavbarAuthenticated />
				<Menu />;
			<Footer />
		</div>
	);
}
