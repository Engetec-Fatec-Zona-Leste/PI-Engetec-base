import { Dispatch, SetStateAction, useRef } from 'react';

export type OptionsType = {
	label: string;
	value: number;
};

export type SimpleSelectType = {
	label: string;
	value: string | undefined;
};

interface CustomSelectInputProps
	extends React.InputHTMLAttributes<HTMLSelectElement> {
	label: string;
	customWidth?: string;
	options: OptionsType[];
	preSelect: number;
}

const Select: React.FC<CustomSelectInputProps> = ({
	label,
	preSelect,
	options,
	customWidth,
	...inputProps
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<div className="mb-5 flex w-[45%] flex-col" style={{ width: customWidth }}>
			<label className="mb-2 text-sm font-medium" htmlFor="turno">
				{label}
			</label>
			<select
				{...inputProps}
				className={`h-full w-full rounded-md border border-gray-300 bg-white px-4 py-2 ${
					inputProps.disabled ? 'bg-[#B7B7B7]' : 'bg-white'
				}  text-sm outline-none`}
			>
				{options.map((area, index) => {
					return (
						<option
							value={area.value}
							key={index}
							selected={preSelect == index}
						>
							{area.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
