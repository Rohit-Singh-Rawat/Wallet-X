import React, { useEffect } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';

const Settings = () => {
	return (
		<div className='flex bg-[black]'>
			<SideBar current={'Settings'}></SideBar>
			<div className='bg-black w-full h-full  text-white'>
				<div className='flex flex-col gap-7 mt-10 mx-8'>
					<h1 className='text-4xl font-bold'>Account</h1>
					<h2 className='text-2xl mt-5 font-semibold'>Profile</h2>
					<p className='text-sm font-extralight'>
						This information will be displayed public to be careful what you
						share
					</p>
					<div className='flex gap-10 mx-5 my-3 items-center'>
						First Name
						<input
							type='text'
							placeholder='Enter your first name'
							className='bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
						/>
					</div>
					<div className='flex gap-10 my-3 mx-5 items-center'>
						Last Name{' '}
						<input
							type='text'
							placeholder='Enter your Last name'
							className='bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
						/>{' '}
					</div>
					<h2 className='text-2xl  mt-8 font-semibold'>Security</h2>
					<div className='md:flex justify-between p-6 border-b-[0.1px] border-yellow-50'>
						<div className='flex gap-10 m-5 items-center'>
							Current Password{' '}
							<input
								type='text'
								placeholder='Enter your Current password'
								className='bg-transparent pl-3 text-sm outline-none w-full p-2 rounded-xl border-[0.5px] '
							/>
						</div>
						<div className='flex gap-10 m-5 items-center mr-40 '>
							New Password
							<input
								type='text'
								placeholder='Enter your New password'
								className='bg-transparent pl-3 text-sm outline-none w-full p-2 rounded-xl border-[0.5px] '
							/>
						</div>
					</div>
					<div className='flex justify-end gap-10 items-center mr-20'>
						<button className='bg-red-500 p-2 px-4 rounded-xl'>Cancel</button>
						<button className='bg-yellow-500 p-2 px-4 rounded-xl'>Save</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
