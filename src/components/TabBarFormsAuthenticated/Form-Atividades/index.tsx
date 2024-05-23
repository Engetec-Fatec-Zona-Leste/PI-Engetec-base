'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import axios from 'axios';

import { Activity } from '@/lib/repository/activity/index.repository';

import EditLogo from './editLogo.png';
import RemoveLogo from "./trashLogo.png"

type CriarEventoProps = {
	handleNextClick: () => void;
};

export default function CriarAtividade({ handleNextClick }: CriarEventoProps) {
	const [title, setTitle] = useState('');
	const [descricao, setDescricao] = useState('');
	const [dia, setDia] = useState('');
	const [typeActivity, setTypeActivity] = useState('');
	const [guestName, setGuestName] = useState('');
	const [guestEmail, setGuestEmail] = useState('');
	const [timeActivity, setTimeActivity] = useState('');
	const [activities, setActivities] = useState<Activity[]>([]);

	const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleNextClick();
	};

	// useEffect(() => {
	// 	const getInfos = async () => {
	// 		try {
	// 			const id = localStorage.getItem('eventId');
	// 			const result = await axios.get(
	// 				`http://localhost:5002/area-event/${id}`
	// 			);
	// 			const response = await axios.get(
	// 				'http://localhost:5002/comissao?adm=true'
	// 			);
	// 			if (result.data.areas && response.data.comissao) {
	// 				setAreas(result.data.areas);
	// 				setAdmins(response.data.comissao);
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	getInfos();
	// }, []);

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	localStorage.clear();
	// 	const eventId = localStorage.getItem('eventId');
	// 	if (eventId) {
	// 		let activityCreated: Activity[] = [];
	// 		try {
	// 			activities.forEach(async (activity) => {
	// 				const activityObjt: Activity = {
	// 					activityTitle: activity.activityTitle,
	// 					activityDescription: activity.activityDescription,
	// 					activityDate: activity.activityDate,
	// 					activityType: activity.activityType,
	// 					activityGuestName: activity.activityGuestName,
	// 					activityGuestEmail: activity.activityGuestEmail,
	// 					activityTime: activity.activityTime,
	// 					eventId,
	// 				};
	// 				// const result = await axios.post(
	// 				// 	'http://localhost:5002/sala',
	// 				// 	salaObjt
	// 				// );
	// 				// console.log(result);
	// 			});
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	//     // handleAddOnTable(e)
	// 	handleNextClick();
	// };

	const handleAddOnTable = () => {
		setActivities((prev) => [
			...prev,
			{
				activityGuestEmail: guestEmail,
				activityDescription: descricao,
				activityTime: timeActivity,
				activityDate: dia,
				activityGuestName: guestName,
				activityType: typeActivity,
				activityTitle: title,
			},
		]);
		setTitle('');
		setDescricao('');
		setDia('');
		setTypeActivity('');
		setGuestName('');
		setGuestEmail('');
		setTimeActivity('');
	};

	const itemToRemove = (i: any) => {
		setActivities((prevActivities) => {
		  const updatedArray = [...prevActivities];
		  updatedArray.splice(i, 1); 
		  return updatedArray;
		});
	  };

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-8/12">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Atividades
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Atividades presentes durante o evento
				</h2>
				<form className="mt-8 w-full" onSubmit={handleAddOnTable}>
					<div className="flex justify-center gap-5">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Título
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="activityTitle"
										id="activityTitle"
										placeholder="Titulo da atividade"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="descricao">
									Descrição
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<textarea
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										name="activityDescription"
										id="activityDescription"
										rows={6}
										value={descricao}
										onChange={(e) => setDescricao(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="dateInicio"
								>
									Dia da atividade
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="Date"
										name="dateActivity"
										id="dateActivity"
										value={dia}
										onChange={(e) => setDia(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="select">
									Selecionar Tipo
								</label>

								<div className="mb-3 flex items-center">
									<div className="w-full rounded-md border border-gray-300 bg-white px-4 py-2">
										<select
											className="w-full rounded-md border-0 bg-white text-sm outline-none"
											name="selectType"
											id="selectType"
											value={typeActivity}
											onChange={(e) => setTypeActivity(e.target.value)}
											required
										>
											<option>Selecione</option>
											<option value="Palestra">Palestra</option>
											<option value="Pitch">Pitch</option>
										</select>
									</div>
									<div
										className="ml-3 cursor-pointer rounded-lg px-3 py-1"
										style={{ backgroundColor: '#EF0037' }}
									>
										<p className="text-xl font-bold text-white">+</p>
									</div>
								</div>
							</div>

							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Nome do Convidado:
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="GuestName"
										id="GuestName"
										placeholder="Nome do convidado"
										value={guestName}
										onChange={(e) => setGuestName(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="eventName">
									Email do Convidado:
								</label>

								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="GuestEmail"
										id="GuestEmail"
										placeholder="Email do convidado"
										value={guestEmail}
										onChange={(e) => setGuestEmail(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="horaInicio"
								>
									Horário
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="time"
										name="timeActivity"
										id="timeActivity"
										value={timeActivity}
										onChange={(e) => setTimeActivity(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center gap-5" style={{marginTop: '4rem'}}>
						<button
							className="mb-6 w-3/12 rounded-xl border-none p-2 text-center text-base font-medium text-white"
							style={{ backgroundColor: '#0391C9' }}
							type="button"
							onClick={handleAddOnTable}
						>
							Cadastrar Atividade
						</button>
					</div>
				</form>
				<div className="mt-8 flex items-center justify-center gap-5">
					<button
						className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#8A8A8A' }}
						type="submit"
					>
						Voltar
					</button>
					<button
						className="mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white"
						style={{ backgroundColor: '#4C1FA6' }}
						type="submit"
						onClick={handleNextButtonClick}
					>
						Avançar
					</button>
				</div>

				<div className="flex items-center justify-center gap-10">
					<table className="mt-12 w-full table-auto text-center">
						<thead style={{ backgroundColor: '#E4E4E4' }}>
							<tr className="h-14">
								<th scope="col">Título</th>
								<th scope="col" className="mr-10">
									Tipo
								</th>
								<th scope="col" className="mr-10">
									Nome convidado
								</th>
								<th scope="col" className="ml-10"></th>
							</tr>
						</thead>
						<tbody>
							{activities && (
								<>
									{activities.map((acitivity, index) => {
										return (
											<tr
												key={index}
												className="h-14"
												style={{
													backgroundColor: !(index % 2 === 0)
														? '#E4E4E4'
														: '#fff',
												}}
											>
												<td scope="row" className="">
													{acitivity.activityTitle}
												</td>
												<td className="">{acitivity.activityType}</td>
												<td className="">{acitivity.activityGuestName}</td>
												<td>
													<div className='flex flex-row gap-2 justify-center'>
													<button className="middle none center mb-2 mt-2 flex w-1/3 items-center justify-center rounded-2xl border-2 border-indigo-600 p-2 font-sans font-bold text-indigo-600 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
														<Image src={EditLogo} alt="" height={20} />
														<p className="ml-2">Editar</p>
													</button>
													<button className="middle none center mb-2 mt-2 flex w-1/3 items-center justify-center rounded-2xl border-2 border-rose-700 p-2 font-sans font-bold text-rose-700 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
													onClick={() => itemToRemove(index)}>
														<Image src={RemoveLogo} alt="" height={20} />
														<p className="ml-2">Excluir</p>
													</button>
													</div>
												</td>
											</tr>
										);
									})}
								</>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
