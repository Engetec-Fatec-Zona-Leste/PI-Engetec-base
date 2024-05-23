export type OptionsType = {
	label: string;
	value: number;
};

type SelectType = {
	options: OptionsType[];
	preSelect: number;
	disabled: boolean;
	label: string;
	id: string
};

const Select = ({ preSelect, disabled, options, id, label }: SelectType) => {
	return (
		<div className="mb-5 flex w-[45%] flex-col">
			<label className="mb-2 text-sm font-medium" htmlFor="turno">
				{label}
			</label>
			<select
				name={id}
				id={id}
				className={`h-full w-full rounded-md border border-gray-300 bg-white px-4 py-2 ${
					disabled ? 'bg-[#B7B7B7]' : 'bg-white'
				}  text-sm outline-none`}
				disabled={disabled}
			>
				{options.map((area, index) => {
					return (
						<option
							value={area.label}
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
