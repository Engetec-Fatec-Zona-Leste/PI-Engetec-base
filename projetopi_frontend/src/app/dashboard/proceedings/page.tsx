'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { IoMdDownload } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import SearchFilter from '@/components/SearchFilter';
import Title from '@/components/Title';
import { proceedingsMock } from '@/mocks/Proceedings';

export default function Proceedings() {
	const [authenticated, setAuthenticated] = useState(true);
	const router = useRouter();

	return (
		<div>
			<Navbar />
			<div className="align-center container my-36 flex w-[100vw] flex-col items-center justify-center">
				<Title
					title="Proceedings Evento"
					subtitle="Todos os proceedings do evento"
					colorHex="#EF0037"
				/>
				<div className="mb-46 w-11/12">
					{/* <div className="flex flex-col items-start">
						<SearchFilter />
					</div> */}
					<div className="">
						{proceedingsMock.map((data, i) => (
							// <>
							<div
								className="mt-8 flex justify-between rounded-lg border border-[#FA023E] p-3"
								style={{
									boxShadow:
										'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
								}}
								key={i}
							>
								<div className="flex flex-col gap-4">
									<div>
										<p className="text-lg font-semibold">{data.EventName}</p>
										<p>{data.authors.join(', ')}</p>
									</div>
									<p>{data.date}</p>
								</div>
								<div className="mr-12 flex flex-col justify-around">
									<button className="flex w-[150px] items-center justify-center rounded-xl border-2 border-black p-[2px]">
										<IoEyeOutline size={23} />
									</button>
									<button className="flex w-[150px] items-center justify-center rounded-xl border-2 border-[#4B00E0] p-[2px]">
										<IoMdDownload size={23} color="#4B00E0" />
									</button>
								</div>
							</div>
							// </>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
