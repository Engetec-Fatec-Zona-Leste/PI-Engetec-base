'use client';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import EditarSessao from '@/components/EditarSessao';

export default function EditarSessaoPage() {

	return (
		<div>
			<NavbarAuthenticated />

                <EditarSessao
                />
            
			<Footer />
		</div>
	);
}
