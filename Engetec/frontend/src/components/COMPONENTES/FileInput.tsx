import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiPaperclip, FiUpload } from 'react-icons/fi';

type FileInputType = {
	label: string;
	id: string;
	disabled?: boolean;
};

const FileInput = ({ disabled, id, label }: FileInputType) => {
	const [file, setFile] = useState<File | null>(null);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleFileDelete = () => {
		setFile(null);
	};
	return (
		<div className="mb-5 flex w-[40%] flex-col">
			<label className="mb-2 text-sm font-medium" htmlFor="file">
				{label}
			</label>

			<div className="flex w-full flex-col-reverse items-center justify-center gap-2 rounded-md border-0 bg-gray-200">
				<label
					htmlFor={id}
					className="flex h-full w-full cursor-pointer rounded-md bg-[#5000F0] px-4 py-2  text-neutral-50 "
				>
					<p className="flex-1 text-center">Selecionar Arquivo</p>
					<FiUpload className="text-blacks mx-2 h-5 w-5 justify-self-end" />{' '}
				</label>
				<input
					type="file"
					id={id}
					name={id}
					style={{ display: 'none' }}
					onChange={(e) => handleFileChange(e)}
					required
					disabled={disabled}
				/>
				{file && (
					<div className="flex h-full w-full items-center gap-3 rounded-md bg-[#00B7FF] px-4 py-2">
						<FiPaperclip />
						<span className="flex-1 text-center">{file ? file.name : ''}</span>
						<button className="cursor-pointer" onClick={handleFileDelete}>
							<FaTimes className="w-4 text-white" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default FileInput;
