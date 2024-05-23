import Footer from '@/components/COMPONENTES/Footer';
import LoginForm from '@/components/Forms-Login';
import Navbar from '@/components/COMPONENTES/Navbar';

export default async function LoginPage() {
	return (

			<div className="flex h-screen flex-col justify-items-center "> 
				<Navbar />
				<div className="flex h-full items-center justify-center">
					<LoginForm />
				</div>
				<Footer />
			</div> 

	);
}
