import React, { useEffect, useState } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';
import TransactionBox from '../components/TransactionBox';
import { useRecoilState } from 'recoil';
import { transactionAtom } from '../store/atom/TransactionInfo';
import { useMemo } from 'react';
import axios from '../axios';
import loading from '../assets/imgs/Loading Square.gif';

const DashBoard = () => {
	const [info, setInfo] = useRecoilState(transactionAtom);
	const [errMsg, setErrMsg] = useState('');
	const [dashboardInfo, setDashBoardInfo] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const token = `Bearer ${localStorage.getItem('token')}`;
			try {
				const response = await axios({
					method: 'get',
					url: '/user/dashboard',
					headers: {
						authorization: token,
					},
				});

				setDashBoardInfo(response?.data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				if (!error?.response) {
					setErrMsg('No Server Response');
				} else if (error?.response) {
					setErrMsg(error?.response?.data?.message);
				}
			}
		})();
	}, []);

	useEffect(() => {
		setInfo((info) => {
			return {
				...info,
				display: false,
				firstName: dashboardInfo.firstName,
				lastName: dashboardInfo.lastName,
				accountId: dashboardInfo.accountId,
			};
		});
	}, [dashboardInfo]);

	return (
		<>
			{errMsg ? (
				<div className='flex w-full h-[100vh] bg-black justify-center items-center'>
					<h1 className='text-white   text-center text-7xl'>{errMsg}</h1>
				</div>
			) : isLoading ? (
				<div className='text-4xl sm:text-6xl bg-black  flex flex-col justify-center items-center text-white w-full h-[100vh]'>
					<img
						src={loading}
						alt=''
						className=' w-[50%] sm:w-[40%]  md:w-[30%]  '
					/>
					Loading...
				</div>
			) : (
				<div className='flex bg-[black] w-full h-full min-h-[100dvh]'>
					<SideBar active='Dashboard'></SideBar>
					<TransactionBox></TransactionBox>
					<div className='bg-black w-full h-full flex flex-col text-white pb-10 '>
						<Header username={dashboardInfo?.firstName}></Header>
						<div className=' flex justify-center m-auto gap-5 sm:mt-10  w-full sm:w-[70%] md:w-full flex-col md:flex-row	 '>
							<div className='flex flex-col px-3 min-w-[40%]  items-center justify-stretch'>
								<Balance amount={dashboardInfo?.balance}></Balance>
								<History transactions={dashboardInfo?.transactions}></History>
							</div>

							<Users></Users>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DashBoard;
