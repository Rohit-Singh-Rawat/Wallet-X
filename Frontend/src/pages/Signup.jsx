import React, { useState } from 'react';
import BottomWarning from '../components/BottomWarning';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import bgImg from '../assets/imgs/bg.jpg'

const Signup = () => {
	const [signupData, setSignupData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
	});
	const navigate = useNavigate();
	const handleOnChange = (e, para)=>{
		setSignupData((prevSignUpData) => ({
			...prevSignUpData,
			[para] : e.target.value,
		}));
	}
	return (
		<div>
			
			<div className='flex flex-col justify-center'>
				<div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
					<Heading label={'Sign up'} />
					<SubHeading label={'Enter your credentials to access your account'} />
					<InputBox
						placeholder='John'
						label={'First Name'}
						name='firstName'
						onChange={(e) => {
							handleOnChange(e, 'firstName');
						}}
					/>
					<InputBox
						placeholder='joe'
						label={'Last Name'}
						onChange={(e) => {
							handleOnChange(e, 'lastName');
						}}
					/>
					<InputBox
						placeholder='harkirat@gmail.com'
						label={'Email'}
						onChange={(e) => {
							handleOnChange(e, 'username');
						}}
					/>

					<InputBox
						placeholder='123456'
						label={'Password'}
						onChange={(e) => {
							handleOnChange(e, 'password');
						}}
					/>
					<div className='p-2 border bg-green-100 flex justify-center items-center'>
						<Button
							label={'Sign in'}
							onClick={async () => {
								const response = await axios.post(
									'http://localhost:3000/api/v1/user/signup',
									signupData
								);

								localStorage.setItem('token', response.data.token);
								navigate('/dashboard');
							}}
						/>
					</div>
					<BottomWarning
						label={"Don't have an account?"}
						buttonText={'Sign in'}
						to={'/signin'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signup;
