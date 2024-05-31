'use client';

import { useState } from 'react';

import { toNumber } from 'lodash';
import { CiClock2, CiFilter, CiSearch } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

import { Sessao } from '@/lib/repository/sessao/index.repository';
import { sessaoMocks } from '@/mocks/SessaoEditar';

export default function EditarSessao() {
	const [horaInicioSessao, setHorarioInicioSessao] = useState('');
	const [horaFinalSessao, setHorarioFinalSessao] = useState('');
	const [sessoes, setSessoes] = useState<Sessao[]>([]);

	const handleAddOnTable = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSessoes((prev) => [
			...prev,
			{
				horario: toNumber('12'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'laurins',
			},
			{
				horario: toNumber('10'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'marcio',
			},
			{
				horario: toNumber('14'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'julia martins',
			},
			{
				horario: toNumber('09'),
				tempoApresentacao: toNumber('14'),
				tempoSessao: toNumber('32'),
				comissaoId: 'aaa',
			},
		]);
	};
	const handleSubmmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="container flex-col items-center">
			<div className="w-1/2">
				<h1
					className="text-center text-2xl font-bold text-black"
					style={{ color: '#ef0037' }}
				>
					Sessão {1}
				</h1>
				<h2 className="text-center" style={{ color: '#000000' }}>
					Detalhes da sessão
				</h2>
			</div>

			<table className="mt-12 w-1/2 text-center  ">
				<thead>
					<tr className="h-14 text-left">
						<th scope="col" className="">
							Sala:
						</th>
						<th scope="col" className="">
							Andar:
						</th>
						<th scope="col" className="">
							Limite de Pessoas:
						</th>
						<th scope="col" className="">
							Horário:
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="h-14">
						<td scope="col" className="">
							<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
								03
							</p>
						</td>
						<td scope="col" className="">
							<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
								2
							</p>
						</td>
						<td scope="col" className="">
							<p className="mr-2 h-full w-max rounded-md bg-[#D8D8D8] px-5">
								13
							</p>
						</td>
						<td scope="col" className="">
							<p className="mr-2 flex h-full w-max items-center gap-4 rounded-md bg-[#D8D8D8] px-5">
								13:30 até 14:30
								{<CiClock2 />}
							</p>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="mt-12 flex w-1/2 flex-col items-center gap-4">
				<h2 className="text-center">Chair:</h2>
				<select name="" id="" className="w-2/3 rounded-lg p-3">
					<option value="eunaoaguentomais">é um select</option>
				</select>
			</div>

			<div className="mt-8 flex items-center justify-center gap-6">
				<button
					className="h-max w-max
                    rounded-xl border-2 border-solid  border-black bg-transparent p-2 text-center text-base font-medium text-black"
					type="submit"
				>
					Trocar Sessão do Chair
				</button>
			</div>

			<div className="mt-14 flex w-2/3 items-center justify-between">
				<h1 className="text-start text-2xl font-bold text-black">
					Gerenciamento dos participantes
				</h1>
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-between gap-4">
						Filtrar
						<CiFilter />
					</div>
					<div className="flex items-center justify-center gap-4">
						Procurar
						<CiSearch />
					</div>
				</div>
			</div>

			<table className="mt-12 w-2/4 text-center">
				<thead style={{ backgroundColor: '#E4E4E4' }}>
					<tr className="h-14">
						<th scope="col" className="">
							Função
						</th>
						<th scope="col" className="">
							Nome
						</th>
						<th scope="col" className="">
							Email
						</th>
						<th scope="col" className="">
							Ações
						</th>
					</tr>
				</thead>
				<tbody>
					{sessaoMocks.map((item, index) => {
						return (
							<tr
								key={index}
								className="h-14"
								style={{
									backgroundColor: !(index % 2 === 0) ? '#E4E4E4' : '#fff',
								}}
							>
								<td>{item.funcao}</td>
								<td>{item.nome}</td>
								<td>{item.email}</td>
								<td
									className="mt-2 flex h-full w-max gap-5 
								rounded-md px-5
								"
								>
									<button className="flex items-center gap-5  rounded-xl border-2 border-solid border-stone-500 bg-transparent p-2 text-center text-sm text-black">
										Ver mais
										<FaEye />
									</button>
									<button className="rounded-xl border-2 border-solid  border-red-500 bg-transparent p-2 text-center text-sm text-black">
										Mudar Função
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
