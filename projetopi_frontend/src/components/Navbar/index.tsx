'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { FaRegUser } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';

import logo from '@/assets/logo.svg';
import { showToast } from '@/contexts/ToastProvider';

import * as S from './styles';

export default function Navbar() {
	const [user, setUser] = useState('');
	const [authenticated, setAuthenticated] = useState(true);
	useEffect(() => {
		const verifySession = async () => {
			const isAuthenticated = localStorage.getItem('authenticated') === 'true';
			const role = localStorage.getItem('role');
			setAuthenticated(isAuthenticated);
			setUser(role ?? 'Autor');
		};
		verifySession();
	}, []);

	const router = useRouter();
	const [currentOption, setCurrentOption] = useState('/');
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const currentRoute = window.location.pathname;
		setCurrentOption(currentRoute);
	}, []);

	const handleOptionClick = (option: any) => {
		setCurrentOption(option);
		router.push(`${option}`);
	};

	return (
		<div className="fixed left-0 right-0 top-0 z-50 bg-[#F4F4F4] px-16 py-6 text-2xl shadow-md">
			<div className="flex items-center justify-between">
				<div className="flex gap-5">
					<GiHamburgerMenu
						className="cursor-pointer"
						onClick={() => setOpenMenu(!openMenu)}
					/>
					<GoHome className="cursor-pointer" onClick={() => router.push('/')} />
				</div>
				<a href="/">
					<Image
						src={logo}
						alt="Logo Engetec"
						height={50}
						className="mr-2 cursor-pointer"
						onClick={() => router.push('/')}
					/>
				</a>
				<FaRegUser className="cursor-pointer" />
			</div>

			<div
				className={`
            absolute top-0
			transition-all duration-500 ease-in-out
            ${openMenu ? 'fixed left-0' : 'left-[-100vw]'}
            bg-opacity-0s flex h-[100vh] w-[100vw]
            flex-col items-center justify-start gap-5 overflow-auto bg-[#fcfcfc00] pb-10`}
				onClick={() => setOpenMenu(!openMenu)}
			>
				<div
					className="absolute left-0 flex h-full w-[25%] flex-col items-start justify-start gap-5 overflow-auto bg-[#fcfcfc] bg-opacity-100 px-10 pb-10 shadow-2xl"
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className="relative left-[90%] cursor-pointer py-3"
						onClick={(e) => setOpenMenu(!openMenu)}
					>
						X
					</div>

					<S.OptionMenu
						onClick={() => {
							handleOptionClick('/');
							setOpenMenu(false);
						}}
						className="cursor-pointer text-base"
						selected={currentOption === '/'}
					>
						Página Inicial
					</S.OptionMenu>

					{authenticated && user === 'Autor' && (
						<div className="navbar-item flex flex-col gap-3">
							<S.OptionMenu
								onClick={() => {
									handleOptionClick('/dashboard/meus-arquivos');
									setOpenMenu(false);
								}}
								className="cursor-pointer text-base"
								selected={currentOption === '/dashboard/meus-arquivos'}
							>
								Meus Artigos
							</S.OptionMenu>
							<S.SubOptionMenu
								onClick={() => {
									handleOptionClick(
										'/dashboard/meus-arquivos/arquivos-finalizados'
									);
									setOpenMenu(false);
								}}
								className="cursor-pointer text-base"
								selected={
									currentOption ===
									'/dashboard/meus-arquivos/arquivos-finalizados'
								}
							>
								Meus Artigos Finalizados
							</S.SubOptionMenu>
						</div>
					)}

					{authenticated && user === 'Avaliador' && (
						<S.OptionMenu
							onClick={() => {
								handleOptionClick('/dashboard/avaliar-artigo');
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === '/dashboard/avaliar-artigo'}
						>
							Avaliar Arquivo
						</S.OptionMenu>
					)}

					{authenticated && user === 'Admin' && (
						<>
							<S.OptionMenu
								onClick={() => {
									handleOptionClick('/dashboard/meus-eventos-criados');
									setOpenMenu(false);
								}}
								className="cursor-pointer text-base"
								selected={currentOption === '/dashboard/meus-eventos-criados'}
							>
								Eventos Criados
							</S.OptionMenu>
							<S.OptionMenu
								onClick={() => {
									handleOptionClick('/dashboard/gerenciamento-avaliacoes');
									setOpenMenu(false);
								}}
								className="cursor-pointer text-base"
								selected={
									currentOption === '/dashboard/gerenciamento-avaliacoes'
								}
							>
								Gerenciamento de Avaliações
							</S.OptionMenu>
							<div className="navbar-item flex flex-col gap-3">
								<S.OptionMenu
									onClick={() => {
										handleOptionClick('/dashboard/gerenciamento-site');
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={currentOption === '/dashboard/gerenciamento-site'}
								>
									Gerenciamento do Site
								</S.OptionMenu>
								<S.SubOptionMenu
									onClick={() => {
										handleOptionClick(
											'/dashboard/gerenciamento-site/cadastrar-admin'
										);
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={
										currentOption ===
										'/dashboard/gerenciamento-site/cadastrar-admin'
									}
								>
									Gerenciar Admin
								</S.SubOptionMenu>
								<S.SubOptionMenu
									onClick={() => {
										handleOptionClick(
											'/dashboard/gerenciamento-site/cadastrar-editorchefe'
										);
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={
										currentOption ===
										'/dashboard/gerenciamento-site/cadastrar-editorchefe'
									}
								>
									Gerenciar Editor Chefe
								</S.SubOptionMenu>
								<S.SubOptionMenu
									onClick={() => {
										handleOptionClick(
											'/dashboard/gerenciamento-site/cadastrar-organizador'
										);
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={
										currentOption ===
										'/dashboard/gerenciamento-site/cadastrar-organizador'
									}
								>
									Gerenciar Organizador
								</S.SubOptionMenu>
								<S.SubOptionMenu
									onClick={() => {
										handleOptionClick(
											'/dashboard/gerenciamento-site/cadastrar-instituicao'
										);
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={
										currentOption ===
										'/dashboard/gerenciamento-site/cadastrar-instituicao'
									}
								>
									Gerenciar Instituição
								</S.SubOptionMenu>
								<S.SubOptionMenu
									onClick={() => {
										handleOptionClick(
											'/dashboard/gerenciamento-site/cadastrar-area'
										);
										setOpenMenu(false);
									}}
									className="cursor-pointer text-base"
									selected={
										currentOption ===
										'/dashboard/gerenciamento-site/cadastrar-area'
									}
								>
									Gerenciar Áreas
								</S.SubOptionMenu>
							</div>
						</>
					)}
					{authenticated && (
						<S.OptionMenu
							onClick={() => {
								handleOptionClick('/dashboard/certificados');
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === '/dashboard/certificados'}
						>
							Certificados
						</S.OptionMenu>
					)}
					<S.OptionMenu
						onClick={() => {
							handleOptionClick('/dashboard/proceedings');
							setOpenMenu(false);
						}}
						className="cursor-pointer text-base"
						selected={currentOption === '/dashboard/proceedings'}
					>
						Proceedings
					</S.OptionMenu>
					<S.OptionMenu
						onClick={() => {
							handleOptionClick('/eventos');
							setOpenMenu(false);
						}}
						className="cursor-pointer text-base"
						selected={currentOption === '/eventos'}
					>
						Anais Anteriores
					</S.OptionMenu>

					{!authenticated && (
						<S.OptionMenu
							onClick={() => {
								handleOptionClick('/cadastro');
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === '/cadastro'}
						>
							Cadastrar-se
						</S.OptionMenu>
					)}

					{!authenticated ? (
						<S.OptionMenu
							onClick={() => {
								handleOptionClick('/login');
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === '/login'}
						>
							Login
						</S.OptionMenu>
					) : (
						<S.OptionMenu
							key={15}
							onClick={async () => {
								try {
									localStorage.removeItem('authenticated');
									localStorage.removeItem('role');
									const res = await axios.get('/api/logout');
									showToast('success', res.data.message);
									router.push('/login');
								} catch (error) {
									showToast('error', error?.message);
								}
								setOpenMenu(false);
							}}
							className="cursor-pointer text-base"
							selected={currentOption === '/logout'}
						>
							Logout
						</S.OptionMenu>
					)}
				</div>
			</div>
		</div>
	);
}
