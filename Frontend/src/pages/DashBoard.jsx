import React, { useEffect } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';
import TransactionBox from '../components/TransactionBox';


const dashboard = {
	firstName: 'John',
	lastName: 'Doe',
	balance: 1000,
	transactions: [
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
			time: '2024-03-12T10:30:00.000Z',
			amount: 500,
		},
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
			time: '2024-03-12T11:45:00.000Z',
			amount: 300,
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
			time: '2024-03-12T13:15:00.000Z',
			amount: 200,
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
			time: '2024-03-12T14:30:00.000Z',
			amount: 100,
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
			time: '2024-03-12T15:45:00.000Z',
			amount: 150,
		},
	],
};


const DashBoard = () => {
	return (
		<div className='flex bg-[black]'>
			<SideBar></SideBar>
			<TransactionBox></TransactionBox>
			<div className='bg-black w-full h-full fe text-white'>
				<Header username={dashboard.firstName}></Header>
				<div className=' flex justify-between '>
					<div>
						<Balance amount={dashboard.balance}></Balance>
						<History transactions={dashboard.transactions}></History>
					</div>
					<Users></Users>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
