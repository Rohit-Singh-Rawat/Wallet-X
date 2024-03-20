import React, { useEffect, useState } from 'react';
import SendMoneyBox from '../components/SendMoneyBox';
import { useSearchParams } from 'react-router-dom';

const SendMoney = () => {
	const [searchParams] = useSearchParams();
	const [errMsg, setErrMsg] = useState('');
	const id = searchParams.get('id');
	const name = searchParams.get('name')
	if (!id || id.trim() == '' || !name || name.trim() == '') {
		setErrMsg('404');
		return;
	}
	return (
		<div className='flex justify-center items-center h-[100vh] bg-white	'>
			<SendMoneyBox name={name} id={id}></SendMoneyBox>
		</div>
	);
};

export default SendMoney;
