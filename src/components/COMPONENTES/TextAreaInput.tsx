import React from 'react';

type TextAreaInput = {
	label: string,
    id: string,
    placeholder: string
    disabled?: boolean,
	value: string,
	rows?: number
	onChange?(e:any):void
}

const TextAreaInput = ({
	id,
	label,
	placeholder,
	value,
	disabled,
	onChange,
	rows
}:TextAreaInput) => {
	return (
		<div className="mb-5 flex w-[45%] flex-col">
			<label className="mb-2 text-sm font-medium" htmlFor={id}>
				{label}
			</label>

			<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
				<textarea
					className="w-full rounded-md border-0 bg-white text-sm outline-none"
					name={id}
					id={id}
					placeholder={placeholder}
					rows={rows}
					value={value}
					onChange={onChange}
					required
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default TextAreaInput;
