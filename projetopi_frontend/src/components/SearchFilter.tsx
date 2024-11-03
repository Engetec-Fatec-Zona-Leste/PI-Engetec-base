import React from 'react';

import { CiFilter, CiSearch } from 'react-icons/ci';

const SearchFilter = () => {
	return (
		<div className="flex flex-col justify-normal gap-3">
			<div className="flex items-center justify-end gap-4">
				Filtrar
				<CiFilter />
			</div>
			<div className="flex items-center justify-end gap-4">
				Buscar
				<CiSearch />
			</div>
		</div>
	);
};

export default SearchFilter;
