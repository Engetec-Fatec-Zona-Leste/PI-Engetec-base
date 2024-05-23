import { useCallback, useState } from 'react';
import AlertCard from '@/components/COMPONENTES/AlertCard';

function useClipboard() {

  const [showCardClip, setShowCardClip] = useState(false);
	const renderClipCard = (clipRes?: boolean): React.ReactNode => {
		if (!clipRes) {
			return (
				<AlertCard
					message="Texto copiado para área de transferência"
					show={showCardClip && !clipRes}
				/>
			);
		}
		if (clipRes) {
			return (
				<AlertCard
					message="Cardoso cornao falhou em copiar o texto"
					show={showCardClip && clipRes}
					color="text-red-600"
				/>
			);
		}
	};

  const copyToClipboard = useCallback(async (text: string) => {
    try {
			await navigator.clipboard.writeText(text);
			console.log('Texto copiado para a área de transferência');
			setShowCardClip(true);
			renderClipCard(true);
			setTimeout(() => {
				setShowCardClip(false);
			}, 3000);
		} catch (err) {
			console.log('Falha ao copiar o texto', err);
			setShowCardClip(true);
			renderClipCard(false);
			setTimeout(() => {
				setShowCardClip(false);
			}, 3000);
		}
  }, []);

  return {copyToClipboard, renderClipCard};
}

export default useClipboard;