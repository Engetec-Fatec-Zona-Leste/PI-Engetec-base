'use client';

import { useState } from 'react';

import Title from '@/components/COMPONENTES/Title';

type RateArticleProps = {
	handleOptionClick: (option: string) => void;
};

export default function RateArticle({ handleOptionClick }: RateArticleProps) {
	const [comentarioAutores, setComentarioAutores] = useState('');
	const [comentarioOrg, setcomentarioOrg] = useState('');

	return (
		<div className="container mt-52 flex flex-col justify-center">
			<Title
				title="Avaliar Artigo"
				subtitle="A média é calculada conforme as perguntas são respondidas"
				colorHex="#4B00E0"
			/>

			<div
				className="ml-72 mt-12 flex w-3/5 flex-col
			items-center justify-center rounded-xl border-[1px] border-black bg-transparent p-5 shadow-md"
			>
				<h1
					className="w-28 rounded-xl border-2 border-sky-400 p-4 text-center 
				font-bold"
				>
					Média: 0
				</h1>

				<div className="mb-8 mt-8 flex w-9/12 flex-col">
					<label
						className="mb-2 text-center text-base font-medium"
						htmlFor="abstract"
					>
						Comentário para os autores:
					</label>

					<div
						className="rounded-xl border bg-white px-3 py-2"
						style={{ borderColor: '#828282' }}
					>
						<textarea
							className="w-full rounded-xl border-0 bg-white text-sm outline-none"
							name="comentarioAutores"
							id="comentarioAutores"
							placeholder="Comentário....."
							value={comentarioAutores}
							onChange={(e) => setComentarioAutores(e.target.value)}
							rows={6}
						/>
					</div>
				</div>
				<div className="mb-8 mt-8 flex w-9/12 flex-col">
					<label
						className="mb-2 text-center text-base font-medium"
						htmlFor="abstract"
					>
						Comentário para os organizadores:
					</label>

					<div
						className="rounded-xl border bg-white px-3 py-2"
						style={{ borderColor: '#828282' }}
					>
						<textarea
							className="w-full rounded-xl border-0 bg-white text-sm outline-none"
							name="comentarioOrg"
							id="comentarioOrg"
							placeholder="Comentário....."
							value={comentarioOrg}
							onChange={(e) => setcomentarioOrg(e.target.value)}
							rows={6}
						/>
					</div>
				</div>

				<div className="mb-5 flex flex-col">
					<label
						className="mb-2 flex flex-row gap-3 text-base"
						htmlFor="needAvaliation"
					>
						<input
							type="checkbox"
							className="w-6"
							id="needAvaliation"
							name="needAvaliation"
						/>
						Permitir Reenvio
					</label>
				</div>
			</div>

			<div className="mt-8 flex flex-row items-center justify-center gap-6">
				<button
					className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
					type="submit"
					style={{ backgroundColor: '#8A8A8A' }}
				>
					Voltar
				</button>

				<button
					className="w-40 rounded-xl border p-2.5 text-center text-sm font-medium text-white"
					type="submit"
					style={{ backgroundColor: '#4B00E0' }}
				>
					Enviar
				</button>
			</div>
		</div>
	);
}
