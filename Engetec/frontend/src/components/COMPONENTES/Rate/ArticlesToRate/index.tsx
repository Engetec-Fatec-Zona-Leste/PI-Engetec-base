'use client';

import Title from '@/components/COMPONENTES/Title';

type ArticlesToRateProps = {
	handleOptionClick: (option: string) => void;
};

export default function ArticlesToRate({
	handleOptionClick,
}: ArticlesToRateProps) {
	return (
		<div>
			<div className="container mt-96 flex justify-center">
				<Title
					title="Not implemented"
					subtitle="Screen not implemented"
					colorHex="#000000"
				/>
			</div>
		</div>
	);
}
