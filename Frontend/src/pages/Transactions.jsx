import React from 'react';
import TransactionBox from '../components/TransactionBox';
import { SideBar } from '../components/SideBar';

const Transactions = () => {

	return (
		<div className='bg-black text-white'>
			<SideBar></SideBar>
            <TransactionBox></TransactionBox>
			<div>
				<div>deddd</div>
			</div>
		</div>
	);
};

export default Transactions;
