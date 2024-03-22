import React, { useState } from 'react';

const EyeComponent = ({ showPass, setShowPass }) => {
	return (
		<div
			className='w-[20px] h-[20px] text-[#a7aab9] flex justify-center mr-1 ml-2 items-center'
			onClick={() => setShowPass(!showPass)}
		>
			{showPass ? (
				<svg
					width='24'
					height='24'
					strokeWidth='1.5'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4.5 8C7.5 14.5 16.5 14.5 19.5 8'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M16.8162 11.3175L19.5 15'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M12 12.875V16.5'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M7.18383 11.3175L4.5 15'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			) : (
				<svg
					viewBox='0 0 576 512'
					xmlns='http://www.w3.org/2000/svg'
					fill='#a7aab9'
				>
					<path d='m572.52 241.4c-54.23-105.81-161.59-177.4-284.52-177.4s-230.32 71.64-284.52 177.41a32.35 32.35 0 0 0 0 29.19c54.23 105.81 161.59 177.4 284.52 177.4s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zm-284.52 158.6a144 144 0 1 1 144-144 143.93 143.93 0 0 1 -144 144zm0-240a95.31 95.31 0 0 0 -25.31 3.79 47.85 47.85 0 0 1 -66.9 66.9 95.78 95.78 0 1 0 92.21-70.69z' />
				</svg>
			)}
		</div>
	);
};

export default EyeComponent;
