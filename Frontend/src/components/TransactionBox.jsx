import React, { useState } from 'react';
import { transactionAtom } from '../store/atom/TransactionInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const TransactionBox = () => {
	const navigate = useNavigate();
	const [info, setInfo] = useRecoilState(transactionAtom);
	const date = new Date(info.transactionInfo.time);

	const time = `${date.toLocaleString('default', {
		month: 'long',
	})} ${date.getDate()}, ${date.getFullYear()} at ${
		date.getHours() % 12 || 12
	}:${
		date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
	} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
	return (
		<div
			className={`fixed z-20 text-white     flex justify-center items-center w-full h-[100dvh] ${
				info.display ? '' : 'hidden'
			}`}
		>
			<div
				className=' bg-[#463e5c49]  w-full h-full z-1  fixed'
				onClick={() => setInfo({ ...info, display: false })}
			></div>
			<button
				className='z-50 fixed top-0 m-5 sm:m-16 right-0'
				onClick={() => setInfo({ ...info, display: false })}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className=' w-10 h-10 sm:w-14 sm:h-14'
				>
					<path
						fillRule='evenodd'
						d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z'
						clipRule='evenodd'
					/>
				</svg>
			</button>
			<div className='bg-black p-12  z-40 rounded-xl w-full h-full    sm:w-[400px] sm:h-auto  flex flex-col items-center sm:items-stretch '>
				<div className='flex flex-col justify-center items-center gap-6 sm:gap-3'>
					<div
						className='w-14 h-14 flex text-2xl text-center font-bold items-center justify-center uppercase rounded-full border-[1px] border-[#3a3a3a]'
						style={{
							background: info.transactionInfo.accountInfo.userInfo.avatar,
						}}
					>
						{info.transactionInfo.accountInfo.userInfo.firstName[0]}
					</div>
					<div>
						{info.transactionInfo.type == 'credit' ? 'From ' : 'To '}
						{info.transactionInfo.accountInfo.userInfo.firstName +
							' ' +
							info.transactionInfo.accountInfo.userInfo.lastName}
					</div>
					<div className='text-4xl font-bold flex justify-center items-center gap-2'>
						₹{info.transactionInfo.amount}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6 text-green-600 '
						>
							<path
								fillRule='evenodd'
								d='M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div>
						<button className='bg-green-500 font-semibold  px-5 py-1 rounded-full' onClick={()=>{
							navigate(
								`/send?id=${info.transactionInfo.accountInfo.userInfo.userId	}&name=${info.transactionInfo.accountInfo.userInfo.firstName} ${info.transactionInfo.accountInfo.userInfo.lastName}`
							);
						}}>
							Pay {info.transactionInfo.type == 'debit' ? 'Again' : null}
						</button>
					</div>
					<div className='text-sm border-t-[1px] my-6 pt-8 sm:my-3 sm:p-5'>{time}</div>
				</div>
				<div className='border-[1px] mt-8 sm:mt-0  min-w-[80%] flex flex-col gap-2 rounded-xl p-5  border-gray-500'>
					<div>
						<h5>Transaction ID</h5>
						<p className='text-sm text-[#7e7e7e]'>
							{info.transactionInfo.transactionId}
						</p>
					</div>
					<div >
						<h5>
							To:{' '}
							{info.transactionInfo.type == 'credit'
								? info.firstName + ' ' + info.lastName
								: info.transactionInfo.accountInfo.userInfo.firstName +
								  ' ' +
								  info.transactionInfo.accountInfo.userInfo.lastName}
						</h5>
						<p className='text-sm text-[#7e7e7e]'>
							{info.transactionInfo.type == 'credit'
								? info.accountId
								: info.transactionInfo.accountInfo.accountId}
						</p>
					</div>
					<div>
						<h5>
							From:{' '}
							{info.transactionInfo.type == 'debit'
								? info.firstName + ' ' + info.lastName
								: info.transactionInfo.accountInfo.userInfo.firstName +
								  ' ' +
								  info.transactionInfo.accountInfo.userInfo.lastName}
						</h5>
						<p className='text-sm text-[#7e7e7e]'>
							{info.transactionInfo.type == 'debit'
								? info.accountId
								: info.transactionInfo.accountInfo.accountId}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionBox;
