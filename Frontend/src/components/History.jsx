import React, { useState } from 'react'

const History = () => {
  const [transactions, setTransactions] = useState([
		{ amount: 150, from: 'John', to: 'Alice', time: new Date('2023-01-15') },
		{ amount: 50, from: 'Alice', to: 'Bob', time: new Date('2023-01-18') },
		]);
  return (
		<div className=' sm:w-[80%] row-auto lg:ml-20  md:h-[200px] justify-center md:justify-start gap-7 items-center  flex sm:min-w-[400px]   bg-[#1A1A1A]'>
			<div>
				<h1>Recent Transactions</h1>
			</div>
		</div>
	);
}

export default History
const Transaction = ({transaction})=>{
  return <div className='flex justify-between items-center mx-7 my-5 pb-5 px-5 border-b-[0.5px] '>
		<div className='flex items-center gap-4'>
			<div className='w-7 h-7 flex justify-center rounded-full items-center bg-white text-black uppercase'>
				{user.firstName[0]}
			</div>
			<div>{user.firstName}</div>
		</div>
		
	</div>;
}