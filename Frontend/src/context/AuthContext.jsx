// AuthContext.js
import axios from '../axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token'));
	const [loading, setLoading] = useState(true);

	const [authenticated, setAuthenticated] = useState(false);


	const login = (token) => {

		localStorage.setItem('token', token);
		setToken(token);
	};

	const logout = () => {
		
		
		window.location = '/signin';

		setAuthenticated(false);
		localStorage.removeItem('token');
		setLoading(true);
		setToken(null);
		setLoading(false);
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
