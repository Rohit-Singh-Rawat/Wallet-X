// AuthContext.js
import axios from '../axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [loading, setLoading] = useState(true);

	const [authenticated, setAuthenticated] = useState(false);
	useEffect(() => {
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
	},[]);

	const login = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	};

	const logout = () => {
		
		localStorage.removeItem('token')
		
	};
	return (
		<AuthContext.Provider
			value={{
				authenticated,
				setAuthenticated,
				token,
				loading,
				setLoading,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
