'use client';

import {
	Id,
	Slide,
	ToastContainer,
	ToastContent,
	ToastOptions,
	toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../postcss.config';

interface ToastProviderProps {
	children: React.ReactNode;
}

export const defaultToastOptions: ToastOptions = {
	position: 'top-right',
	autoClose: 4000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
	transition: Slide,
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

/**
 * Componente ToastProvider - Provedor de contexto para notificações
 */
export default function ToastProvider({ children }: ToastProviderProps) {
	return (
		<>
			{children}
			<ToastContainer
				bodyClassName={() => 'text-sm font-[#000000] font-med block p-3'}
				position="bottom-center"
				autoClose={3000}
			/>
		</>
	);
}

/**
 * Função para exibir toasts
 *
 * @param {ToastType} type - Tipo de toast a ser exibido
 * @param {ToastContent} content - Conteúdo do toast
 * @param {ToastOptions} [options=defaultToastOptions] - Opções personalizadas para o toast
 * @return {Id} - ID do toast
 */
export const showToast = (
	type: ToastType,
	content: ToastContent,
	options: Partial<ToastOptions> = {}
): Id => {
	const optionsToApply = { ...defaultToastOptions, ...options };

	switch (type) {
		case 'success':
			return toast.success(content, optionsToApply);
		case 'error':
			return toast.error(content, optionsToApply);
		case 'info':
			return toast.info(content, optionsToApply);
		case 'warning':
			return toast.warn(content, optionsToApply);
		case 'default':
			return toast(content, optionsToApply);
		default:
			return toast(content, optionsToApply);
	}
};
