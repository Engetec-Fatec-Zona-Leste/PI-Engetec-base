import { Dispatch, SetStateAction, useState } from 'react';

import { FaTimes } from 'react-icons/fa';

interface CustomIncrementInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	customWidth?: string;
	arrayValue?: string[];
	setArrayValue?: Dispatch<SetStateAction<string[]>>;
}

const IncrementInput: React.FC<CustomIncrementInputProps> = ({
	label,
	customWidth,
	...inputProps
}) => {
	const [arrayValue, setArrayValue] = useState(['']);

	const handleAddItem = () => {
		const lastItem = arrayValue[arrayValue.length - 1];
		if (lastItem.trim() !== '') {
			setArrayValue((prevValues) => [...prevValues, '']);
		}
	};

	const handleRemoveItem = (index: number) => {
		setArrayValue((prevValues) => prevValues.filter((_, i) => i !== index));
	};

	const handleInputChange = (index: number, value: string) => {
		setArrayValue((prevValues) => {
			const updatedValues = [...prevValues];
			updatedValues[index] = value;
			return updatedValues;
		});
	};

	return (
		<div
			className="mb-5 flex w-full flex-col"
			style={{
				width: customWidth ? customWidth : '100%',
			}}
		>
			<label className="mb-2 text-sm font-medium" htmlFor="areas">
				{label}
			</label>
			<div>
				<div className="mb-3">
					<div className="flex w-full items-center justify-around rounded-md border border-gray-300 bg-white px-4 py-2">
						<input
							className="w-full bg-white text-sm outline-none"
							type="text"
							name="arrayValue"
							value={arrayValue[arrayValue.length - 1]}
							onChange={(e) =>
								handleInputChange(arrayValue.length - 1, e.target.value)
							}
							placeholder={inputProps.placeholder}
							required
						/>

						<div
							className="m-0 flex h-[2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-full border-[1px] border-slate-900 p-0"
							onClick={handleAddItem}
						>
							<p className="text-xl font-bold">+</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap gap-2.5">
					{arrayValue.slice(0, -1).map((area, index) => (
						<div
							key={index}
							className="flex items-center rounded-full border border-gray-300 bg-white px-2 py-0.5"
						>
							<div className="w-full">
								<input
									className="w-full rounded-md border-0 bg-white text-sm outline-none"
									type="text"
									name={`${inputProps.name}[]`}
									value={area}
									onChange={(e) => handleInputChange(index, e.target.value)}
									required
								/>
							</div>
							<div
								className="ml-2 cursor-pointer rounded-full px-1"
								style={{
									backgroundColor: '#ef0037',
								}}
								onClick={() => handleRemoveItem(index)}
							>
								<FaTimes className="w-2 text-white" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default IncrementInput;
