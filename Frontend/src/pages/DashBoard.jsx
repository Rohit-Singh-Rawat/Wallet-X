import React, { useEffect } from 'react'
import { SideBar } from '../components/SideBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import History from '../components/History'
import Header from '../components/Header'

const DashBoard = () => {

  
  return (
		<div className='flex bg-[black]'>
			<SideBar></SideBar>
			<div className='bg-black w-full h-full text-white'>
				<Header></Header>
				<Balance amount='50000'></Balance>
				<Users></Users>
        <History></History>
			</div>
		</div>
	);
}

export default DashBoard