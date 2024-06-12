'use client';

import Image from 'next/image';

import search from '@/imgs/search.png';

export default function SearchComponent() {
	return (
		<div>
			<div className="items-left z-30 mb-80 ml-32 flex cursor-pointer flex-row justify-center gap-3">
				<p className="font-sm text-sm">Buscar</p>
				<Image src={search} alt="" height={4} width={22} />
			</div>
		</div>
	);
}
