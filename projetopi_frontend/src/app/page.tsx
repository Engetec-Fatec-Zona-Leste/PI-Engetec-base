'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { cardsData } from '@/mocks/EventCards';

export default function Eventos() {
	const router = useRouter();
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
		);
	};

	const previousIndex =
		currentIndex === 0 ? cardsData.length - 1 : currentIndex - 1;

	return (
		<div>
			<Navbar />
			<div className="mt-24 flex flex-col">
				<section className="bg-[#493F5B] p-10">
					<h1 className="text-3xl font-bold text-white">
						Principais Eventos Aberto
					</h1>

					<div className="carousel-container relative flex h-[70vh] w-full items-center justify-center ">
						<IoIosArrowBack
							onClick={prevSlide}
							className="cursor-pointer text-3xl text-white"
						/>

						<div className="carousel-items-container relative flex h-full w-full items-center justify-center">
							<div className="previous-item flex h-[20vw] w-[20vw] items-center justify-center rounded-lg object-cover opacity-50 blur-sm transition-all duration-500">
								<Image
									src={cardsData[previousIndex].imageUrl}
									alt={cardsData[previousIndex].title}
									layout="fill"
									objectFit="cover"
								/>
							</div>

							<div className="current-item flex flex-1 items-center justify-center">
								<Image
									src={cardsData[currentIndex].imageUrl}
									alt={cardsData[currentIndex].title}
									width={500}
									onClick={(e) => {
										e.stopPropagation();
										router.push(`/eventos/${cardsData[currentIndex].id}`);
									}}
									className="cursor-pointer"
								/>

								<div className="ml-5 w-[50%] text-white">
									<h3 className="text-3xl font-semibold">
										{cardsData[currentIndex].title}
									</h3>
									<p className="mb-5 font-bold">
										{cardsData[currentIndex].startDate}
									</p>
									<p className="mt-2 ">{cardsData[currentIndex].description}</p>
								</div>
							</div>
						</div>

						<IoIosArrowForward
							onClick={nextSlide}
							className="cursor-pointer text-3xl text-white"
						/>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
