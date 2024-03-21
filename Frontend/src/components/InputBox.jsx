import React, { useState } from 'react';

const InputBox = ({ icon, placeholder, onChange, children }) => {
	const [focused, setFocused] = useState(false);
	return (
		<div
			className={`text-white flex justify-around items-center bg-[#161616] p-[5px] m-[5px] sm:p-[11px] sm:m-[10px] opacity-90 rounded-full sm:min-w-[360px] ${
				focused
					? 'border-[3px] border-[#D8FF42]'
					: 'border-[3px] border-[transparent]'
			}`}
		>
			<div
				className={`${
					focused ? 'text-[#D8FF42]' : 'text-[#a7aab9]'
				} flex justify-center items-center ml-2 sm:ml-4 w-[20px] h-[10px]`}
			>
				{icon}
			</div>
			<input
				type={
					placeholder == 'Email' ? 'email':
					children ? (children.props.showPass ? 'text' : 'password') : 'text'
				}

				placeholder={placeholder}
				className={`border-2 p-1 ml-4  bg-transparent border-none outline-0 ${children ? 'w-[163px] sm:w-full': 'w-full' }`}
				onChange={onChange}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>

			{children ? children : null}
		</div>
	);
};

export default InputBox;
