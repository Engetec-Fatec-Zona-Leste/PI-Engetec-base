'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import { FaRegUser } from 'react-icons/fa';

import DefaultButton from '@/components/DefaultButton';
import FileInput from '@/components/FileInput';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavbarAuthenticated';
import NormalInput from '@/components/NormalInput';
import Select from '@/components/Select';
import TextAreaInput from '@/components/TextAreaInput';
import Title from '@/components/Title';
import { showToast } from '@/contexts/ToastProvider';
import { AuthorType } from '@/mocks/Aluno';
import { areas, especialidades, grandesAreas, subAreas } from '@/mocks/Areas';
import { checkboxPeriodo } from '@/mocks/checkboxes';

export default function SubmeterArquivoPage({
	params,
}: {
	params: { eventId: string };
}) {
	const router = useRouter();

	const [authors, setAuthors] = useState<AuthorType[]>([]);

	const handleAuthorCheckPeriodChange = (id: number, value: string) => {
		setAuthors((prevAutores) => {
			return prevAutores.map((author) =>
				author.id === id ? { ...author, period: value } : author
			);
		});
	};

	const handleAddAutores = () => {
		const index = authors.length;
		setAuthors([
			...authors,
			{
				id: index,
				name: '',
				email: '',
				curse: '',
				institution: '',
				period: 'Matutino',
			},
		]);
	};
	const excluirFormularioAutor = (index: number) => {
		setAuthors((prevAutores: any) => {
			const updatedArray = [...prevAutores];
			updatedArray.splice(index, 1);
			return updatedArray;
		});
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// action(formData, authors)
		showToast(
			'info',
			'Informarion: use this to display a card message on the top left of the screen'
		);
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="w-[60vw] ">
					<Title
						colorHex="#4B00E0"
						title="Submeter Arquivos"
						subtitle="Submeta o arquivo para participar do evento CultureFest"
					/>
					<form className="mt-8 w-full" onSubmit={handleSubmitForm}>
						<div className="mb-8 flex flex-wrap justify-center gap-5">
							<NormalInput
								id="title"
								label="Título"
								placeholder="Título do artigo"
								name="titulo"
							/>

							<NormalInput
								id="palavras"
								label="Palavras-Chaves"
								placeholder="Artigo, Análise Científica, etc..."
								name="palavras"
							/>

							<TextAreaInput
								id="resumo"
								label="Resumo"
								placeholder="Resumo do artigo"
								name="resumo"
								rows={5}
							/>

							<TextAreaInput
								id="abstract"
								label="Abstract"
								placeholder="Summary of article"
								name="abstract"
								rows={5}
							/>

							<NormalInput
								id="words"
								label="Key-Words"
								placeholder="Plástico, Polímeros, Isopor"
								name="words"
							/>

							<>
								<Select
									options={grandesAreas}
									placeholder="Selecione uma Grande Área"
									label="Grandes Área"
									preSelect={0}
									name="grandes-areas"
								/>
								<Select
									options={areas}
									placeholder="Selecione uma Área"
									id="area"
									label="Área"
									preSelect={0}
									name="area"
								/>

								<Select
									options={subAreas}
									placeholder="Selecione uma SubÁrea"
									label="Sub Área"
									preSelect={0}
									name="area"
								/>
								<Select
									options={especialidades}
									placeholder="Selecione uma Especialidade"
									label="Especialidade"
									preSelect={0}
									name="area"
								/>
							</>
						</div>

						{/* uploads  */}
						<div className="mb-8 flex flex-wrap justify-center gap-5">
							<FileInput id="artigoCompleto" label="Artigo Completo" />
							<FileInput id="artigoSemAutor" label="Artigo sem autoria" />
						</div>

						{/* forms autores  */}
						{authors.map((newAuthor) => (
							<div
								className="relative mb-8 flex flex-wrap justify-center gap-5 rounded-md bg-[#DEDEDE] pt-8"
								key={newAuthor.id}
							>
								<button
									className="absolute right-4 top-4 m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
									onClick={() => excluirFormularioAutor(newAuthor.id)}
								>
									<p className="text-xl font-bold ">X</p>
								</button>

								<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
									<FaRegUser />
									<p>Autor</p>
								</div>

								<Select
									value={authors[newAuthor.id]?.period}
									onChange={(e) =>
										handleAuthorCheckPeriodChange(newAuthor.id, e.target.value)
									}
									options={checkboxPeriodo.map((tur, i) => ({
										label: tur,
										value: i,
									}))}
									preSelect={0}
									id={`turno-${newAuthor.id}`}
									label="Turno"
								/>

								<NormalInput
									label="Nome completo"
									id={`fullName-${newAuthor.id}`}
									placeholder="Nome do autor"
								/>

								<NormalInput
									label="Curso"
									id={`curso-${newAuthor.id}`}
									placeholder="Curso atual"
								/>

								<NormalInput
									label="E-mail"
									id={`email-${newAuthor.id}`}
									placeholder="emailexemplo@email.com"
								/>

								<NormalInput
									label="Instituição Referente"
									id={`instituicao-${newAuthor.id}`}
									placeholder="Instituição do autor"
								/>
							</div>
						))}
						<div
							className="mb-8 flex cursor-pointer flex-wrap items-center justify-center gap-5 rounded-md bg-[#DEDEDE] px-4 py-3"
							onClick={handleAddAutores}
						>
							<button className="m-0 flex h-[2rem] w-[2.2rem] items-center justify-center rounded-full border-[1px] border-slate-900 p-0">
								<p className="text-xl font-bold ">+</p>
							</button>
							<p>Adicionar mais autores</p>
						</div>

						{/* submit button  */}
						<div className="flex w-full items-center justify-center gap-5">
							<DefaultButton
								label="Voltar"
								backgroundColorHex="#8A8A8A"
								onClick={() => router.back()}
							/>
							<DefaultButton
								label="Enviar"
								backgroundColorHex="#4B00E0"
								onClick={() => router.push('/areal-dashboard/meus-arquivos')}
							/>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const customStyles = {
	control: (provided: any) => ({
		...provided,
		width: '100%',
		height: 'auto',
		borderRadius: '0.375rem',
		border: '1',
		background: 'white',
		fontSize: '0.875rem',
	}),
};
