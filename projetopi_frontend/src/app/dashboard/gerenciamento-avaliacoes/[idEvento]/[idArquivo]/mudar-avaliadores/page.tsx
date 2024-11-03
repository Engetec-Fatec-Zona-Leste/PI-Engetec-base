'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';

export default function EventosParaGerenciarPage() {
	const [authenticated, setAuthenticated] = useState(true);
	const router = useRouter();

	return (
		<div className="flex h-screen flex-col justify-items-center ">
			{authenticated ? <NavbarAuthenticated /> : <Navbar />}
			<div className="flex h-full items-center justify-center">
				<h1 className="text-7xl">NOT IMPLEMENTED NAYARA SCREEN</h1>
			</div>
			<Footer />
		</div>
	);
}
