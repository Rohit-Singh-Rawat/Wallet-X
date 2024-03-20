import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SendMoneyBox = ({ id, name }) => {
	const [errMsg, setErrMsg] = useState('');
	const [isTransferring, SetIsTransferring] = useState(false);
	const [amount, setAmount] = useState(0);
	const [msg, setMsg] = useState('');
	const navigate = useNavigate();

		
	

	const transferMoney = async () => {
		try {
			const token = `Bearer ${localStorage.getItem('token')}`;
			const response = await axios({
				method: 'post',
				url: 'http://localhost:3000/api/v1/account/transfer',
				headers: {
					authorization: token,
				},
				data: {
					to: id,
					amount: amount,
				},
			});
			setMsg(response?.data?.message)
		} catch (error) {
			console.log(error)
			if (!error?.response) {
				setErrMsg('No Server Response');
			} else if (error?.response) {
				setErrMsg(error?.response?.data?.message);
			}
		}
	};
	return (
		<div className='flex text-white flex-col justify-center border-4	gap-5 border-black ease-in duration-500  hover:shadow-[15px_15px_rgba(0,255,0,1)] w-[30%]    bg-black'>
			<div className='p-5 pt-10 '>
				<div className='text-3xl text-center font-bold '>
					<h1>Send Money</h1>
				</div>
				<div className='flex flex-col justify-center gap-5 my-8 items-center'>
					<div className='flex justify-center w-14 h-14  bg-white rounded-full text-black items-center text-2xl font-bold'>
						{name[0]}
					</div>
					<div>{name}</div>
				</div>
				<div className='flex justify-center gap-5 p-4 items-center'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 48 48'
							id='rupee'
							className='h-10 w-10'
						>
							<path
								fill='#e1ff46'
								d='M24,5A19,19,0,1,0,43,24,19,19,0,0,0,24,5Zm-.29,26.71A1,1,0,0,1,23,32a1,1,0,0,1-.71-.29l-6-6A1,1,0,0,1,17,24H19a3,3,0,0,0,3.05-3A3,3,0,0,0,19,18H16a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2H23a4.83,4.83,0,0,1,1,2.94,5,5,0,0,1-4.61,5l4.32,4.34A1,1,0,0,1,23.71,31.71Zm10-3.51a1,1,0,0,1-1.41,0l-4.44-4.39a1.08,1.08,0,0,0-1.54,0,1,1,0,0,0-.32.75,1.05,1.05,0,0,0,.32.76l.73.73a1,1,0,0,1-1.4,1.42l-.74-.73a3.05,3.05,0,0,1,0-4.35,3.09,3.09,0,0,1,4.36,0l4.43,4.39A1,1,0,0,1,33.71,28.2Z'
								className='color3b3c3d svgShape'
							></path>
							<path
								fill='#e1ff46'
								d='M24,48A24,24,0,1,1,48,24,24,24,0,0,1,24,48ZM24,2A22,22,0,1,0,46,24,22,22,0,0,0,24,2Z'
								className='color3b3c3d svgShape'
							></path>
						</svg>
					</div>
					<div className='border-2 p-2 border-gray-400 rounded-lg flex-grow  '>
						<input
							type='number'
							inputMode='numeric'
							name=''
							min={'0'}
							placeholder='Amount (in Rs)'
							id=''
							onChange={(e) => setAmount((p) => e.target.value)}
							className='outline-none w-full bg-transparent appearance-none'
						/>
					</div>
				</div>
			</div>

			<div className=' flex flex-col gap-4 bg-white py-10 px-5 '>
				{msg? <div className='text-sm text-green-500'> {msg}</div>: errMsg ? <div className='text-sm text-red-500'>{errMsg}</div> : <></>}
				<div className='justify-around gap-5  flex'>
					<button
						className='bg-black p-3 px-5 flex-grow'
						onClick={() => navigate('/dashboard')}
						disabled={isTransferring}	
					>
						Cancel
					</button>
					<button
						className='bg-transparent text-yellow-500 flex-grow border-yellow-500 border-2 p-3 px-5 '
						onClick={() => transferMoney()}
						disabled={isTransferring}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default SendMoneyBox;
