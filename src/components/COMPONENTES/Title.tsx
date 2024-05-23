import React from 'react';

type TitleType = {
    title: string,
    subtitle: string,       
    color: string,       
}
const Title = ({
    title,
    subtitle,
    color
}: TitleType) => {
	return (
		<div className='mb-10'>
			<h1 className={`text-center text-3xl font-bold text-[${color}]`}>
				{title}
			</h1>

			<p className="text-center text-base text-black">
				{subtitle}
			</p>
		</div>
	);
};

export default Title;
