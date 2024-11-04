'use client';

import React, { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	customWidth?: string;
}

const NormalInput: React.FC<CustomInputProps> = ({
	label,
	customWidth,
	...inputProps
}) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const handleTogglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	return (
		!inputProps.hidden &&
		(inputProps.type == 'password' ? (
			<>
				<div
					className="mb-5 flex w-[45%] flex-col"
					style={{ width: customWidth }}
				>
					<label className="mb-2 text-sm font-medium" htmlFor="password">
						{label}
					</label>
					<div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5">
						<input
							{...inputProps}
							className="w-11/12 rounded-md border-0 bg-white text-sm outline-none"
							// type={passwordVisible ? 'text' : 'password'}
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
							// name={inputProps.id}
						/>
						{passwordVisible ? (
							<FiEye
								className="h-4 w-4 text-black"
								onClick={handleTogglePasswordVisibility}
							/>
						) : (
							<FiEyeOff
								className="h-4 w-4 text-black"
								onClick={handleTogglePasswordVisibility}
							/>
						)}
					</div>
				</div>
			</>
		) : (
			<>
				<div
					className="mb-5 flex w-[45%] flex-col"
					style={{ width: customWidth }}
				>
					<label className="mb-2 text-sm font-medium" htmlFor={inputProps.id}>
						{label}
					</label>

					<div
						className={`w-full rounded-md border border-gray-300 bg-white px-4 py-2`}
					>
						<input
							{...inputProps}
							className={`w-full rounded-md border-0 bg-white text-sm outline-none `}
							// name={inputProps.id}
							// onChange={inputProps.onChange}
							// value={inputProps.value}
						/>
					</div>
				</div>
			</>
		))
	);
};

export default NormalInput;
