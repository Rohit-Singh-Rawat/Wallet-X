import React, { useEffect, useState } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [exitMsg, setExitMsg] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();
	const clear = () => {
		setExitMsg('Cancelling & returning to DashBoard...');
		setTimeout(() => navigate('/dashboard'), 1000);
	};
	const changeCredential = async () => {
		try {
			const body = {
				firstName: newFirstName,
				lastName: newLastName,
				currentPassword,
				newPassword,
			};
			Object.keys(body).forEach((key) => {
				if (body[key].trim() === '') {
					delete body[key];
				}
			});
			if (Object.keys(body).length == 0) {
				setErrMsg('Pls Enter New Credential');
				return;
			}

			const token = `Bearer ${localStorage.getItem('token')}`;
			const response = await axios({
				method: 'put',
				url: 'http://localhost:3000/api/v1/user/change',
				headers: {
					authorization: token,
				},
				data: body,
			});
			setExitMsg('Updated Successfully, redirecting to Dashboard....');
			setTimeout(() => navigate('/dashboard'), 1000);
		} catch (error) {
			if (!error?.response) {
				setErrMsg('No Server Response');
			} else if (error?.response) {
				setErrMsg(error?.response?.data?.message);
			}
		}
	};

	return (
		<div className='flex bg-[black]'>
			<SideBar current={'Settings'}></SideBar>
			<div className='bg-black w-full h-full  text-white'>
				<div className='flex flex-col gap-7 mt-10 mx-8'>
					<h1 className='text-4xl font-bold'>Account</h1>
					<h2 className='text-2xl mt-5 font-semibold'>Profile</h2>
					<p className='text-sm font-extralight'>
						This information will be displayed public to be careful what you
						share
					</p>
					<div className='flex gap-10 mx-5 my-3 items-center'>
						First Name
						<input
							type='text'
							placeholder='Enter your first name'
							className='bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
							onChange={(e) => setNewFirstName(e.target.value)}
						/>
					</div>
					<div className='flex gap-10 my-3 mx-5 items-center'>
						Last Name{' '}
						<input
							type='text'
							placeholder='Enter your Last name'
							className='bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
							onChange={(e) => setNewLastName(e.target.value)}
						/>{' '}
					</div>
					<h2 className='text-2xl  mt-8 font-semibold'>Security</h2>
					<div className='md:flex justify-between p-6 border-b-[0.1px] border-yellow-50'>
						<div className='flex gap-10 m-5 items-center'>
							Current Password{' '}
							<input
								type='text'
								placeholder='Enter your Current password'
								onChange={(e) => setCurrentPassword(e.target.value)}
								className='bg-transparent pl-3 text-sm outline-none w-full p-2 rounded-xl border-[0.5px] '
							/>
						</div>
						<div className='flex gap-10 m-5 items-center mr-40 '>
							New Password
							<input
								type='text'
								placeholder='Enter your New password'
								onChange={(e) => setNewPassword(e.target.value)}
								className='bg-transparent pl-3 text-sm outline-none w-full p-2 rounded-xl border-[0.5px] '
							/>
						</div>
					</div>
					<div
						className={`flex pl-10 ${
							errMsg || exitMsg ? 'justify-between' : 'justify-end'
						}`}
					>
						{exitMsg ? (
							<div className='text-green-400 text-left'>{exitMsg}</div>
						) : errMsg ? (
							<div className='text-red-400'>{errMsg}</div>
						) : null}
						<div className='flex justify-end gap-10 items-center mr-20'>
							<button
								disabled={exitMsg ? true : false}
								className='bg-red-500 p-2 px-4 rounded-xl disabled:cursor-not-allowed'
								onClick={() => clear()}
							>
								Cancel
							</button>
							<button
								disabled={exitMsg ? true : false}
								className='bg-yellow-500 p-2 px-4 rounded-xl disabled:cursor-not-allowed'
								onClick={() => changeCredential()}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
