import React, { useEffect, useState } from 'react';
import TransactionBox from '../components/TransactionBox';
import { SideBar } from '../components/SideBar';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { transactionAtom } from '../store/atom/TransactionInfo';
import TransactionDiv from '../components/TransactionDiv';
import axios from '../axios';
import noTran from '../assets/imgs/no-transaction.png';
import { SideBarOpen } from '../store/atom/sideBarAtom';
import loading from '../assets/imgs/Loading Square.gif';

const Transactions = () => {
	const [transactions, setTransactions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errMsg, setErrMsg] = useState('');
	const setTransactionInfo = useSetRecoilState(transactionAtom);
	const setSideBarOpen = useSetRecoilState(SideBarOpen);
	useEffect(() => {
		setSideBarOpen(false);
	}, []);
	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const token = `Bearer ${localStorage.getItem('token')}`;

			try {
				const response1 = await axios({
					method: 'get',
					url: '/account/info',
					headers: {
						authorization: token,
					},
				});
				const response2 = await axios({
					method: 'get',
					url: '/account/transactions',
					headers: {
						authorization: token,
					},
				});
				setTransactionInfo((info) => {
					return {
						...info,
						display: false,
						firstName: response1.data.firstName,
						lastName: response1.data.lastName,
						accountId: response1.data.accountId,
					};
				});
				setTransactions(response2.data.transactions);

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
		transactions.length ? setIsLoading(false) : null;
	}, [transactions]);
	return (
		<>
			{errMsg ? (
				<div className='text-6xl bg-black flex justify-center items-center text-white w-full h-[100vh]'>
					{errMsg}
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
				<div className='flex bg-black w-full h-full min-h-[100dvh]'>
					<TransactionBox></TransactionBox>
					<SideBar active='Transactions'></SideBar>
					<div className='bg-black text-white w-full h-full'>
						<div className='flex p-10 flex-col '>
							<div className='flex items-center gap-5 justify-start mt-5 mb-10 '>
								<button
									className='block w-6 sm:w-8 lg:hidden'
									onClick={() => setSideBarOpen((prev) => !prev)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										data-name='Layer 261'
										viewBox='0 0 46.99 46.88'
										id='Menu'
									>
										<rect
											width='23.5'
											height='9.29'
											x='23.5'
											fill='#ffffff'
											rx='4.64'
											className='color231f20 svgShape'
										></rect>
										<rect
											width='9.41'
											height='9.29'
											x='.28'
											fill='#ffffff'
											rx='4.64'
											className='color231f20 svgShape'
										></rect>
										<rect
											width='9.41'
											height='9.29'
											x='37.52'
											y='37.59'
											fill='#ffffff'
											rx='4.64'
											className='color231f20 svgShape'
										></rect>
										<rect
											width='23.5'
											height='9.29'
											x='.47'
											y='37.59'
											fill='#ffffff'
											rx='4.64'
											className='color231f20 svgShape'
										></rect>
										<rect
											width='46.99'
											height='9.29'
											y='18.85'
											fill='#ffffff'
											rx='4.64'
											className='color231f20 svgShape'
										></rect>
									</svg>
								</button>
								<h1 className='text-2xl sm:text-4xl '>Transactions</h1>
							</div>

							{!transactions.length ? (
								<div className='flex flex-col gap-5 pt-20 justify-center items-center'>
									<img
										src={noTran}
										className='w-[20%] h-[20%] min-w-60'
									/>
									<h1 className='text-4xl '>No Transactions</h1>
								</div>
							) : (
								<div>
									{monthlyTransactions.map(([month, transactions]) => {
										return (
											<div
												key={month}
												className='border-[#1a1a1a] border-2 rounded-md mt-5'
											>
												<h1 className='bg-[#1A1A1A] text-lg p-3 pl-15'>
													{month}
												</h1>
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
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Transactions;
