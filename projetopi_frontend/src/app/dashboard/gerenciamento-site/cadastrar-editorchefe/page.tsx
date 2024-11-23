'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';

import ClipInput from '@/components/ClipInput';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { AdmFunctions } from '@/mocks/AdmFunctions';

export default function CadastrarAdm() {
	const router = useRouter();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// await action()
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	const [pending, setPending] = useState(true);
	const [accepted, setAccepted] = useState(false);
	const [declined, setDeclines] = useState(false);
	const [users, setUsers] = useState(AdmFunctions);
	const [eventId, setEventId] = useState('');

	useEffect(() => {
		setEventId(localStorage.getItem('eventId') ?? '0');
	}, [users]);

	const handleAccept = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'accept';
		setUsers(updatedUsers);
	};

	const handleDecline = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'declined';
		setUsers(updatedUsers);
	};

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-44 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Editores Chefes"
						subtitle="Gerencie editores chefes do evento, mas cuidado ao aceitar ou recusars, pois o editor chefe terá acesso a partes restritas do evento"
						colorHex="#ef0037"
					/>
				</div>

				<div className="mt-8 flex h-[25rem] w-3/4 flex-col items-center justify-center rounded-lg border border-neutral-400 bg-neutral-50">
					<form className="fle flex-col">
						<div className="flex flex-col gap-3">
							<p className="mr-64 text-base">Cadastrar Manualmente:</p>
							<div className="mb-6 rounded-xl border-2 border-solid  border-black bg-transparent p-4 text-center text-lg text-black">
								Editor Chefe
							</div>
							<ClipInput
								label="Enviar Link para Cadastro:"
								type="text"
								name="link"
								id="link"
								placeholder="https://link.com"
								value={`${window.location.hostname}/eventos/${eventId}/cadastro-admin`}
								readOnly
								customWidth="100%"
							/>

							<div className="mt-3 flex items-center justify-center gap-6">
								<button
									className="w-44
                        rounded-xl border-none bg-[#4B00E0] p-2 text-center text-base font-medium text-white"
									onClick={() => router.back()}
								>
									Voltar
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="mt-14 flex w-3/4 flex-col">
					<h1 className="text-start text-2xl font-bold text-black ">
						Gerenciamento dos usuários
					</h1>
				</div>

				<div className="mt-4 flex w-3/4 items-center justify-between">
					<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
						<button
							onClick={() => {
								setPending(true);
								setAccepted(false);
								setDeclines(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								pending ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									pending ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Pendentes</p>
						</button>
						<button
							onClick={() => {
								setAccepted(true);
								setDeclines(false);
								setPending(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								accepted ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									accepted ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Ativos</p>
						</button>
						<button
							onClick={() => {
								setAccepted(false);
								setDeclines(true);
								setPending(false);
							}}
							className={`flex items-center gap-2 rounded-xl border-0 border-none p-2 ${
								declined ? 'bg-none text-black' : 'bg-[#DD4467] text-white'
							} `}
						>
							<CiCircleCheck
								className={`text-[1.8rem] ${
									declined ? 'text-black' : 'text-white'
								} `}
							/>
							<p className="">Removidos</p>
						</button>
					</div>
					<button
						className="mb-6 mt-4 flex w-1/5
							items-center justify-center rounded-xl border-none bg-[#4B00E0] px-4
							py-2 text-center 
							text-base
							font-medium
							text-white"
						onClick={handleClick}
					>
						Salvar
					</button>
				</div>
				<div className="mt-12 w-3/4 overflow-hidden rounded-md border border-[#BCBCBC]">
					<table className="w-full text-center">
						<thead className="rounded-t-md bg-[#DD4467] text-white">
							<tr className="h-14">
								<th scope="col" className="">
									{accepted && 'Excluir'}
									{declined && 'Aceitar'}
									{pending && 'Pendentes'}
								</th>
								<th scope="col">Nome</th>
								<th scope="col" className="">
									Instituição
								</th>
								<th scope="col" className="">
									Email
								</th>
							</tr>
						</thead>
						<tbody className="rounded-b-md">
							{users.map((user, i) => {
								if (user.situation === 'accept' && accepted) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleRemove
														className="cursor-pointer text-[2rem] text-red-600"
														onClick={() => handleDecline(i)}
													/>
												</div>
											</td>
											<td>{user.name}</td>
											<td>{user.instituition}</td>
											<td>{user.email}</td>
										</tr>
									);
								} else if (user.situation === 'declined' && declined) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleCheck
														className="cursor-pointer text-[2rem] text-green-600"
														onClick={() => handleAccept(i)}
													/>
												</div>
											</td>
											<td>{user.name}</td>
											<td>{user.instituition}</td>
											<td>{user.email}</td>
										</tr>
									);
								} else if (user.situation === 'pending' && pending) {
									return (
										<tr
											key={i}
											className="h-20"
											style={{
												backgroundColor: i % 2 === 0 ? '' : '#E4E4E4',
											}}
										>
											<td>
												<div
													style={{
														display: 'flex',
														gap: '20px',
														justifyContent: 'center',
													}}
												>
													<CiCircleCheck
														className="cursor-pointer text-[2rem] text-green-600"
														onClick={() => handleAccept(i)}
													/>
													<CiCircleRemove
														className="cursor-pointer text-[2rem] text-red-600"
														onClick={() => handleDecline(i)}
													/>
												</div>
											</td>
											<td>{user.name}</td>
											<td>{user.instituition}</td>
											<td>{user.email}</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</div>
	);
}
