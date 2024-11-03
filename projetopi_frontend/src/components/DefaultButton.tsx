import React, { ReactElement } from 'react';

interface CustomtButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	backgroundColorHex?: string;
	textColorHex?: string;
	icon?: ReactElement;
	customWidth?: string;
}

const DefaultButton: React.FC<CustomtButtonInterface> = ({
	label,
	backgroundColorHex,
	textColorHex,
	icon,
	customWidth,
	...buttonProps
}) => {
	return (
		<button
			style={{
				backgroundColor: backgroundColorHex,
				color: textColorHex,
				width: customWidth,
			}}
			{...buttonProps}
			className={`
            mb-6 flex w-1/5 items-center
            rounded-xl border-none px-4 py-2 text-center
            text-base font-medium 

            ${!backgroundColorHex && 'bg-[#8A8A8A]'}
            ${!textColorHex && 'text-white'}
            
            `}
		>
			<p className="flex-1">{label}</p>
			<p className="text-xl">{icon && icon}</p>
		</button>
	);
};

export default DefaultButton;
