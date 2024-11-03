import React, { useState } from 'react';

import Select, { ActionMeta, OnChangeValue, StylesConfig } from 'react-select';

export type FixedOptionsType = {
	label: string;
	value: number;
	isFixed: boolean;
};

const styles: StylesConfig<FixedOptionsType, true> = {
	multiValue: (base, state) => {
		return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
	},
	multiValueLabel: (base, state) => {
		return state.data.isFixed
			? { ...base, fontWeight: 'normal', color: 'white', paddingRight: 6 }
			: base;
	},
	multiValueRemove: (base, state) => {
		return state.data.isFixed ? { ...base, display: 'none' } : base;
	},
	control: (provided: any) => ({
		...provided,
		width: '100%',
		height: 'auto',
		borderRadius: '0.375rem',
		border: '1',
		background: '#B7B7B7',
		fontSize: '0.875rem',
	}),
};

const colourOptions: FixedOptionsType[] = [
	{
		label: 'caixa',
		value: 0,
		isFixed: true,
	},
	{
		label: 'papel',
		value: 1,
		isFixed: true,
	},
	{
		label: 'plastico',
		value: 2,
		isFixed: true,
	},
	{
		label: 'computador',
		value: 3,
		isFixed: false,
	},
	{
		label: 'matematica',
		value: 4,
		isFixed: false,
	},
];

const orderOptions = (values: readonly FixedOptionsType[]) => {
	return values
		.filter((v) => v.isFixed)
		.concat(values.filter((v) => !v.isFixed));
};

type DisabledSelectType = {
	isDisabled: boolean;
	options: FixedOptionsType[];
	label: string;
	id: string;
};

export default function DisabledSelect({
	isDisabled,
	options,
	id,
	label,
}: DisabledSelectType) {
	const [value, setValue] = useState<readonly FixedOptionsType[]>(
		orderOptions(options)
	);

	const onChange = (
		newValue: OnChangeValue<FixedOptionsType, true>,
		actionMeta: ActionMeta<FixedOptionsType>
	) => {
		switch (actionMeta.action) {
			case 'remove-value':
			case 'pop-value':
				if (actionMeta.removedValue.isFixed) {
					return;
				}
				break;
			case 'clear':
				newValue = options.filter((v) => v.isFixed);
				break;
		}

		setValue(orderOptions(newValue));
	};

	return (
		<div className="mb-5 flex w-[45%] flex-col">
			<label className="mb-2 text-sm font-medium" htmlFor="areas">
				{label}
			</label>
			<div className="w-full">
				<Select
					id={id}
					name={id}
					value={value}
					isMulti
					styles={styles}
					isClearable={value.some((v) => !v.isFixed)}
					className="basic-multi-select"
					classNamePrefix="select"
					onChange={onChange}
					options={options}
					isDisabled={isDisabled}
				/>
			</div>
		</div>
	);
}
