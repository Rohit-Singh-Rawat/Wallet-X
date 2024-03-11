import React from 'react';
const Header = ({ username }) => {
	return (
		<div className=' text-sm sm:text-lg flex justify-between p-2 items-center border-b-2 border-[#1A1A1A]'>
			<div className=' p-3 ml-2'>
				Welcome back,{' '}
				<span className='text-lg sm:text-2xl capitalize font-extrabold ml-2'>
					{username} 👋
				</span>
			</div>

			<div className='uppercase w-7 h-7 sm:w-10 mr-3 sm:h-10 font-bold sm:font-black sm:text-2xl text-black bg-gradient-to-br from-white sm:from-40% from-60% to-yellow-500 rounded-full flex justify-center items-center'>
				{username[0]}
			</div>
		</div>
	);
};

export default Header;
