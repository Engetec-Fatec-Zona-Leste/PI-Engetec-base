import React from 'react';

type FormButtonsType = {
    labelBack?: string;
    labelBackClass?: string;
    label: string;
    labelClass?: string

}

const FormButtons = ({label,labelBack, labelBackClass, labelClass}:FormButtonsType) => {
	return (
		<div className="flex items-center justify-center gap-5">
            {labelBack && (
                <button
                    className={`mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white bg-[#8A8A8A] ${labelBackClass ? labelBackClass : ''}`}
                >
                    {labelBack}
                </button>
            )}
			<button
				className={`mb-6 w-1/5 rounded-xl border-none p-2 text-center text-base font-medium text-white bg-[#4B00E0] ${labelClass ? labelClass : ''}`}
				type="submit"
			>
				{label}
			</button>
		</div>
	);
};

export default FormButtons;
