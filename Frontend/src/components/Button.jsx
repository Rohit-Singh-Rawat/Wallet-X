import React from 'react'

const Button = ({label, onClick}) => {
  return (
		<button
			onClick={onClick}
			type='button'
			className='rounded-full mt-5 bg-[#D8FF42] px-5 py-[5px] sm:px-10 sm:py-[10px] text-black text-lg font-[700] '
		>
			{label}
		</button>
	);
}

export default Button