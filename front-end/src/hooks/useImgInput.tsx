// import React, { useCallback, useRef, useState } from 'react';

// // import { useEffect } from 'react';

// type Image = {
// 	previewUrl: string | ArrayBuffer | null;
// 	file: string | ArrayBuffer | null;
// };

// function useImgInput() {
// 	const refInput = useRef<any | null>(null);
// 	const [image, setImage] = useState<Image>();

// 	const renderPreview = (sourceImg?: string): React.ReactNode => {
// 		const showSelector = () => {
// 			refInput?.current?.click();
// 		};

// 		const onImageChanged = () => {
// 			console.log('ao mudar imagem');

// 			if (!refInput?.current?.files?.length) {
// 				return;
// 			}
// 			const file = refInput?.current?.files?.[0];

// 			const fileReader = new FileReader();
// 			fileReader.readAsDataURL(file);
// 			fileReader.onloadend = () => {
// 				setImage({
// 					previewUrl: fileReader.result,
// 					file,
// 				});
// 			};
// 		};
// 		return (
// 			<div className={`h-auto w-auto`} onClick={showSelector}>
// 				{image && (
// 					<div className="">
// 						<img
// 							src={refInput?.current?.files?.[0]}
// 							alt="pré visualização da imagem"
// 							className=""
// 						/>
// 					</div>
// 				)}
// 				<input
// 					type="file"
// 					className="hided"
// 					accept="image/*"
// 					ref={refInput}
// 					onChange={onImageChanged}
// 				/>
// 			</div>
// 		);
// 	};

// 	const setReference = useCallback(async (onSetReference: string) => {
// 		try {
// 			if (!onSetReference) {
// 				return;
// 			}
// 			onSetReference(refInput?.current);

// 			renderPreview(refInput.current);
// 			console.log('url do input img colocado no preview');
// 		} catch (err) {
// 			console.log('falha ao tentar rederizar url', err);
// 		}
// 	}, []);

// 	return { setReference, renderPreview };
// }

// export default useImgInput;
