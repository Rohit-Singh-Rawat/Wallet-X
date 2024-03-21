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
				if (token) {
					const response = await axios({
						method: 'POST',
						url: '/me',
						headers: {
							'Content-Type': 'application/json',
							authorization: `Bearer ${token}`,
						},
					});

					if (
						response?.status == '200' ||
						response?.data?.Authenticated ||
						response?.data?.message == 'User is Authenticated'
					) {
						setLoading(false);
						setAuthenticated((e) => true);
					} else {
						setAuthenticated(false);
						logout();
					}
				}
			} catch (error) {
				console.error('Error verifying token:', error);
			} finally {
				setLoading(false);
			}
		};

		verifyToken();
	}, [token]);

	const login = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setAuthenticated(false);
	};
	return (
		<AuthContext.Provider
			value={{ authenticated, setAuthenticated, token, loading, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
