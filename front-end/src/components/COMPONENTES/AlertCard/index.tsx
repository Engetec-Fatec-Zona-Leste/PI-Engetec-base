'use client';

import React from 'react';

type AlertCardProps = {
	message: string;
	show: boolean;
	color?: string;
};

function AlertCard({ message, show, color }: AlertCardProps) {
	return (
		<div
			className={
				show
					? 'fixed right-4 top-36 z-50 h-max w-max rounded-md border-[1px] bg-[#ffff] p-2 shadow-md transition-all delay-300'
					: 'fixed right-[-2000px] top-36 z-50 h-max w-max rounded-md border-[1px] bg-[#ffff] p-2 shadow-md transition-all delay-300'
			}
		>
			<span className={color ?? 'text-zinc-950'}>{message}</span>
		</div>
	);
}

export default AlertCard;
