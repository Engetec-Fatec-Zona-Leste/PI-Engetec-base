import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
}

const Pagination1: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	// Função para ir para a página anterior
	const goToPreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	// Função para ir para a próxima página
	const goToNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	// Gera os números de página a serem exibidos
	const getPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	return (
		<div className="mt-16 flex items-center justify-center">
			<button
				onClick={goToPreviousPage}
				disabled={currentPage === 1}
				className="mr-4 rounded-full bg-[#38177A] px-3 py-2 text-gray-700 focus:outline-none disabled:opacity-50"
			>
				<span>
					<FiChevronLeft />
				</span>
			</button>
			<div className="flex items-center space-x-2 px-2">
				{currentPage > 3 && <span className="mr-2"></span>}
				{getPageNumbers().map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => onPageChange(pageNumber)}
						className={`rounded-full bg-[#CBB3FA] px-3 py-1 text-gray-700 focus:outline-none ${
							pageNumber === currentPage ? 'font-bold' : ''
						}`}
					>
						{pageNumber}
					</button>
				))}
				{currentPage < totalPages - 2 && <span className="ml-2"></span>}
			</div>
			<button
				onClick={goToNextPage}
				disabled={currentPage === totalPages}
				className="ml-4 rounded-full bg-[#38177A] px-3 py-2 text-gray-700 focus:outline-none disabled:opacity-50"
			>
				<span>
					<FiChevronRight />
				</span>
			</button>
		</div>
	);
};

export default Pagination1;
