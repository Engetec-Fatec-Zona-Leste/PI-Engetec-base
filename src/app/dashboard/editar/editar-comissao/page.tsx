'use client';

import Footer from '@/components/COMPONENTES/Footer';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import EditarComissao from '@/components/EditarComissao';

export default function EditarComissaoPage() {

	return (
		<div>
			<NavbarAuthenticated />

                <EditarComissao
                />
            
			<Footer />
		</div>
	);
}
