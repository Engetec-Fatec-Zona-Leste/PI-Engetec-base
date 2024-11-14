'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { BsHourglassSplit } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';

import ClipInput from '@/components/ClipInput';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import Pagination1 from '@/components/Pagitation/Pagination1';
import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { instituitions } from '@/mocks/Instituitions';

export default function CadastrarInstituicao() {
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

	const handlePendente = () => {
		setPendentes(true);
		setAccepted(false);
		setDeclines(false);
		setTodos(false);
	};

	const handleTodos = () => {
		setTodos(true);
		setPendentes(false);
		setAccepted(false);
		setDeclines(false);
	};

	const handleAceitos = () => {
		setPendentes(false);
		setTodos(false);
		setAccepted(true);
		setDeclines(false);
	};

	const handleRecusados = () => {
		setPendentes(false);
		setAccepted(false);
		setTodos(false);
		setDeclines(true);
	};

	const handleOrganizador = () => {
		setOrganizadorChange(true);
		setAvaliador(false);
	};

	const handleAvaliador = () => {
		setOrganizadorChange(false);
		setAvaliador(true);
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

	const [todos, setTodos] = useState(false);
	const [pendentes, setPendentes] = useState(true);
	const [accepted, setAccepted] = useState(false);
	const [declined, setDeclines] = useState(false);

	const [organizador, setOrganizador] = useState(true);
	const [organizadorChange, setOrganizadorChange] = useState(true);
	const [avaliador, setAvaliador] = useState(false);
	const [users, setUsers] = useState(instituitions);

	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const totalPages = 3;

	return (
		<div>
			<NavbarAuthenticated />
			<div className="container mb-6 mt-44 flex flex-col items-center">
				<div className="w-1/2">
					<Title
						title="Cadastrar Instituições"
						subtitle="Gerencie as instituições que serão cadastradas no site, ou as cadastre"
						colorHex="#ef0037"
					/>
				</div>

				<div className="mt-8 flex w-3/4 flex-col items-center justify-center">
					<div className="flex w-[100%] gap-10">
						<div className="flex w-[50%] flex-col">
							<label
								className="mb-2 text-sm font-medium"
								htmlFor="instituitionName"
							>
								Nome
							</label>

							<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full border-0 bg-white text-sm outline-none"
									type="text"
									name="instituitionName"
									id="instituitionName"
								/>
							</div>
						</div>
						<div className="flex w-[50%] flex-col">
							<label className="mb-2 text-sm font-medium" htmlFor="cnpj">
								CNPJ
							</label>

							<div className="rounded-xl border border-gray-300 bg-white px-4 py-2">
								<input
									className="w-full border-0 bg-white text-sm outline-none"
									type="text"
									name="cnpj"
									id="cnpj"
								/>
							</div>
						</div>
					</div>
					<div>
						<div className="mt-10 flex items-center justify-center gap-6">
							<button
								className="w-44
                        rounded-xl border-none p-2 text-center text-base font-medium text-white"
								style={{ backgroundColor: '#4B00E0' }}
								type="submit"
								onClick={handleNextButtonClick}
							>
								Cadastrar
							</button>
						</div>
					</div>
				</div>

				<div className="mt-14 flex w-3/4 flex-col">
					<h1 className="text-start text-2xl font-bold text-black ">
						Gerenciamento dos usuários
					</h1>
				</div>

				<div className="mt-4 flex w-3/4 justify-between">
					{organizador ? (
						<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
							<div>
								{pendentes ? (
									<button className="flex flex-row items-center ">
										<BsHourglassSplit className="text-[2rem]" />
										<p>Pendentes</p>
									</button>
								) : (
									<button
										onClick={handlePendente}
										className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
										style={{ backgroundColor: '#DD4467' }}
									>
										<BsHourglassSplit className="text-[2rem] text-white" />

										<p className="">Pendentes</p>
									</button>
								)}
							</div>
							<div>
								{accepted ? (
									<button className="flex flex-row items-center gap-2">
										<CiCircleCheck className="text-[1.8rem]" />
										<p>Aceitos</p>
									</button>
								) : (
									<button
										onClick={handleAceitos}
										className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
										style={{ backgroundColor: '#DD4467' }}
									>
										<CiCircleCheck className="text-[1.8rem] text-white" />
										<p className="">Aceitos</p>
									</button>
								)}
							</div>
							<div>
								{declined ? (
									<button className="flex flex-row items-center gap-2">
										<CiCircleRemove className="text-[2rem]" />
										<p>Recusados</p>
									</button>
								) : (
									<button
										onClick={handleRecusados}
										className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
										style={{ backgroundColor: '#DD4467' }}
									>
										<CiCircleRemove className="text-[2rem] text-white" />
										<p className="">Recusados</p>
									</button>
								)}
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center gap-3 rounded-lg border-none p-3 shadow-xl">
							<div>
								{todos ? (
									<button className="flex flex-row items-center gap-2">
										<CiCircleCheck className="text-[1.8rem]" />
										<p>Todos</p>
									</button>
								) : (
									<button
										onClick={handleTodos}
										className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
										style={{ backgroundColor: '#DD4467' }}
									>
										<CiCircleCheck className="text-[1.8rem] text-white" />
										<p className="">Todos</p>
									</button>
								)}
							</div>
							<div>
								{accepted ? (
									<button className="flex flex-row items-center gap-2">
										<CiCircleCheck className="text-[1.8rem]" />
										<p>Aceitos</p>
									</button>
								) : (
									<button
										onClick={handleAceitos}
										className="flex items-center gap-2 rounded-xl border-0 border-none p-2 text-white"
										style={{ backgroundColor: '#DD4467' }}
									>
										<CiCircleCheck className="text-[1.8rem] text-white" />
										<p className="">Aceitos</p>
									</button>
								)}
							</div>
						</div>
					)}

					<div className="flex flex-col gap-6">
						<SearchFilter />
					</div>
				</div>
				<div className="mt-12 w-3/4 overflow-hidden rounded-xl border border-[#BCBCBC]">
					<table className="w-full text-center">
						<thead className="rounded-t-xl bg-[#DD4467] text-white">
							<tr className="h-14">
								<th scope="col" className=""></th>
								<th scope="col" className="w-[57%] text-start text-lg">
									Nome
								</th>
								<th scope="col" className="text-start text-lg">
									CNPJ
								</th>
							</tr>
						</thead>
						<tbody className="rounded-b-xl">
							{users.map((user, i) => {
								if (user.situation === 'pending' && pendentes) {
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
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
										</tr>
									);
								} else if (user.situation === 'accept' && accepted) {
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
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
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
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.name}
												</div>
											</td>
											<td className="text-start">
												<div className="w-[90%] rounded-lg border border-black p-1.5">
													{user.cnpj}
												</div>
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
			</div>

			<Pagination1
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<Footer />
		</div>
	);
}
