'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import email from 'next-auth/providers/email';

// import { authenticate } from '@/lib/actions';

export default function LoginForm() {
	// const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {};

	return (
		<div className="md container mb-6 mt-52 flex justify-center">
			<div className="w-1/2 rounded-2xl bg-white px-28 py-10 shadow-md">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#5321BF' }}
				>
					Login
				</h1>
				<form className="mt-8 w-full bg-white" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-8 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Email
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										type="text"
										name="email"
										id="email"
										placeholder="Email de Usuário"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-8 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Senha
								</label>

								<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-xl border-0 bg-white text-sm outline-none"
										type="password"
										name="password"
										id="password"
										placeholder="Senha de Usuário"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-6">
						<p className="text-center text-xs font-normal text-slate-400">
							Não possui cadastro？
							<a className="font-bold underline text-[#4B00E0] cursor-pointer" href='/cadastrar'>
								Cadastrar aqui
							</a>
						</p>
					</div>
					<div className="flex items-center justify-center gap-5 mt-10">
						<button
							className="mb-6 rounded-xl border-none py-2 px-10 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#5321BF' }}
							type="submit"
						>
							Avançar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

function LoginButton() {
	const { pending } = useFormStatus();

	return (
		<button className="mt-4 w-full" aria-disabled={pending}>
			Log in
		</button>
	);
}
