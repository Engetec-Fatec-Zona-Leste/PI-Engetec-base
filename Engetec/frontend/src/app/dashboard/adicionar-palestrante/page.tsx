'use client';

import { FaRegUser } from 'react-icons/fa';

import CheckInput from '@/components/COMPONENTES/CheckInput';
import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/NavbarAuthenticated';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import SelectCom from '@/components/COMPONENTES/Select';
import Title from '@/components/COMPONENTES/Title';
import alunos from '@/mocks/Aluno';

export default function AdicionarPalestrantePage() {
	const checkboxPeriodo = ['Matutino', 'Vespertino', 'Noturno'];

	return (
		<div>
			<Navbar />
			<div className="container mb-6 mt-52 flex justify-center ">
				<form className="w-[60vw] ">
					<Title
						title="Adicionar Palestrante"
						colorHex="#EF0037"
						subtitle="Selecione o apresentador do artigo para apresenta-lo durante o evento"
					/>

					{alunos.map((aluno, key) => (
						<div
							className="card  my-10 flex flex-wrap justify-center gap-5 rounded-md"
							key={key}
						>
							<div className="mb-5 flex w-[45%] items-center gap-5 text-[1.8rem]">
								<FaRegUser />
								<p>Autor</p>
								<CheckInput
									label="Palestrante"
									disabled={false}
									id={`palestrante-${key}`}
									selected={aluno.palestrante}
								/>
							</div>

							<SelectCom
								options={checkboxPeriodo.map((tur, i) => ({
									label: tur,
									value: i,
								}))}
								preSelect={aluno.periodo}
								disabled={true}
								label="Turno"
								id="turno"
							/>

							<NormalInput
								disabled={true}
								id="fullName"
								label="Nome completo"
								placeholder="Nome de Autor"
								value={aluno.nome}
							/>

							<NormalInput
								disabled={true}
								id="curso"
								label="Curso"
								placeholder="Curso atual"
								value={aluno.curso}
							/>

							<NormalInput
								disabled={true}
								id="email"
								label="E-mail"
								placeholder="emailexemplo@email.com"
								value={aluno.email}
							/>

							<NormalInput
								disabled={true}
								id="instituicao"
								label="Instituição Referente"
								placeholder="Instituição do autor"
								value={aluno.instituicao}
							/>
						</div>
					))}

					<div className="flex w-full items-center justify-center gap-5">
						<DefaultButton label="Voltar" backgroundColorHex="#8A8A8A" />
						<DefaultButton label="Finalizar" backgroundColorHex="#4B00E0" />
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}
