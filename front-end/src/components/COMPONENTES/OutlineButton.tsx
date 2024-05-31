import React, { ReactElement } from 'react';

interface CustomtButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	outlineColorHex: string;
	textColorHex?: string;
	icon?: ReactElement;
	customWidth?: string;
}

const OutlineButton: React.FC<CustomtButtonInterface> = ({
	label,
	outlineColorHex,
	textColorHex,
	icon,
	customWidth,
	...buttonProps
}) => {
	return (
		<button
			{...buttonProps}
			style={{
				borderColor: outlineColorHex,
				color: textColorHex,
				width: customWidth,
			}}
			className={`
            flex w-1/5 items-center
            rounded-xl border-[1px] px-4 py-2
            text-center text-base 
            font-medium
			${!outlineColorHex && 'border-[#8A8A8A]'}
            ${!textColorHex && 'text-[#8A8A8A]'}
            `}
		>
			<p className="flex-1">{label}</p>
			<p className="text-xl">{icon && icon}</p>
		</button>
	);
};

export default OutlineButton;
