import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import Favicon from '@/assets/logo.svg';
import ScreenProvider from '@/contexts/ScreenProvider';
import ToastProvider from '@/contexts/ToastProvider';

import StyledComponentsRegistry from '../lib/registry';
import './globals.css';

const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Engetec',
	description: 'Plataforma de eventos',
	icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body className={quicksand.className + ' bg-[#F4F4F4]'}>
				<StyledComponentsRegistry>
					<ScreenProvider>
						<ToastProvider>{children}</ToastProvider>
					</ScreenProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
