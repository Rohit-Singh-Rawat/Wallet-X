import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { transactionAtom } from '../store/atom/TransactionInfo';


const History = ({ transactions }) => {

	return (
		<div className=' sm:w-[80%] row-auto lg:ml-20   justify-center md:justify-start gap-7   flex flex-col sm:min-w-[400px]   bg-[#1A1A1A]'>
			<div className=' pt-10 px-6 flex items-baseline justify-between'>
				<h1 className='text-xl'>Recent Transactions</h1>
				<Link to={'/transactions'}> 
					<h5 className='text-yellow-300 text-sm'>See all</h5>
				</Link>
			</div>
			<div className='mb-5'>
				{transactions.map((transaction) => (
					<Transaction
						key={transaction.transactionId}
						transaction={transaction}
					></Transaction>
				))}
			</div>
			<div></div>
		</div>
	);
};
const Transaction = ({ transaction }) => {
	const setTransactionInfo = useSetRecoilState(transactionAtom);
	function showTransaction(tran){
		setTransactionInfo((info) =>{
			return {
				...info,
				display: true,
				transactionInfo: {
					transactionId: tran.transactionId,
					type: tran.type,
					accountInfo: {
						accountId: tran.accountInfo.accountId,
						userInfo: {
							firstName: tran.accountInfo.userInfo.firstName,
							lastName: tran.accountInfo.userInfo.lastName,
							avatar: tran.accountInfo.userInfo.avatar,
						},
					},
					time: tran.time,
					amount: tran.amount,
				},
			};
			})
		
	}
	const date = new Date(transaction.time);

	const time = `${date.toLocaleString('default', {
		month: 'short',
	})} ${date.getDate()}, ${date.getFullYear()} ${
		date.getHours() % 12 || 12
	}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
	return (
		<div className='flex justify-between items-center cursor-pointer mx-3 py-3 rounded-md	 px-5 hover:bg-[#373636]' onClick={() => showTransaction(transaction)}>
			<div className='flex gap-5 items-center'>
				<div
					className='w-8 h-8 flex text-center font-bold items-center justify-center uppercase rounded-full border-[1px] border-[#3a3a3a]'
					style={{ background: transaction.accountInfo.userInfo.avatar }}
				>
					{transaction.accountInfo.userInfo.firstName[0]}
				</div>
				<div>
					<div>
						{transaction.accountInfo.userInfo.firstName +
							' ' +
							transaction.accountInfo.userInfo.lastName}
					</div>
					<div className='text-sm text-[#7e7e7e]'>{time}</div>
				</div>
			</div>

			<div className={`${transaction.type == 'credit' ? 'text-green-700' : ''}`}>
				{transaction.type == 'credit' ? '+' : null}₹{transaction.amount}
			</div>
		</div>
	);
};

export default History;
