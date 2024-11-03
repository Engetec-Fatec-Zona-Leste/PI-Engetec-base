// 'use client';
import { useState } from 'react';

import dynamic from 'next/dynamic';

import { signIn } from 'next-auth/react';
import { BiHeart } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';

import { login } from '@/actions/login';
import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading/Loading';
// import Navbar from '@/components/Navbar';
import NormalInput from '@/components/NormalInput';
import OutlineButton from '@/components/OutlineButton';

const Navbar = dynamic(() => import('@/components/Navbar'), {
	loading: () => <Loading />,
});

export default function LoginPage() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	// const handleSubmit = () => {};

	signIn;

	return (
		<div className="flex h-screen flex-col justify-items-center ">
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<form
						className="form flex flex-col items-center bg-white px-5 shadow-md"
						// onSubmit={handleSubmit}
						action={login}
					>
						<h1
							className="text-center text-2xl font-bold text-black"
							style={{ color: '#5321BF' }}
						>
							Login
						</h1>
						<NormalInput
							id="email"
							name="email"
							label="E-mail"
							placeholder="E-mail de Usuário"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>
						<NormalInput
							id="password"
							name="password"
							label="Senha"
							type="password"
							placeholder="Senha de Usuário"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
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
