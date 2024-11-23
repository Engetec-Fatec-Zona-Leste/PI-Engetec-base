'use client';

import Image from 'next/image';

import { GoDownload } from 'react-icons/go';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

import certificate from '@/assets/certificate.png';
import FilterSearchLine from '@/components/FilterLine';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Pagination2 from '@/components/Pagitation/Pagination2';
import Title from '@/components/Title';
import { eventCertificate } from '@/mocks/EventCertificate';

export default async function Certificate() {
	return (
		<div className="">
			<Navbar />
			<div className="container flex-col items-center">
				<Title
					title="Certificados Evento"
					subtitle="Todos os certificados dos eventos participados"
					colorHex="#ef0037"
				/>

				<div className="w-9/12">
					<div className="mb-3">
						<FilterSearchLine />
					</div>

					{eventCertificate.map((event, i) => (
						<div
							key={i}
							className="mb-6 flex items-center rounded-md border border-[#FA023E] p-4"
							style={{
								boxShadow:
									'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
							}}
						>
							<div>
								<Image src={certificate} height={140} alt="" />
							</div>

							<div className="ml-[4rem]  flex w-full items-center justify-between ">
								<div>
									<div className="flex w-full flex-col gap-1">
										<div className="">
											<p className="text-lg font-semibold ">
												{event.eventName}
											</p>
										</div>

										<div>
											{event.authors.map((author, i) => (
												<p key={i} className="text-sm">
													{author}
												</p>
											))}
										</div>
										<div>
											<div className="flex gap-1 text-sm">
												<p className="font-semibold">Data:</p>
												<p>{event.date}</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mr-6 flex h-full w-[14%] flex-col gap-4">
									<div className="flex cursor-pointer justify-around gap-1 rounded-xl border-2 border-[#000000] text-black">
										<MdOutlineRemoveRedEye size={23} color="#000000" />
									</div>
									<div className="flex cursor-pointer justify-around gap-1 rounded-xl border-2 border-[#4B00E0] text-black">
										<GoDownload size={23} color="#4B00E0" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-4">
					<Pagination2 />
				</div>
			</div>
			<Footer />
		</div>
	);
}
