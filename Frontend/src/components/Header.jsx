import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { SideBarOpen } from '../store/atom/sideBarAtom';
const Header = ({ username, avatar }) => {
	const setSideBarOpen = useSetRecoilState(SideBarOpen);
	useEffect(() => {
		setSideBarOpen(false);
	}, []);
	return (
		<div className='text-sm sm:text-lg flex justify-between p-2 items-center border-b-2 border-[#1A1A1A]'>
			<div className='flex gap-10 sm:gap-5   items-center p-3 ml-2'>
				<button
					className='block  w-6 sm:w-7 lg:hidden'
					onClick={() => setSideBarOpen((prev) => !prev)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						data-name='Layer 261'
						viewBox='0 0 46.99 46.88'
						id='Menu'
					>
						<rect
							width='23.5'
							height='9.29'
							x='23.5'
							fill='#ffffff'
							rx='4.64'
							className='color231f20 svgShape'
						></rect>
						<rect
							width='9.41'
							height='9.29'
							x='.28'
							fill='#ffffff'
							rx='4.64'
							className='color231f20 svgShape'
						></rect>
						<rect
							width='9.41'
							height='9.29'
							x='37.52'
							y='37.59'
							fill='#ffffff'
							rx='4.64'
							className='color231f20 svgShape'
						></rect>
						<rect
							width='23.5'
							height='9.29'
							x='.47'
							y='37.59'
							fill='#ffffff'
							rx='4.64'
							className='color231f20 svgShape'
						></rect>
						<rect
							width='46.99'
							height='9.29'
							y='18.85'
							fill='#ffffff'
							rx='4.64'
							className='color231f20 svgShape'
						></rect>
					</svg>
				</button>
				<div className='flex   items-center'>
					Welcome back,{' '}
					<span className='xs:text-lg sm:text-2xl capitalize font-extrabold ml-2'>
						{username} 👋
					</span>
				</div>
			</div>

			<div className='uppercase hidden  w-7 h-7 sm:w-10 mr-3 sm:h-10 font-bold sm:font-black sm:text-2xl text-black bg-gradient-to-br from-white sm:from-40% from-60% to-yellow-500 rounded-full sm:flex justify-center items-center'>
				{username[0]}
			</div>
		</div>
	);
};

export default Header;
