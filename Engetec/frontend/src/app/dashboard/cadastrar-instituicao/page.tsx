'use client';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Title from '@/components/COMPONENTES/Title';
import axios from 'axios';
import { useState } from 'react';

export default function RegisterInstitutionPage() {
	const [info, setInfo] = useState({
		name: '',
		cnpj: ''
	});



	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3001/instituicao', {
				nome: info.name,
				cnpj: info.cnpj
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form className="card rounded-lg px-36 py-20 shadow-lg" onSubmit={handleSubmit}>
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
							value={info.name}
							onChange={handleChange}
						/>
						<NormalInput
							label="CNPJ:"
							type="text"
							id="cnpj"
							name="cnpj"
							customWidth="100%"
							value={info.cnpj}
							onChange={handleChange}
						/>
						<DefaultButton label="Cadastrar" backgroundColorHex="#4B00E0" type="submit" />
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
