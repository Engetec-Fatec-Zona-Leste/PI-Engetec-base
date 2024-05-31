'use client';

import { useState } from 'react';

import { BsHeart, BsStar } from 'react-icons/bs';

import CheckInput from '@/components/COMPONENTES/CheckInput';
import ClipInput from '@/components/COMPONENTES/ClipInput';
import DefaultButton from '@/components/COMPONENTES/DefaultButton';
import FileInput from '@/components/COMPONENTES/FileInput';
import FixedSelect from '@/components/COMPONENTES/FixedSelect';
import Footer from '@/components/COMPONENTES/Footer';
import Navbar from '@/components/COMPONENTES/Navbar';
import NormalInput from '@/components/COMPONENTES/NormalInput';
import OutlineButton from '@/components/COMPONENTES/OutlineButton';
import Select from '@/components/COMPONENTES/Select';
import TextAreaInput from '@/components/COMPONENTES/TextAreaInput';
import Title from '@/components/COMPONENTES/Title';

export default function UseComponentsPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="">
			<Navbar />
			<div className="container">
				<div className="w-[60vw]">
					<Title
						title="Título"
						colorHex="#5321BF"
						subtitle="Exemplos de uso dos componentes"
					/>
					<form className="form flex-col items-center bg-white">
						{/* <p>Possui todos os atributos de um input comum:</p> */}
						<NormalInput
							id="email"
							label="E-mail"
							placeholder="E-mail de Usuário"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<NormalInput
							id="password"
							label="Senha"
							placeholder="Senha de Usuário"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							hidden
						/>

						<TextAreaInput label="Text Area" id="textAreas" rows={7} />
						<FileInput id="file" label="File Input" disabled={false} />
						{}
						<CheckInput
							disabled={false}
							id="check"
							label="Check INput"
							selected={true}
						/>
						<ClipInput label="Clip INput" id="clip" />
						<FixedSelect
							id="fixedSelect"
							isDisabled={false}
							label="Fixed Select"
							options={[]}
						/>
						<Select
							disabled={false}
							id="select"
							label="Select Simples"
							options={[]}
							preSelect={0}
						/>

						{/* <p>Botao default com fundo colorido, tem todos os atributos de um botao tem a opcao de ter ou nao um icon:</p> */}
						<DefaultButton
							label="Preenchido"
							backgroundColorHex="#5321BF"
							type="submit"
						/>
						<DefaultButton
							label="Preenchido"
							backgroundColorHex="#ec4aef"
							icon={<BsHeart />}
							type="submit"
						/>
						{/* <p>Botao outline - fundo colorido - tem a opcao de ter ou nao um icon:</p> */}
						<OutlineButton
							label="Outline"
							outlineColorHex="#5321BF"
							textColorHex="#5321BF"
							type="submit"
						/>
						<OutlineButton
							label="Outline"
							outlineColorHex="#ec4aef"
							textColorHex="#5321BF"
							icon={<BsStar />}
							type="submit"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
