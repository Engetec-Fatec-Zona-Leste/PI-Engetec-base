import React from 'react';

const Pagination2 = () => {
	return (
		<div className="relative bottom-5 left-1/2 z-30 mt-12 flex w-[340px] -translate-x-1/2 justify-center space-x-3 rtl:space-x-reverse">
			<button
				type="button"
				className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
				data-carousel-prev
			>
				<span className="inline-flex items-center justify-center bg-white/30">
					<svg
						className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600 active:bg-slate-600"
				aria-current="true"
				aria-label="Slide 1"
				data-carousel-slide-to="0"
			></button>
			<button
				type="button"
				className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
				aria-current="false"
				aria-label="Slide 2"
				data-carousel-slide-to="1"
			></button>
			<button
				type="button"
				className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
				aria-current="false"
				aria-label="Slide 3"
				data-carousel-slide-to="2"
			></button>
			<button
				type="button"
				className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
				aria-current="false"
				aria-label="Slide 4"
				data-carousel-slide-to="3"
			></button>
			<button
				type="button"
				className="h-1 w-10 rounded-lg bg-slate-400 shadow-lg hover:bg-slate-600"
				aria-current="false"
				aria-label="Slide 5"
				data-carousel-slide-to="4"
			></button>

			<button
				type="button"
				className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
				data-carousel-next
			>
				<span className="inline-flex items-center justify-center bg-white/30">
					<svg
						className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};

export default Pagination2;
