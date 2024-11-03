'use client';

import RateArticle from '@/components/TabbarRate/TabbarRateForms/RateArticle';
import RateByRanking from '@/components/TabbarRate/TabbarRateForms/RateByRanking';

import * as S from './styles';

type TabbarRateProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
	idArquivo: string;
};

export default function TabbarRate({
	currentOption,
	handleOptionClick,
	idArquivo,
}: TabbarRateProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'articles-rate':
				return (
					<>
						<RateByRanking
							handleOptionClick={handleOptionClick}
							idArquivo={idArquivo}
						/>
					</>
				);
			case 'rate':
				return (
					<RateArticle
						handleOptionClick={() => handleOptionClick('rate')}
						idArquivo={idArquivo}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="flex w-full justify-center">
				<div
					className="absolute z-30 mt-32 flex h-16 w-60 flex-row items-center
				justify-center gap-5 bg-[#F4F4F4] px-16 py-5"
				>
					<div className="flex items-center">
						<S.OptionMenu
							onClick={() => handleOptionClick('articles-rate')}
							selected={currentOption === 'articles-rate'}
						></S.OptionMenu>
					</div>
					<div className="flex flex-row items-center">
						<S.OptionMenu
							onClick={() => handleOptionClick('rate')}
							selected={currentOption === 'rate'}
						></S.OptionMenu>
					</div>
				</div>
				{renderContent()}
			</div>
		</div>
	);
}
