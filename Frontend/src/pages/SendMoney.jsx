import React, { useEffect, useState } from 'react';
import SendMoneyBox from '../components/SendMoneyBox';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

const SendMoney = () => {
	const [searchParams] = useSearchParams();
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();
	const id = searchParams.get('id');
	const name = searchParams.get('name');
	useEffect(() => {
		if (!id || id.trim() === '' || !name || name.trim() === '') {
			navigate('/404');
		}
	}, [id, name, navigate]);
	return (
		<>
			{!id || !name ? (
				<Navigate to='/404'></Navigate>
			) : (
				<div className='flex justify-center items-center h-[100vh] bg-white	'>
					<SendMoneyBox
						name={name}
						id={id}
					></SendMoneyBox>
				</div>
			)}
		</>
	);
};

export default SendMoney;
