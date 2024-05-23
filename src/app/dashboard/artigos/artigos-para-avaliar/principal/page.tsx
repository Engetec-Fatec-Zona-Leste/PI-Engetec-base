import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import ArtigosParaAvaliarPrincipais from '@/components/Artigos/ArtigosParaAvaliarPrincipal';
import React from 'react';

export default async function ArtigosAvaliarPrincipal() {
	return (
		<div>
			<Navbar />
			<ArtigosParaAvaliarPrincipais />
			<Footer />
		</div>
	);
}