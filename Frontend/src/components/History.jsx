import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { transactionAtom } from '../store/atom/TransactionInfo';
import TransactionDiv from './TransactionDiv';

const History = ({ transactions }) => {

	return (
		
		<div className='  w-full rounded-md row-auto mx-3   justify-center md:justify-start gap-7   flex flex-col   bg-[#1A1A1A]'>
			<div className=' pt-10 px-3 xs:px-6 flex items-baseline justify-between'>
				<h1 className= ' text-lg sm:text-xl'>Recent Transactions</h1>
				<Link to={'/transactions'}> 
					<h5 className='text-yellow-300 text-xs ml-4  sm:ml-0 sm:text-sm'>See all</h5>
				</Link>
			</div>
			<div className='mb-5'>
				{!transactions.length ?<div className='text-center text-2xl my-10'>
					No Transactions
				</div> :  transactions.map((transaction) => (
					<TransactionDiv
						key={transaction.transactionId}
						transaction={transaction}
					></TransactionDiv>
				))}
		
				
			</div>
			<div></div>
		</div>
	);
};


export default History;
