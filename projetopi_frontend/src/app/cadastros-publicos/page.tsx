'use client';

import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import Tabbar from '@/components/TabbarPublicRegisters';

export default function CadastroPublicUsers({
	params,
}: {
	params: {
		eventId: string;
	};
}) {
	return (
		<div>
			<NavbarAuthenticated />
			<Tabbar/>
			<Footer />
		</div>
	);
}
