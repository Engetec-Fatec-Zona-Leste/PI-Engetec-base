'use client';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';
import EditarSessao from '@/components/EditarSessao';

export default function EditarSessaoPage() {
	return (
		<div>
			<NavbarAuthenticated />

			<EditarSessao />

			<Footer />
		</div>
	);
}
