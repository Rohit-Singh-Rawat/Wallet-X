import React, { useEffect } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';

const DashBoard = () => {
	return (
		<div className='flex bg-[black]'>
			<SideBar></SideBar>
			<div className='bg-black w-full h-full fe text-white'>
				<Header username={'rohit'}></Header>
				<div className=' flex justify-between '>
					<div>
						<Balance amount='50000'></Balance>
						<History></History>
					</div>
					<Users></Users>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
