import React, { useEffect, useState } from 'react';
import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import bgImg from '../assets/imgs/bgImg.jpg';
import username from '../assets/icons/username.svg';
import EyeComponent from '../components/Eyecomponent';

const Signup = () => {
	const [signUpData, setSignUpData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
	});

	const [errorMsg, setErrorMsg] = useState('');

	useEffect(() => {
		setErrorMsg('');
	}, [signUpData]);

	const navigate = useNavigate();
	const handleOnChange = (e, para) => {
		setSignUpData((prevSignUpData) => ({
			...prevSignUpData,
			[para]: e.target.value,
		}));
	};

	const handleSignUp = async () => {
		if (
			signUpData.username.trim() == '' ||
			signUpData.password.trim() == '' ||
			signUpData.firstName.trim() == '' ||
			signUpData.lastName.trim() == ''
		) {
			setErrorMsg('Please Enter Credential');
			return;
		}
		try {
			const response = await axios.post('/user/signup', signUpData);
			localStorage.setItem('token', response.data.token);
			navigate('/dashboard');
		} catch (error) {
			if (!error?.response) {
				setErrorMsg('No Server Response');
			} else if (error?.response) {
				setErrorMsg(error?.response?.data?.message);
			}
		}
	};

	const [showPass, setShowPass] = useState(false);
	return (
		<div className='min-w-[320px]'>
			<div>
				<div className=' absolute top-0 h-[100dvh] min-w-[320px] w-[100dvw]  z-0 mix-blend-overlay'>
					<img
						src={bgImg}
						alt=''
						className='object-cover opacity-95 sm:opacity-100 min-w-[320px] min-h-fit h-[100dvh] w-[100dvw] '
					/>
				</div>
				<div
					className='bg-gradient-to-r from-bgBlack from-15% md:from-0%
				 h-[100dvh] w-[100dvw]'
				></div>
			</div>

			<div className='flex  absolute top-0 z-2 justify-center items-center h-[100dvh] w-[100dvw] md:justify-start '>
				<div className=' w-[350px] text-center  flex flex-col items-center md:m-[150px]'>
					<Heading label={'Sign Up'} />
					<SubHeading label={'Enter your credentials'} />
					<InputBox
						placeholder='First Name'
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6'
							>
								<path
									fillRule='evenodd'
									d='M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z'
									clipRule='evenodd'
								/>
							</svg>
						}
						name='firstName'
						onChange={(e) => {
							handleOnChange(e, 'firstName');
						}}
					/>
					<InputBox
						placeholder='Last Name'
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6'
							>
								<path
									fillRule='evenodd'
									d='M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z'
									clipRule='evenodd'
								/>
							</svg>
						}
						onChange={(e) => {
							handleOnChange(e, 'lastName');
						}}
					/>
					<InputBox
						placeholder='Email'
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-6 h-6'
							>
								<path d='M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z' />
								<path d='M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z' />
							</svg>
						}
						onChange={(e) => {
							handleOnChange(e, 'username');
						}}
					/>

					<InputBox
						placeholder='Password'
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-[24px] h-[24px]'
							>
								<path
									fillRule='evenodd'
									d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
									clipRule='evenodd'
								/>
							</svg>
						}
						onChange={(e) => {
							handleOnChange(e, 'password');
						}}
					>
						<EyeComponent
							showPass={showPass}
							setShowPass={setShowPass}
						></EyeComponent>
					</InputBox>

					{errorMsg && <div className='text-red-500 m-2'>{errorMsg}</div>}

					<div className=' flex justify-center items-center'>
						<Button
							label={'Sign in'}
							onClick={() => handleSignUp()}
						/>
					</div>
					<BottomWarning
						label={'Already have an account?'}
						buttonText={'Sign in'}
						to={'/signin'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signup;
