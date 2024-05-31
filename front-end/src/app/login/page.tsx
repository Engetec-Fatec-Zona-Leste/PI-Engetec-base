'use client';

import { useState } from 'react';

import { BsStar } from 'react-icons/bs';

import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import OutlineButton from '@/components/COMPONENTES/OutlineButton';
import { BiHeart } from 'react-icons/bi';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {};

	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<form
						className="form flex flex-col items-center bg-white px-5 shadow-md"
						onSubmit={handleSubmit}
					>
						<h1
							className="text-center text-2xl font-bold text-black"
							style={{ color: '#5321BF' }}
						>
							Login
						</h1>
						<NormalInput
							id="email"
							label="E-mail"
							placeholder="E-mail de Usuário"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<NormalInput
							id="password"
							label="Senha"
							type="password"
							placeholder="Senha de Usuário"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="mb-6">
							<p className="text-center text-xs font-normal text-slate-400">
								Não possui cadastro？
								<a
									className="cursor-pointer font-bold text-[#4B00E0] underline"
									href="/cadastrarUsuarios"
								>
									Cadastrar aqui
								</a>
							</p>
						</div>

						<DefaultButton
							label="Avançar"
							backgroundColorHex="#5321BF"
							icon={<BsStar />}
							type="submit"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
