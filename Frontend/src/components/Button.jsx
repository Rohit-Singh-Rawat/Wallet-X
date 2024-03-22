import React from 'react';

const Button = ({ label, onClick, loading }) => {

	return (
		<button
			onClick={onClick}
			type='button'
			className={`rounded-full gap-2 sm:gap-3 justify-center flex mt-5 bg-[#D8FF42] hover:shadow-[#54583b]/50 shadow-lg hover:bg-[#beec08]  py-[5px]  sm:py-[10px] text-black text-lg font-[700] ${
				loading ? 'pl-10 pr-1 sm:pl-12 sm:pr-2' : ' px-10 sm:px-12'
			} `}
		>
			{label}
			{loading}
		</button>
	);
};

export default Button;
