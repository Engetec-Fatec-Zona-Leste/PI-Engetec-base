import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import axios from 'axios';

import { DataLocalProps } from '@/app/criar-evento/[idEvento]/data/page';
import AlertCard from '@/components/AlertCard';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';

const Online = ({ handleNextClick }: DataLocalProps) => {
	const [link, setLink] = useState('');
	const [dataInicio, setDataInicio] = useState('');
	const [dataFinal, setDataFinal] = useState('');
	const [horarioInicio, setHorarioInicio] = useState('');
	const [horarioFinal, setHorarioFinal] = useState('');
	const [showCard, setShowCard] = useState(false);
	const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
	const handleCheckboxChangePeriod = (periodId: string) => {
		setSelectedPeriods((prevSelected) =>
			prevSelected.includes(periodId)
				? prevSelected.filter((id) => id !== periodId)
				: [...prevSelected, periodId]
		);
	};
	const router = useRouter();

	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleNextClick('arquivos');
	};

	return (
		<div className="container mb-6 mt-52 flex justify-center">
			<div className="w-[60vw]">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Data e Local
				</h1>
				<AlertCard message="Evento cadastrado com sucesso" show={showCard} />
				<form className="mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-10">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="dateInicio"
								>
									Data de Início
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="Date"
										name="dateInicio"
										id="dateInicio"
										value={dataInicio}
										onChange={(e) => setDataInicio(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label
									className="mb-2 text-sm font-medium"
									htmlFor="horaInicio"
								>
									Horário de Início
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="time"
										name="horaInicio"
										id="horaInicio"
										value={horarioInicio}
										onChange={(e) => setHorarioInicio(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-4 ">
								<div className="flex items-center justify-center gap-10 text-center">
									<label
										className="text-center text-base font-medium"
										htmlFor="evento"
									>
										Período:
									</label>
									<div className="flex items-center gap-3 py-6">
										{checkboxPeriodo.map((name, index) => (
											<CheckInput
												label={name}
												key={index}
												name={name}
												value={name}
												checked={selectedPeriods.includes(name)}
												onChange={() => handleCheckboxChangePeriod(name)}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="dateFinal">
									Data de Finalização
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="Date"
										name="dateFinal"
										id="dateFinal"
										value={dataFinal}
										onChange={(e) => setDataFinal(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="horaFinal">
									Horário de Finalização
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="time"
										name="horaFinal"
										id="horaFinal"
										value={horarioFinal}
										onChange={(e) => setHorarioFinal(e.target.value)}
										required
									/>
								</div>
							</div>

							<div className="mb-4 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="link">
									Link para transmissão online
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="link"
										name="link"
										id="link"
										value={link}
										onChange={(e) => setLink(e.target.value)}
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-10 flex items-center justify-center gap-5">
						<DefaultButton
							label="Voltar"
							type="button"
							onClick={() => router.push('/criar-evento')}
						/>
						<DefaultButton
							label="Avançar"
							backgroundColorHex="#4B00E0"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Online;
