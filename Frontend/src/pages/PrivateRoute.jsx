// PrivateRoute.js
import axios from '../axios';
import React, { useEffect, useState } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom'; // Changed import to use Navigate
import { useAuth } from '../context/AuthContext';
import loadingimg from '../assets/imgs/Loading Square.gif';
const PrivateRoute = ({ children }) => {
	const [loading,setLoading] = useState('true')
	const { authenticated, setAuthenticated } = useAuth();
	const location = useLocation();
	useEffect(() => {
		setLoading(true);
		const verifyToken = async () => {
			try {
				setLoading(true);
				const token = localStorage.getItem('token');
				if (token) {
					
					const response = await axios({
						method: 'post',
						url: '/me',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					});

					if (
						response?.status == '200' ||
						response?.data?.Authenticated ||
						response?.data?.message == 'User is Authenticated'
					) {
						setAuthenticated(true);
						
					} else {
						setAuthenticated(false);
					}
				} else {
					setAuthenticated(false);
				}
			} catch (error) {
				console.error('Error verifying token:', error);
				setAuthenticated(false);
			} finally {
				setLoading(false);
			}
		};

		verifyToken();
	},[location.pathname]);
	if (loading) {
		return (
			<div className='text-4xl sm:text-6xl bg-black  flex flex-col justify-center items-center text-white w-full h-[100vh]'>
				<img
					src={loadingimg}
					alt=''
					className=' w-[50%] sm:w-[40%]  md:w-[30%]  '
				/>
				Loading...
			</div>
		);
	}

	return <>{authenticated ? <>{children}</> : <Navigate to='/signin' />}</>;
};

export default PrivateRoute;
