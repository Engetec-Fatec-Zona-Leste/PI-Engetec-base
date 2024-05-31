import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';

export default async function Support() {
	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="flex h-full items-center justify-center">
				<h1>Certificados Page</h1>
			</div>
			<Footer />
		</div>
	);
}
