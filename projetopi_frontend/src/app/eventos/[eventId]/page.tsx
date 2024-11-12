'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { AiOutlineLike } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { LuPencilLine } from 'react-icons/lu';
import { TfiEmail } from 'react-icons/tfi';

import ImgCultureFest from '@/assets/CultureFest.png';
import ImgArt from '@/assets/art.png';
import ImgFood from '@/assets/food.png';
import ImgMusic from '@/assets/music.png';
import ImgTech from '@/assets/tecnologia.png';
import DefaultButton from '@/components/DefaultButton';
// import EventDetails from '@/components/EventDetails';
// import EventInformations from '@/components/EventInformations';
// import OtherEvents from '@/components/OtherEvents';
import Footer from '@/components/Footer';
import NavbarAuthenticated from '@/components/NavbarAuthenticated';
import OutlineButton from '@/components/OutlineButton';
import { eventThemeMocks } from '@/mocks/EventThemes';

export default function VerEvento({ params }: { params: { eventId: string } }) {
	const router = useRouter();
	const [subscribed, setSubscribed] = useState(false);

	const createSubscription = () => {
		// .... more task from backend
		router.push(`/cadastros-publicos`);
		// setSubscribed(true);
	};
	const cancelSubscription = () => {
		// .... more task from backend
		setSubscribed(false);
	};

	return (
		<div>
			<NavbarAuthenticated />

			<div className="container mt-44 w-[1280px]">
				{subscribed ? (
					<section className="flex gap-12">
						<div className="mt-6 flex flex-col items-center gap-6 self-center">
							<OutlineButton
								label="Menu para Submissão"
								outlineColorHex="#4B00E0"
								textColorHex="#4B00E0"
								customWidth="220px"
								onClick={() =>
									router.push(`/eventos/${params.eventId}/submissoes`)
								}
							/>
							<button className="flex items-center gap-2 rounded-full border border-black px-3 py-1 text-sm text-black">
								Ver todas as edições <FaRegEye />
							</button>
							<p className="flex items-center gap-2 text-base text-black">
								<TfiEmail /> cultureFest@gmail.com
							</p>
							<Image
								src={ImgCultureFest}
								alt="CultureFest Logo"
								className="w-[800px]"
							/>
							<DefaultButton
								label="Cancelar Inscrição"
								backgroundColorHex="#BF0000"
								textColorHex="#fff"
								customWidth="220px"
								onClick={cancelSubscription}
							/>
						</div>
						<div>
							<h1 className="my-4 mt-0 text-4xl font-bold">CultureFest</h1>
							<h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
								<LuPencilLine className="text-[#4B00E0]" /> Descrição
							</h2>
							<p className="mb-6 text-base text-gray-700">
								Prepare-se para uma experiência musical única e emocionante!
								Estamos entusiasmados em anunciar o incrível Festival Melodias
								Vibrantes, um evento que celebrará a diversidade musical e
								encantará os amantes de todos os gêneros. <br />
								<br /> Além das performances épicas, o CultureFest também
								contará com uma série de atividades emocionantes para enriquecer
								a experiência dos participantes. Teremos oficinas interativas
								com músicos experientes, onde você poderá aprender técnicas,
								explorar seu próprio talento musical e descobrir os segredos dos
								bastidores da indústria.
							</p>

							<div className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-5">
								<div className="flex flex-col gap-4">
									<div className="h-40 rounded-lg border p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-center text-lg font-semibold">
											<LuCalendarClock className="text-[#4B00E0]" /> Data e Hora
										</h2>
										<div className="flex items-center justify-between text-base">
											<div className="flex flex-col gap-2">
												<p>
													<a className="font-bold">Data de Início:</a>{' '}
													10/07/2023
												</p>
												<p>
													<a className="font-bold">Data de Finalização:</a>{' '}
													15/07/2023
												</p>
											</div>
											<div className="flex flex-col gap-2">
												<p>
													<a className="font-bold">Horário:</a> 7h às 18h
												</p>
												<p>
													<a className="font-bold">Carga Horária:</a> 90h
												</p>
											</div>
										</div>
									</div>
									<div className="h-40 rounded-lg border p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
											<IoLocationOutline className="text-[#4B00E0]" />{' '}
											Localização
										</h2>
										<p className="text-base">
											<a className="font-bold">Físico:</a> SP - São Paulo
										</p>
										<p className="text-base">
											Fatec Zona Leste - Av. Águia de Haia, Endereço 6
										</p>
										<p className="text-base">
											<a className="font-bold">Remoto:</a> Webex
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<div className="max-h-40 overflow-y-auto rounded-lg border p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
											<AiOutlineLike className="text-[#4B00E0]" /> Apoiadores
										</h2>
										<div className="flex flex-col gap-2">
											<a
												href="https://www.cps.sp.gov.br/"
												className="text-base underline"
											>
												Centro Paula Souza
											</a>
											<a
												href="https://www.saopaulo.sp.gov.br/"
												className="text-base underline"
											>
												Governo do Estado de São Paulo
											</a>
											<a
												href="https://ciaiberica.com.br/"
												className="text-base underline"
											>
												Ibérica Fios e Cabos
											</a>
											<a
												href="https://jtni.com.br/index.php/JTnI"
												className="text-base underline"
											>
												Journal of Tecnology & Information
											</a>
											<a
												href="https://www.sadsj.org/index.php/revista/index"
												className="text-base underline"
											>
												South American Development Society Journal
											</a>
										</div>
									</div>
									<div className="max-h-40 overflow-y-auto rounded-lg border p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
											<AiOutlineLike className="text-[#4B00E0]" /> Comissão
										</h2>
										<div className="flex flex-col gap-2">
											<p className="text-base">
												<a className="font-bold">Organizador:</a> Roberto
											</p>
											<p className="text-base">
												<a className="font-bold">Chair:</a> Robertinho
											</p>
											<p className="text-base">
												<a className="font-bold">Adiministrador:</a> Clara
												Clarinha
											</p>
											<p className="text-base">
												<a className="font-bold">Avaliador:</a> Sara sarinha
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className="flex flex-col gap-10">
						<section className="flex items-baseline gap-12">
							<div className="flex flex-col items-center gap-6">
								<button className="flex items-center gap-2 rounded-full border border-black px-3 py-1 text-sm text-black">
									Ver todas as edições <FaRegEye />
								</button>
								<p className="mt-4 flex items-center gap-2 text-base text-black">
									<TfiEmail /> cultureFest@gmail.com
								</p>
								<Image
									src={ImgCultureFest}
									alt="CultureFest Logo"
									className="w-[800px]"
								/>
								<DefaultButton
									label="Inscrever-se"
									backgroundColorHex="#4B00E0"
									textColorHex="#fff"
									customWidth="128px"
									onClick={createSubscription}
								/>
							</div>
							<div>
								<h1 className="my-4 text-4xl font-bold">CultureFest</h1>
								<h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
									<LuPencilLine className="text-[#4B00E0]" /> Descrição
								</h2>
								<p className="mb-6 text-base text-gray-700">
									Prepare-se para uma experiência musical única e emocionante!
									Estamos entusiasmados em anunciar o incrível Festival Melodias
									Vibrantes, um evento que celebrará a diversidade musical e
									encantará os amantes de todos os gêneros. <br />
									<br /> Além das performances épicas, o CultureFest também
									contará com uma série de atividades emocionantes para
									enriquecer a experiência dos participantes. Teremos oficinas
									interativas com músicos experientes, onde você poderá aprender
									técnicas, explorar seu próprio talento musical e descobrir os
									segredos dos bastidores da indústria.
								</p>

								<div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
									<div className="rounded-lg border border-[#B9012D] p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-center text-lg font-semibold">
											<LuCalendarClock className="text-[#B9012D]" /> Data e Hora
										</h2>
										<div className="flex items-center justify-between text-base">
											<div className="flex flex-col gap-2">
												<p>
													<a className="font-bold">Data de Início:</a>{' '}
													10/07/2023
												</p>
												<p>
													<a className="font-bold">Data de Finalização:</a>{' '}
													15/07/2023
												</p>
											</div>
											<div className="flex flex-col gap-2">
												<p>
													<a className="font-bold">Horário:</a> 7h às 18h
												</p>
												<p>
													<a className="font-bold">Carga Horária:</a> 90h
												</p>
											</div>
										</div>
									</div>
									<div className="rounded-lg border border-[#B9012D] p-4 shadow-md">
										<h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
											<IoLocationOutline className="text-[#B9012D]" />{' '}
											Localização
										</h2>
										<p className="text-base">
											<a className="font-bold">Físico:</a> SP - São Paulo
										</p>
										<p className="text-base">
											Fatec Zona Leste - Av. Águia de Haia, Endereço 6
										</p>
										<p className="text-base">
											<a className="font-bold">Remoto:</a> Webex
										</p>
									</div>
								</div>
							</div>
						</section>
						<section className="mt-12">
							<h1 className="mb-1 text-start text-3xl font-bold">
								Veja outros eventos
							</h1>
							<h2 className="mb-10 text-start text-lg font-medium">
								Áreas que podem te interessar! Navegue de acordo com o seu
								interesse!
							</h2>
							<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{eventThemeMocks.map((event, index) => (
									<div
										key={index}
										className="flex flex-col items-center gap-4 rounded-lg border px-4 pb-8 pt-4 text-center shadow-md"
									>
										<Image
											src={event.image}
											alt={event.title}
											className="mb-4 w-full object-cover"
										/>
										<h3 className="text-xl font-semibold">{event.title}</h3>
										<p className="mb-2 text-gray-700">{event.description}</p>
										<OutlineButton
											outlineColorHex="#BE0BD9"
											label="Ver Mais"
											textColorHex="#BE0BD9"
											customWidth="120px"
											customHeight="35px"
										/>
									</div>
								))}
							</div>
						</section>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
}
