'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Hibrido, Online, Presencial } from '@/components/EventModels';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export type DataLocalProps = {
	handleNextClick: (option: string) => void;
};

export default function DataLocalPage({
	params,
}: {
	params: { idEvento: string };
}) {
	const searchParams = useSearchParams();

	// URL -> `/cadastrar/12345/data?modalidade=Onlie`
	const modalidade = searchParams?.get('modalidade'); // variavel muda de acordo com o que foi cadastrado
	const router = useRouter();
	const handleNextClick = (option: string) => {
		router.push(
			`/criar-evento/${params.idEvento}?modalidade=${modalidade}/arquivos`
		);
	};

	const modalidadesType = {
		Hibrido: <Hibrido handleNextClick={handleNextClick} />,
		Presencial: <Presencial handleNextClick={handleNextClick} />,
		Remoto: <Online handleNextClick={handleNextClick} />,
	};

	switch (modalidade) {
		case 'Presencial':
			return (
				<div>
					<Navbar />
					{modalidadesType.Presencial}
					<Footer />
				</div>
			);
		case 'Hibrido':
			return (
				<div>
					<Navbar />
					{modalidadesType.Hibrido}
					<Footer />
				</div>
			);
		default:
			return (
				<div>
					<Navbar />
					{modalidadesType.Remoto}
					<Footer />
				</div>
			);
	}
}
