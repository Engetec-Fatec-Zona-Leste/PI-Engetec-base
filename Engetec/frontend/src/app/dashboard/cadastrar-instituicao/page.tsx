'use client';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Title from '@/components/COMPONENTES/Title';

export default function RegisterInstitutionPage() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<form className="card rounded-lg px-36 py-20 shadow-lg">
					<Title
						title="Cadastrar Instituição"
						colorHex="#4B00E0"
						subtitle="Irá ter que passar por uma aprovação para ter a instituição cadastrada"
					/>

					<div className="mb-4 flex flex-col items-center gap-5">
						<NormalInput
							label="Nome:"
							type="text"
							id="name"
							name="name"
							customWidth="100%"
						/>
						<NormalInput
							label="CNPJ:"
							type="text"
							id="cpf"
							name="cpf"
							customWidth="100%"
						/>
						<DefaultButton label="Cadastrar" backgroundColorHex="#4B00E0" />
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
