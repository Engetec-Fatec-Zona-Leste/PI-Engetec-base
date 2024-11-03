import React, { useEffect, useState } from 'react';

interface RatingProps {
	title: string;
	onRatingChange: (value: number) => void;
	defaultRating?: number;
	disabled?: boolean;
}

const Rating: React.FC<RatingProps> = ({
	title = 'Avaliação',
	onRatingChange,
	defaultRating,
	disabled,
}) => {
	const [selectedRating, setSelectedRating] = useState<number | null>(
		defaultRating || null
	);

	useEffect(() => {
		// Define selectedRating com defaultRating sempre que ele muda
		if (defaultRating !== undefined) {
			setSelectedRating(defaultRating);
		}
	}, [defaultRating]);

	const handleRatingChange = (value: number) => {
		if (!disabled) {
			// Impede a mudança se estiver desativado
			setSelectedRating(value);
			onRatingChange(value);
		}
	};

	return (
		<fieldset className="flex w-full items-center justify-between gap-4 p-4">
			<span className="text-sm font-bold text-gray-600">
				Ruim <br className="flex justify-center" />
				<span style={{ marginLeft: '8px' }}>(1)</span>
			</span>

			<div className="flex flex-row-reverse gap-12">
				{[1, 2, 3, 4, 5].reverse().map((value) => (
					<React.Fragment key={value}>
						<input
							type="radio"
							id={`radio-${value}-${title}`}
							name={`rating-${title}`}
							value={value}
							checked={selectedRating === value}
							onChange={() => handleRatingChange(value)}
							className="peer hidden"
							disabled={disabled}
						/>
						<label
							htmlFor={`radio-${value}-${title}`}
							className={`h-8 w-8 cursor-pointer rounded-full border-2 border-black
                bg-white transition
                hover:bg-gray-200 peer-checked:border-black peer-checked:bg-black`}
						></label>
					</React.Fragment>
				))}
			</div>

			<span className="text-sm font-bold text-gray-600">
				Muito Bom <br className="flex justify-center" />
				<span style={{ marginLeft: '25px' }}>(5)</span>
			</span>
		</fieldset>
	);
};

export default Rating;
