import React, { useState } from 'react';

const InputBox = ({ icon, placeholder, onChange, children }) => {
	const [focused, setFocused] = useState(false);
	return (
		<div
			className={`text-white flex justify-abound items-center bg-[#161616] p-[11px] m-[10px] opacity-90 rounded-full min-w-[300px] ${
				focused ? 'border-[3px] border-[#D8FF42]' : 'border-[3px] border-[transparent]'
			}`}
		>
			<div
				className={`${
					focused ? 'text-[#D8FF42]' : 'text-[#a7aab9]'
				} flex justify-center items-center ml-4 w-[20px] h-[10px]`}
			>
				{icon}
			</div>
			<input
				type= {children ? (children.props.showPass ? 'text' :'password' ):'text'}
				placeholder={placeholder}
				className='border-2 p-1 ml-4 bg-transparent border-none outline-0'
				onChange={onChange}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>

			{children ? children  : null}
			
		</div>
	);
};

export default InputBox;
