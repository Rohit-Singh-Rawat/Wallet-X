import React, { useEffect, useState } from 'react';
import TransactionBox from '../components/TransactionBox';
import { SideBar } from '../components/SideBar';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { transactionAtom } from '../store/atom/TransactionInfo';
import TransactionDiv from '../components/TransactionDiv';
const transactions = [
	{
		transactionId: 'transaction2',
		type: 'credit',
		accountInfo: {
			accountId: 'account3',
			userInfo: {
				firstName: 'Bob',
				lastName: 'Johnson',
				avatar: '#F08080',
			},
		},
		time: '2024-03-09T09:45:00.000Z', // March 9th
		amount: 300,
	},
	{
		transactionId: 'transaction5',
		type: 'debit',
		accountInfo: {
			accountId: 'account6',
			userInfo: {
				firstName: 'Frank',
				lastName: 'Wilson',
				avatar: '#FFB6C1',
			},
		},
		time: '2024-03-20T11:45:00.000Z', // March 20th
		amount: 150,
	},
	{
		transactionId: 'transaction4',
		type: 'credit',
		accountInfo: {
			accountId: 'account5',
			userInfo: {
				firstName: 'Emma',
				lastName: 'Davis',
				avatar: '#87CEEB',
			},
		},
		time: '2024-03-16T13:30:00.000Z', // March 16th
		amount: 100,
	},
	{
		transactionId: 'transaction9',
		type: 'credit',
		accountInfo: {
			accountId: 'account10',
			userInfo: {
				firstName: 'Jack',
				lastName: 'Thompson',
				avatar: '#FF1493',
			},
		},
		time: '2024-03-29T14:45:00.000Z', // March 29th
		amount: 150,
	},
	{
		transactionId: 'transaction6',
		type: 'debit',
		accountInfo: {
			accountId: 'account7',
			userInfo: {
				firstName: 'Grace',
				lastName: 'Martinez',
				avatar: '#4682B4',
			},
		},
		time: '2024-03-23T16:30:00.000Z', // March 23rd
		amount: 450,
	},
	{
		transactionId: 'transaction8',
		type: 'debit',
		accountInfo: {
			accountId: 'account9',
			userInfo: {
				firstName: 'Ivy',
				lastName: 'Garcia',
				avatar: '#00FF00',
			},
		},
		time: '2024-03-27T12:00:00.000Z', // March 27th
		amount: 350,
	},
	{
		transactionId: 'transaction7',
		type: 'credit',
		accountInfo: {
			accountId: 'account8',
			userInfo: {
				firstName: 'Henry',
				lastName: 'Anderson',
				avatar: '#00FFFF',
			},
		},
		time: '2024-03-25T09:15:00.000Z', // March 25th
		amount: 250,
	},
	{
		transactionId: 'transaction10',
		type: 'debit',
		accountInfo: {
			accountId: 'account11',
			userInfo: {
				firstName: 'Kelly',
				lastName: 'Parker',
				avatar: '#FFD700',
			},
		},
		time: '2024-03-31T15:30:00.000Z', // March 31st
		amount: 200,
	},
	{
		transactionId: 'transaction3',
		type: 'debit',
		accountInfo: {
			accountId: 'account4',
			userInfo: {
				firstName: 'Charlie',
				lastName: 'Brown',
				avatar: '#FFA07A',
			},
		},
		time: '2024-03-12T14:15:00.000Z', // March 12th
		amount: 200,
	},
	{
		transactionId: 'transaction1',
		type: 'debit',
		accountInfo: {
			accountId: 'account2',
			userInfo: {
				firstName: 'Alice',
				lastName: 'Smith',
				avatar: '#90EE90',
			},
		},
		time: '2024-03-05T10:30:00.000Z', // March 5th
		amount: 500,
	},
];

console.log(transactions);


const Transactions = () => {
	const [monthlyTransactions, setMonthlyTransactions] = useState([]);
	useEffect(() => {
		const CalculateMonthlyTransactions = () => {
			let monthlyTrans = {};
			transactions.forEach((transaction) => {
				const date = new Date(transaction.time);
				const month = `${date.toLocaleString('default', {
					month: 'long',
				})}-${date.getFullYear()}`;
				if (!monthlyTrans[month]) {
					monthlyTrans[month] = [];
				}
				monthlyTrans[month].push(transaction);
			});
			monthlyTrans = Object.entries(monthlyTrans).sort((month1, month2) => {
				return new Date(month2[1][0].time) - new Date(month1[1][0].time);
			});
			monthlyTrans.forEach((monthTransactions) => {
				monthTransactions[1].sort(
					(tran1, tran2) => new Date(tran2.time) - new Date(tran1.time)
				);
			});

			setMonthlyTransactions((m) => monthlyTrans);
		};

		CalculateMonthlyTransactions();
	}, [transactions]);
	return (
		<div className='flex bg-black'>
			<TransactionBox></TransactionBox>
			<SideBar></SideBar>
			<div className='bg-black text-white w-full h-full'>
				<div className='flex p-10 flex-col'>
					<h1 className='text-4xl mt-5 mb-10'>Transactions</h1>
					<div >
						{monthlyTransactions.map(([month, transactions]) => {
							return (
								<div
									key={month}
									className='border-[#1a1a1a] border-2 rounded-md mt-5'
								>
									<h1 className='bg-[#1A1A1A] text-lg p-3 pl-15'>{month}</h1>
									{transactions.map((transaction) => {
										return (
											<TransactionDiv
												transaction={transaction}
												key={transaction.transactionId}
											></TransactionDiv>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
