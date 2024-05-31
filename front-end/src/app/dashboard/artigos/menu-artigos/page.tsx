import React from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import MenuSubmissao from '@/components/COMPONENTES/MenuSubmissao';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function MenuArtigos() {
	return (
		<div>
			<Navbar />
			<MenuSubmissao />;
			<Footer />
		</div>
	);
}
