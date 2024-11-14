'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BsHourglassSplit } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';

import ClipInput from '@/components/ClipInput';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { AdmFunctions } from '@/mocks/AdmFunctions';

export default function CadastrarAdm() {
	const router = useRouter();
	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// await action()
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
		router.push('/dashboard/meus-eventos-criados');
	};

	const handleAceitos = () => {
		setAccepted(true);
		setDeclines(false);
	};

	const handleRecusados = () => {
		setAccepted(false);
		setDeclines(true);
	};

	const handleAccept = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'accept';
		setUsers(updatedUsers);
		console.log(updatedUsers[index]);
	};

	const handleDecline = (index: number) => {
		const updatedUsers = [...users];
		updatedUsers[index].situation = 'declined';
		setUsers(updatedUsers);
	};

	const [accepted, setAccepted] = useState(true);
	const [declined, setDeclines] = useState(false);

	const [users, setUsers] = useState(AdmFunctions);

	return (
		<div>
			<NavbarAuthenticated />
			<div className="container mb-6 mt-44 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Usuários"
						subtitle="Gerencie administradores do site, cuidado cadastrar, pois o administrador do site terá gerenciamento total da site"
						colorHex="#ef0037"
					/>
				</div>

				<div className="mt-8 flex h-[25rem] w-3/4 flex-col items-center justify-center rounded-lg border border-neutral-400 bg-neutral-50">
					<form className="fle flex-col">
						<div className="flex flex-col gap-3">
							<label className="mr-64 text-base" htmlFor="cad">
								Cadastrar Manualmente:
							</label>
							<button className="mb-6 rounded-xl border-2 border-solid  border-black bg-transparent p-4 text-center text-lg text-black">
								Administrador{' '}
							</button>
							<ClipInput
								label="Enviar Link para Cadastro:"
								type="text"
								name="link"
								id="link"
								placeholder="https://link.com"
								readOnly
								customWidth="100%"
							/>

							<div className="mt-3 flex items-center justify-center gap-6">
								<button
									className="w-44
                        rounded-xl border-none p-2 text-center text-base font-medium text-white"
									style={{ backgroundColor: '#8A8A8A' }}
									type="submit"
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

				<div className="mt-4 flex w-3/4 justify-between">
					<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
						<div>
							{accepted ? (
								<button className="flex flex-row items-center gap-2">
									<CiCircleCheck className="text-[1.8rem]" />
									<p>Ativos</p>
								</button>
							) : (
								<button
									onClick={handleAceitos}
									className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
									style={{ backgroundColor: '#DD4467' }}
								>
									<CiCircleCheck className="text-[1.8rem] text-white" />
									<p className="">Ativos</p>
								</button>
							)}
						</div>
						<div>
							{declined ? (
								<button className="flex flex-row items-center gap-2">
									<CiCircleRemove className="text-[2rem]" />
									<p>Removidos</p>
								</button>
							) : (
								<button
									onClick={handleRecusados}
									className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
									style={{ backgroundColor: '#DD4467' }}
								>
									<CiCircleRemove className="text-[2rem] text-white" />
									<p className="">Removidos</p>
								</button>
							)}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<SearchFilter />
					</div>
				</div>
				<div className="mt-12 w-3/4 overflow-hidden rounded-md border border-[#BCBCBC]">
					<table className="w-full text-center">
						<thead className="rounded-t-md bg-[#DD4467] text-white">
							<tr className="h-14">
								<th scope="col" className=""></th>
								<th scope="col">Nome</th>
								<th scope="col" className="">
									Instituição
								</th>
								<th scope="col" className="">
									Email
								</th>
								{/* <th scope="col" className="">
									Ações
								</th> */}
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
