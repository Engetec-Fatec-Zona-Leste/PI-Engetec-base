'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import DefaultButton from '@/components/DefaultButton';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OutlineButton from '@/components/OutlineButton';
import { cardsData } from '@/mocks/EventCards';
import { eventThemeMocks } from '@/mocks/EventThemes';

export default function Eventos() {
	const [authenticated, setAuthenticated] = useState(true);
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
			{authenticated ? <NavbarAuthenticated /> : <Navbar />}
			<div className="mt-24 flex flex-col">
				<section className="relative h-[70vh] w-full bg-gradient-to-r from-white to-transparent">
					<div className="absolute right-0 top-0 h-full w-1/2">
						<div
							className="h-full bg-cover bg-center"
							style={{
								backgroundImage: "url('/assets/landingPageImg.png')",
							}}
						></div>
					</div>

					<div className="relative z-10 h-full w-1/2 p-16">
						<h1 className="text-3xl font-bold">Crie seu próprio evento!</h1>
						<h2 className="my-10 text-lg">
							Eventos, remotos, presenciais e até híbridos.
						</h2>
						<p className="mb-10">
							{' '}
							Nosso site oferece todo o suporte para você dono do evento e para
							todos que desejam participar deles. O site disponibiliza
							certificados, metodos de avaliação e submissão de artigos para
							eventos escolares, além de organização de atividades. Caso queira
							a organização do ambiente para apresentações, cadastre as salas do
							ambiente que você utilizará!! Nosso site tenta facilitar cada vez
							mais a organização de seus futuros eventos.
						</p>
						<DefaultButton
							label="Crie um Evento"
							backgroundColorHex="#0391C9"
							onClick={() => router.push('/criar-evento')}
							customWidth="50%"
						/>
					</div>
				</section>

				<section className="bg-[#493F5B] p-10">
					<h1 className="text-3xl font-bold text-white">Principais Eventos</h1>

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
				<section>
					<div className="m-10">
						<h1 className="text-3xl">Áreas de Eventos</h1>
						<p>
							Áreas que podem te interessar! Navegue de acordo com o seu
							interesse!
						</p>
					</div>
					<div className="flex justify-around">
						{eventThemeMocks.map((theme) => (
							<div className="relative w-[20vw] bg-white p-8">
								<div className="absolute left-[-5px] top-[-5px] h-[21vw] w-[21vw]">
									<Image
										alt={`Image for ${theme.title}`}
										src={theme.image}
										layout="fill"
										objectFit="cover"
									/>
								</div>

								<h1 className="mt-[20vw] flex items-center justify-center gap-3 text-lg font-bold">
									{theme.icon}
									<p>{theme.title}</p>
									{theme.icon}
								</h1>
								<p className="my-4">{theme.description}</p>
								<OutlineButton
									label="Ver Mais"
									outlineColorHex="#BE0BD9"
									customWidth="100%"
									textColorHex="#BE0BD9"
								/>
							</div>
						))}
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
