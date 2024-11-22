import { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	customWidth?: string;
}
const ImgInput: React.FC<CustomInputProps> = ({
	label,
	customWidth,
	...inputProps
}) => {
	const [file, setFile] = useState<File | null>(null);
	const [previewURL, setPreviewURL] = useState<string | null>(null);
	const [showModal, setShowModal] = useState(false);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];
		setFile(selectedFile || null);
		if (selectedFile) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewURL(reader.result as string);
			};
			reader.readAsDataURL(selectedFile);
		}
	};
	return (
		<div className="mb-6 flex flex-col">
			<label
				className="mb-2 text-center text-sm font-medium"
				htmlFor={inputProps.id}
			>
				{label}
			</label>

			<div
				className={`flex w-full justify-center rounded-md border-0 ${
					previewURL ? 'bg-transparent py-3' : 'bg-gray-200 px-4 py-5'
				}`}
			>
				{!previewURL && ( // Renderiza o ícone de upload somente se não houver previewURL
					<label htmlFor={inputProps.id} className="cursor-pointer">
						<FiUpload className="mx-2 h-5 w-5 text-black" />{' '}
					</label>
				)}

				<div className="flex flex-col items-end">
					<input
						{...inputProps}
						style={{ display: 'none' }}
						onChange={(e) => handleFileChange(e)}
						required
					/>
					{file && (
						<button
							className="-mr-1 -mt-3 cursor-pointer rounded-full bg-red-500 p-0.5"
							onClick={() => {
								setFile(null);
								setPreviewURL(null);
							}}
						>
							<FaTimes className="text-[9px] text-white" />
						</button>
					)}
					{previewURL ? (
						<>
							<img
								src={previewURL}
								alt="Preview"
								className="mr-2 max-h-20 max-w-full cursor-pointer"
								onClick={() => setShowModal(true)}
							/>
							{showModal && (
								<div
									className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80 py-20"
									onClick={() => setShowModal(false)} // Fecha o modal quando o fundo escuro é clicado
								>
									<img
										src={previewURL}
										alt="Preview"
										className="max-h-full max-w-full"
										onClick={() => setShowModal(false)} // fecha o modal quando a imagem é clicada
									/>
								</div>
							)}
						</>
					) : (
						<span className="text-sm">{file ? file.name : ''}</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImgInput;
