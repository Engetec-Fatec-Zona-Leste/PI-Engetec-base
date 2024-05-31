import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import EditarArtigo from '@/components/FormsArtigos/editar';

export default async function EditarArtigosPage() {
	return (
		<div>
			<Navbar />
			<EditarArtigo />
			<Footer />
		</div>
	);
}
