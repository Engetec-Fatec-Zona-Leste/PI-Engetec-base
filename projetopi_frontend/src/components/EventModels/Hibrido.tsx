import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { DataLocalProps } from '@/app/criar-evento/[idEvento]/data/page';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import { showToast } from '@/contexts/ToastProvider';
import { checkboxPeriodo } from '@/mocks/checkboxes';

const Hibrido = ({ handleNextClick }: DataLocalProps) => {
	const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
	const handleCheckboxChangePeriod = (periodId: string) => {
		setSelectedPeriods((prevSelected) =>
			prevSelected.includes(periodId)
				? prevSelected.filter((id) => id !== periodId)
				: [...prevSelected, periodId]
		);
	};
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// action(formData)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
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
				<form className="mt-8 w-full" onSubmit={handleSubmit}>
					<div className="flex justify-center gap-10">
						<div className="w-full">
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cep">
									CEP
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="cep"
										id="cep"
										placeholder="CEP do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="estado">
									Estado
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="estado"
										id="estado"
										placeholder="Estado do Evento"
										required
									/>
								</div>
							</div>

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
								<label className="mb-2 text-sm font-medium" htmlFor="local">
									Local
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="local"
										id="local"
										placeholder="Local do Evento"
										required
									/>
								</div>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-sm font-medium" htmlFor="cidade">
									Cidade
								</label>
								<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
									<input
										className="w-full rounded-md border-0 bg-white text-sm outline-none"
										type="text"
										name="cidade"
										id="cidade"
										placeholder="Cidade do Evento"
										required
									/>
								</div>
							</div>

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

export default Hibrido;
