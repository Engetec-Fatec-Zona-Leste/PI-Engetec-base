'use client';

import Image from 'next/image';

import search from '@/assets/search.png';

export default function SearchComponent() {
	return (
		<div>
			<div className="z-30 flex cursor-pointer flex-row items-center justify-center gap-3">
				<p className="font-sm text-sm">Buscar</p>
				<Image src={search} alt="" height={4} width={22} />
			</div>
		</div>
	);
}
