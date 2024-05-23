'use client';

import Image from 'next/image';
import search from './../../search.png';


export default function SearchComponent() {
	return (
		<div>
            <div className="flex flex-row cursor-pointer gap-3 items-left justify-center z-30 ml-32 mb-80">
				<p className="text-sm font-sm">Buscar</p>
				<Image src={search} alt="" height={4} width={22} />
			</div>
		</div>
	);
}
