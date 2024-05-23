import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar/NavbarAuthenticated';
import FormularioCadastrarInstituicao from '@/components/Forms-Instituicao/cadastrar';
import Menu from '@/components/Artigos/ArtigosMenu/Menu';

export default async function Support() {
	return (
		<div className='w-full flex flex-col justify-items-center min-h-screen'>
			<Navbar />
				<FormularioCadastrarInstituicao />
			<Footer />
		</div>
	);
}