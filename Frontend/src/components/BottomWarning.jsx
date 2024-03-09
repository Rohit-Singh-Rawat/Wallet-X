import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label, buttonText, to}) => {
  return (
		<div className='flex justify-center gap-2 mt-5 items-center' >
			<div className='text-white'>{label}</div>
			<Link
				to={to}
          className='text-[#D8FF42]'
			>
				{' '}
				{buttonText}
			</Link>
		</div>
	);
}

export default BottomWarning;