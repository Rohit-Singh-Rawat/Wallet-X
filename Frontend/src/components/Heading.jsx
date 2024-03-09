import React from 'react'

const Heading = ({ label }) => {
	return (
		<div id='high' className='flex justify-center mb-6 items-center w-full  m-auto'>
			<h1 className='text-[65px] text-center  font-[600] text-white '>
				{label}
				<span className='text-[#D8FF42]  font-mono  leading-3 text-[70px] font-[900]'>
					.
				</span>
			</h1>
		</div>
	);
};

export default Heading;
