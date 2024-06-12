import React from 'react';

import { CiFilter, CiSearch } from 'react-icons/ci';

const SearchFilter = () => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center justify-between gap-4">
				Filtrar
				<CiFilter />
			</div>
			<div className="flex items-center justify-center gap-4">
				Procurar
				<CiSearch />
			</div>
		</div>
	);
};

export default SearchFilter;
