import React from 'react'
import nf from '../assets/imgs/404 Error-bro.svg'
const NotFound = () => {
  return (
		<div className='flex justify-center items-center bg-black'>
			<img src={nf} alt={"Page Not Fund  "} className='h-[100vh]'/>
		</div>
	);
}

export default NotFound
