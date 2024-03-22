import React, { useEffect, useState } from 'react';
import { SideBar } from '../components/SideBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import History from '../components/History';
import Header from '../components/Header';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { SideBarOpen } from '../store/atom/sideBarAtom';
import { useSetRecoilState } from 'recoil';
const Settings = () => {
	const setSideBarOpen = useSetRecoilState(SideBarOpen);

	useEffect(() => {
		setSideBarOpen(false);
	}, []);
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [exitMsg, setExitMsg] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
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
			setIsLoading(true);
			const token = `Bearer ${localStorage.getItem('token')}`;
			const response = await axios({
				method: 'put',
				url: '/user/change',
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
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='flex bg-[black] min-h-[100dvh]'>
			<SideBar active={'Settings'}></SideBar>
			<div className='bg-black w-full h-full  text-white'>
				<div className='flex flex-col gap-7 my	-10 mx-8'>
					<div className='flex  mt-10 gap-5'>
						<button
							className='block  w-6 sm:w-8 lg:hidden'
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
						<h1 className='text-4xl font-bold'>Account</h1>
					</div>

					<h2 className='text-2xl mt-5 font-semibold'>Profile</h2>
					<p className='text-sm font-extralight'>
						This information will be displayed public to be careful what you
						share
					</p>
					<div className='flex flex-col sm:flex-row gap-2 sm:gap-8  sm:items-center mx-5 my-3 '>
						First Name
						<input
							type='text'
							placeholder='Enter your first name'
							className=' bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
							onChange={(e) => setNewFirstName(e.target.value)}
						/>
					</div>
					<div className='flex flex-col sm:flex-row gap-2 sm:gap-8  sm:items-center my-3 mx-5 '>
						Last Name{' '}
						<input
							type='text'
							placeholder='Enter your Last name'
							className='bg-transparent pl-3 text-sm outline-none p-2 rounded-xl border-[0.5px] '
							onChange={(e) => setNewLastName(e.target.value)}
						/>{' '}
					</div>
					<h2 className='text-2xl  mt-8 font-semibold'>Security</h2>
					<div className=' sm:flex sm:flex-col lg:flex-row  justify-start gap-6 py-6 border-b-[0.1px] border-yellow-50'>
						<div className='flex flex-col sm:flex-row gap-2 sm:gap-8  sm:items-center mx-5 my-3'>
							Current Password{' '}
							<input
								type='text'
								placeholder='Enter your Current password'
								onChange={(e) => setCurrentPassword(e.target.value)}
								className='bg-transparent pl-3 text-sm outline-none  p-2 min-w-56 rounded-xl border-[0.5px] '
							/>
						</div>
						<div className='flex flex-col ml-5 lg:ml-0 sm:flex-row gap-2 sm:gap-8  sm:items-center my-3'>
							New Password
							<input
								type='text'
								placeholder='Enter your New password'
								onChange={(e) => setNewPassword(e.target.value)}
								className='bg-transparent pl-3 text-sm outline-none  min-w-56 p-2 rounded-xl border-[0.5px] '
							/>
						</div>
					</div>
					<div
						className={`flex flex-col sm:flex-row pl-10 ${
							errMsg || exitMsg ? 'justify-between' : 'justify-end'
						}`}
					>
						{exitMsg ? (
							<div className='text-green-400 text-left'>{exitMsg}</div>
						) : errMsg ? (
							<div className='text-red-400'>{errMsg}</div>
						) : null}
						<div className='flex sm:justify-end gap-10 mt-5 sm:mt-0 items-center sm:mr-20'>
							<button
								disabled={isLoading ? true : exitMsg ? true : false}
								className='bg-red-500 p-2 px-4 rounded-xl disabled:cursor-not-allowed'
								onClick={() => clear()}
							>
								Cancel
							</button>
							<button
								disabled={isLoading ? true : exitMsg ? true : false}
								className={`${
									isLoading
										? 'flex justify-center items-center gap-1  px-5'
										: 'px-8'
								}   text-center bg-yellow-500 p-2   rounded-xl disabled:cursor-not-allowed`}
								onClick={() => changeCredential()}
							>
								Save
								{isLoading ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										enablbackground='new 0 0 2000 2000'
										viewBox='0 0 2000 2000'
										id='process'
										className='animate-spin h-5 w-5 fill-current text-yellow-500'
									>
										<circle
											cx='1014.48'
											cy='484.57'
											r='115.8'
											fill='#161616'
										></circle>
										<circle
											cx='745.91'
											cy='556.54'
											r='106.15'
											fill='#0f0f0f'
										></circle>
										<circle
											cx='549.3'
											cy='753.14'
											r='96.5'
											fill='#3a3a3a'
										></circle>
										<circle
											cx='477.34'
											cy='1021.71'
											r='86.85'
											fill='#414141'
										></circle>
										<circle
											cx='549.3'
											cy='1290.28'
											r='82.03'
											fill='#484848'
										></circle>
										<circle
											cx='745.91'
											cy='1486.89'
											r='77.2'
											fill='#727272'
										></circle>
										<circle
											cx='1014.48'
											cy='1558.85'
											r='72.38'
											fill='#737373'
										></circle>
										<circle
											cx='1283.04'
											cy='1486.89'
											r='67.55'
											fill='#959595'
										></circle>
										<circle
											cx='1479.65'
											cy='1290.28'
											r='62.73'
											fill='#a6a6a6'
										></circle>
										<circle
											cx='1551.61'
											cy='1021.71'
											r='57.9'
											fill='#bfbfbf'
										></circle>
										<circle
											cx='1479.65'
											cy='753.14'
											r='53.08'
											fill='#cfcfcf'
										></circle>
										<circle
											cx='1283.04'
											cy='556.54'
											r='48.25'
											fill='#dfdfdf'
										></circle>
									</svg>
								) : null}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
