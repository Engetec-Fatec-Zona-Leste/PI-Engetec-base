import React from 'react';

import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const data = [
	{ tipo: 'artigo', usuario: 'Sophia Almeida', areas: 'Biologia' },
	{ tipo: 'análise', usuario: 'Lucas Pinheiros', areas: 'Ciência' },
];

const Tabela = () => {
	return (
		<table className="w-1/1 border-collapse overflow-hidden rounded-lg border border-gray-400">
			<thead>
				<tr className="bg-gray-200">
					<th className="border border-gray-400 p-2">Tipo</th>
					<th className="border border-gray-400 p-2">Usuário</th>
					<th className="border border-gray-400 p-2">Áreas</th>
					<th className="border border-gray-400 p-2"></th>
				</tr>
			</thead>
			<tbody>
				{data.map((item, index) => (
					<tr
						key={index}
						className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
					>
						<td className="border border-gray-400 p-2 pl-4 font-medium">
							{item.tipo}
						</td>
						<td className="border border-gray-400 p-2 pl-4 font-medium">
							{item.usuario}
						</td>
						<td className="border border-gray-400 p-2 pl-4 font-medium">
							{item.areas}
						</td>
						<td className="flex border p-2 px-6">
							<button className="mr-4 flex items-center gap-2 rounded-[12px] border border-[#4C1FA6] px-8 py-1 font-medium text-[#4C1FA6] hover:bg-[#4C1FA6] hover:text-white">
								<span>
									<FaRegEdit />
								</span>
								Editar
							</button>
							<button className="ml-2 flex items-center gap-2 rounded-[12px] border border-[#BF0000] px-8 py-1 font-medium text-[#BF0000] hover:bg-[#BF0000] hover:text-white">
								<span>
									<RiDeleteBin6Line />
								</span>
								Excluir
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Tabela;
