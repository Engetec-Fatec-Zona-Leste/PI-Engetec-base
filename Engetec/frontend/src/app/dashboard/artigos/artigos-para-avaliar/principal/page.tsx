import React from 'react';

import ArtigosParaAvaliarPrincipais from '@/components/Artigos/ArtigosParaAvaliarPrincipal';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function ArtigosAvaliarPrincipal() {
	return (
		<div>
			<Navbar />
			<ArtigosParaAvaliarPrincipais />
			<Footer />
		</div>
	);
}
