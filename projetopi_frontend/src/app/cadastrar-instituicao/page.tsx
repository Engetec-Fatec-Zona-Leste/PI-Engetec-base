'use client';

import { registerInstituicao } from '@/_actions/registerInstituicao';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';

export default function RegisterInstitutionPage() {
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		// Chame a função do servidor e exiba o toast com base na resposta
		const result = await registerInstituicao(formData);

		if (result.success) {
			showToast('success', result.message);
		} else {
			showToast('error', result.message);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form
					className="card rounded-lg px-36 py-20 shadow-lg"
					onSubmit={handleSubmit}
				>
					<Title
						title={`Cadastrar Instituição no site`}
						colorHex="#4B00E0"
						subtitle="Irá ter que passar por uma aprovação para ter a instituição cadastrada"
					/>

					<div className="mb-4 flex flex-col items-center gap-5">
						<NormalInput
							label="Nome:"
							type="text"
							id="name"
							name="nome"
							customWidth="100%"
						/>
						<NormalInput
							label="CNPJ:"
							type="text"
							id="cnpj"
							name="cnpj"
							customWidth="100%"
						/>
						<DefaultButton
							label="Cadastrar"
							backgroundColorHex="#4B00E0"
							type="submit"
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
