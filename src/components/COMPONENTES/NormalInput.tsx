import React from 'react';

type NormalInputType = {
    label: string,
    id: string,
    placeholder: string
    disabled?: boolean,
	value?: string,
	onChange?(e:any):void
}

const NormalInput = ({
    id,
    label,
    placeholder,
    disabled,
	onChange,
	value,
}: NormalInputType) => {
	return (
		<div className="mb-5 flex w-[45%] flex-col">
			<label className="mb-2 text-sm font-medium" htmlFor={id}>
				{label}
			</label>

			<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
				<input
					className="w-full rounded-md border-0 bg-white text-sm outline-none"
					type='text'
					name={id}
					id={id}
					placeholder={placeholder}
					required
					disabled={disabled}
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
	);
};

export default NormalInput;
