'use client';

import Image from 'next/image';
import ArticlesToRate from '../ArticlesToRate';
import RateArticle from '../RateArticle';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { CiBoxList } from "react-icons/ci";
import * as S from './styles';

type NavBarRateProps = {
	currentOption: string;
	handleOptionClick: (option: string) => void;
};

export default function NavBarRate({
	currentOption,
	handleOptionClick,
}: NavBarRateProps) {
	const renderContent = () => {
		switch (currentOption) {
			case 'articles-rate':
				return (
					<ArticlesToRate
                        handleOptionClick={() => handleOptionClick('articles-rate')} />
				);
			case 'rate':
				return (
					<RateArticle handleOptionClick={() => handleOptionClick('rate')} />
				);
			default:
				return null;
		}
	};
	
	return (
		<div>
			<div className="flex justify-center w-full">
				<div className="absolute flex flex-row justify-center items-center w-52 h-16 mt-24
				gap-6 bg-[#F4F4F4] px-16 py-5 shadow-md z-30">
					<div className="flex flex-row items-center">
						<S.OptionMenu
						onClick={() => handleOptionClick('rate')}
						className="flex cursor-pointer text-xs gap-2"
						selected={currentOption === 'rate'}
						>
						<CiBoxList className="h-5 w-5" />
							Artigos
						</S.OptionMenu>
					</div>

					<div className="flex items-center">
						<S.OptionMenu
						onClick={() => handleOptionClick('articles-rate')}
						className="flex cursor-pointer text-xs gap-2"
						selected={currentOption === 'articles-rate'}
						>
						<HiOutlineBookOpen className="h-5 w-5" />
							Avaliação
						</S.OptionMenu>
					</div>
				</div>
				{renderContent()}
			</div>
		</div>
	);
}
