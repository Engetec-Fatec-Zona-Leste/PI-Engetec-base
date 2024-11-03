'use client';

import { CiFilter } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';

export default function FilterSearchLine() {
	return (
		<>
			<div className="flex gap-4">
				<div className="flex flex-row items-center gap-2">
					<button className="leading-3xl font-medium text-[#000000]">
						Buscar
					</button>
					<IoSearchOutline size={20} />
				</div>
				<div className="flex flex-row items-center gap-2">
					<button className="leading-3xl font-medium text-[#000000]">
						Filtrar
					</button>
					<CiFilter size={20} />
				</div>
			</div>
		</>
	);
}
