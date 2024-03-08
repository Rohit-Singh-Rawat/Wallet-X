import React from 'react';

const InputBox = ({ label, placeholder, onChange }) => {
	return (
		<div>
			<div>{label}</div>
			<input
				type='text'
				placeholder={placeholder}
				className='border-2 p-1'
				onChange={onChange}
			/>
		</div>
	);
};

export default InputBox;
