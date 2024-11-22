import React from 'react';

import useClipboard from '@/hooks/useClipboard';

interface CustomClipInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	customWidth?: string;
}

const ClipInput: React.FC<CustomClipInputProps> = ({
	label,
	customWidth,
	...inputProps
}) => {
	const { copyToClipboard } = useClipboard();
	return (
		<div
			className="mb-5 flex w-[45%] flex-col"
			style={{
				width: customWidth,
			}}
		>
			<label className="mb-2 text-sm font-medium" htmlFor="link">
				{label}
			</label>

			<div className="flex rounded-md border border-gray-300 bg-white ">
				<input
					className="w-full rounded-md border-0 bg-white px-4 py-2 text-sm outline-none"
					type="url"
					{...inputProps}
					name={inputProps.id}
				/>
				<button
					className="rounded-md bg-[#B7B7B7] px-4 py-2 text-center text-base"
					onClick={() => copyToClipboard(inputProps.value?.toString())}
					type="button"
				>
					Copiar
				</button>
			</div>
		</div>
	);
};

export default ClipInput;
