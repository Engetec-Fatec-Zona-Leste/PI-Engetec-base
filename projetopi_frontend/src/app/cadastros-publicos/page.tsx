'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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
			<Navbar />
			<Tabbar eventId={params.eventId} />
			<Footer />
		</div>
	);
}
