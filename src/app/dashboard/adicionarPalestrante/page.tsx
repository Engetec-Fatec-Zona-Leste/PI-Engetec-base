'use client';

import Navbar from '@/components/COMPONENTES/Navbar';
import Footer from '@/components/COMPONENTES/Footer';
import AdicionarPalestrante from '@/components/EditarPalestrante';


export default function AdicionarPalestrantePage() {
	
	return (
		<div>
			<Navbar />
                <AdicionarPalestrante />
			<Footer />
		</div>
	);
}
 