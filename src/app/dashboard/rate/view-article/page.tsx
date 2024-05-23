'use client';

import Footer from '@/components/COMPONENTES/Footer';
import ViewArticle from '@/components/Rate/ViewArticle';
import NavbarAuthenticated from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';

export default function ViewArticlePage() {
	
	return (
		<div>
			<NavbarAuthenticated />
            <ViewArticle />    
			<Footer />
		</div>
	);
}
 