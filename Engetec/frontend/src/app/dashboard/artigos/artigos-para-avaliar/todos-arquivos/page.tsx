import React from 'react';

import TodosOsArtigosParaAvaliar from '@/components/Artigos/TodosArtigosParaAvaliar';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function ArtigosAvaliarTodos() {
	return (
		<div>
			<Navbar />
			<TodosOsArtigosParaAvaliar />
			<Footer />
		</div>
	);
}
