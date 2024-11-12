import { useCallback } from 'react';

import { showToast } from '@/contexts/ToastProvider';

function useClipboard() {
	const copyToClipboard = useCallback(async (text: string | undefined) => {
		try {
			if (text) {
				await navigator.clipboard.writeText(text ? text : '');
				showToast('success', 'Texto copiado para área de transferência');
			}
		} catch (err) {
			showToast('error', `Falha ao copiar o texto: \n ${err}`);
		}
	}, []);

	return { copyToClipboard };
}

export default useClipboard;
