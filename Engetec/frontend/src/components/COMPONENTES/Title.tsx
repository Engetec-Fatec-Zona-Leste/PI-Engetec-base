import React from 'react';

type TitleType = {
	title: string;
	subtitle: string;
	colorHex: string;
};
const Title = ({ title, subtitle, colorHex }: TitleType) => {
	return (
		<div className="mb-10">
			<h1
				style={{ color: colorHex }}
				className={`
			text-center text-3xl font-bold 
			text-[${!colorHex && 'black'}]
			`}
			>
				{title}
			</h1>

			<p className="text-center text-base text-black">{subtitle}</p>
		</div>
	);
};

export default Title;
