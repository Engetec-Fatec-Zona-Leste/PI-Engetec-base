'use client';

import { useState } from 'react';

import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import NavbarAuthenticated from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function Home() {
	const [authenticated, setAuthenticated] = useState(true);
	return (
		<div className="flex h-screen flex-col justify-items-center ">
			{authenticated ? <NavbarAuthenticated /> : <Navbar />}
			<div className="flex h-full items-center justify-center">
				<h1>Home Page</h1>
			</div>
			<Footer />
		</div>
	);
}
