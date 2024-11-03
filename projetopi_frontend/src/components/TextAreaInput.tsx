import React from 'react';

interface CustomInputProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	customWidth?: string;
}

const TextAreaInput: React.FC<CustomInputProps> = ({
	label,
	customWidth,
	...txtAreaProps
}) => {
	return (
		<div className="mb-5 flex w-[45%] flex-col" style={{ width: customWidth }}>
			<label className="mb-2 text-sm font-medium" htmlFor={txtAreaProps.id}>
				{label}
			</label>

			<div className="rounded-md border border-gray-300 bg-white px-4 py-2">
				<textarea
					className="w-full rounded-md border-0 bg-white text-sm outline-none"
					{...txtAreaProps}
					name={txtAreaProps.id}
				/>
			</div>
		</div>
	);
};

export default TextAreaInput;
