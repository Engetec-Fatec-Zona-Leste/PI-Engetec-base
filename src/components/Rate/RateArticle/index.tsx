'use client';

import { useState } from "react";

type RateArticleProps = {
	handleOptionClick: (option: string) => void;
};

export default function RateArticle({ handleOptionClick }: RateArticleProps) {
	const [currentOption, setCurrentOption] = useState('rate');
	const [comentarioAutores, setComentarioAutores] = useState('');
	const [comentarioOrg, setcomentarioOrg] = useState('');
	

	return (
		<div className="container mt-52 flex flex-col justify-center">
			<h1
				className="text-center text-3xl font-bold text-black"
				style={{ color: '#4B00E0' }}
			>
				Avaliar Artigo
			</h1>
			<h2 className="text-center" style={{ color: '#000000' }}>
				A média é calculada conforme as perguntas são respondidas
			</h2>

			<div className="flex flex-col w-3/5 bg-transparent border-2
			border-black rounded-xl p-5 shadow-md ml-72 mt-12 justify-center items-center"
			>
				<h1 className="border-2 border-sky-400 font-bold p-4 w-28 text-center 
				rounded-xl">Média: 0</h1>
			
				<div className="mb-8 flex flex-col w-9/12 mt-8" >
					<label className="mb-2 text-base font-medium text-center" htmlFor="abstract">
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
			<div className="mb-8 flex flex-col w-9/12 mt-8" >
					<label className="mb-2 text-base font-medium text-center" htmlFor="abstract">
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

		<div className="mt-8 flex flex-row justify-center items-center gap-6">

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
