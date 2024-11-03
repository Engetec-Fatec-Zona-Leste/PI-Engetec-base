'use client';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import Title from '@/components/COMPONENTES/Title';
import axios from 'axios';
import { useState } from 'react';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = (e: { target: { value: any; }; }) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e: { target: { value: any; }; }) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            'http://localhost:3031/auth/login',
            {
                email,
                senha: password
            }
        );

        const { token } = response.data;
        console.log('Token:', token);

        // Additional logic using token can be added here

		console.log(result.response.data);
	} catch (error) {
		console.log(error.response.data);
	}
};

	return (
		<div>
			<Navbar />
			<div className="container">
				<form className="card rounded-lg px-36 py-20 shadow-lg" onSubmit={handleSubmit}>
					<Title
						title="Login"
						colorHex="#4B00E0"
						subtitle="Entre com seu email e senha para acessar o painel de controle"
					/>

					<div className="mb-4 flex flex-col items-center gap-5">
						<NormalInput
							label="E-mail:"
							type="email"
							id="email"
							name="email"
							customWidth="100%"
							value={email}
							onChange={handleChangeEmail}
						/>
						<NormalInput
							label="Senha:"
							type="password"
							id="password"
							name="password"
							customWidth="100%"
							value={password}
							onChange={handleChangePassword}
						/>

						<DefaultButton label="Entrar" backgroundColorHex="#4B00E0" type="submit" />
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}

