'use client'

import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import { useState } from 'react';

export default async function Home() {
	const [authenticated, setAuthenticated] = useState(true);
	return (
		<div className='h-screen flex flex-col justify-items-center '>
			{authenticated 
			? (
				<NavbarAuthenticated />
			)
			: (
				<Navbar />
			)}
			<div className='h-full flex justify-center items-center'>
				<h1>Home Page</h1>
			</div>
			<Footer />
		</div>
	);
}
