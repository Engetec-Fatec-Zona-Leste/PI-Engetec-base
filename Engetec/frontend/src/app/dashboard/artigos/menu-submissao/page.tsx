'use client';

import Footer from '@/components/COMPONENTES/Footer';
import MenuSubmissao from '@/components/COMPONENTES/MenuSubmissao';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';

export default function PageMenuSubmissao() {
	return (
		<div>
			<NavbarAuthenticated />
			<MenuSubmissao />;
			<Footer />
		</div>
	);
}
