import React from 'react';

const SendMoneyBox = () => {
	return (
		<div className='flex text-white flex-col justify-center  w-[30%] rounded-xl gap-8  p-10    bg-[#1A1A1A]'>
			<div className='text-5xl text-center font-extrabold'>
				<h1>Send Money</h1>
			</div>
			<div className='flex flex-col justify-center gap-5   items-center'>
				<div className='flex justify-center w-14 h-14  bg-white rounded-full text-black items-center text-2xl font-bold'>
					A
				</div>
				<div>Friend's Name</div>
			</div>
			<div className='flex justify-center gap-5 border-b-[0.5px] border-[#2e312f] p-4 items-center'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 48 48'
						id='rupee'
						className='h-10 w-10'
					>
						<path
							fill='#e1ff46'
							d='M24,5A19,19,0,1,0,43,24,19,19,0,0,0,24,5Zm-.29,26.71A1,1,0,0,1,23,32a1,1,0,0,1-.71-.29l-6-6A1,1,0,0,1,17,24H19a3,3,0,0,0,3.05-3A3,3,0,0,0,19,18H16a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2H23a4.83,4.83,0,0,1,1,2.94,5,5,0,0,1-4.61,5l4.32,4.34A1,1,0,0,1,23.71,31.71Zm10-3.51a1,1,0,0,1-1.41,0l-4.44-4.39a1.08,1.08,0,0,0-1.54,0,1,1,0,0,0-.32.75,1.05,1.05,0,0,0,.32.76l.73.73a1,1,0,0,1-1.4,1.42l-.74-.73a3.05,3.05,0,0,1,0-4.35,3.09,3.09,0,0,1,4.36,0l4.43,4.39A1,1,0,0,1,33.71,28.2Z'
							class='color3b3c3d svgShape'
						></path>
						<path
							fill='#e1ff46'
							d='M24,48A24,24,0,1,1,48,24,24,24,0,0,1,24,48ZM24,2A22,22,0,1,0,46,24,22,22,0,0,0,24,2Z'
							class='color3b3c3d svgShape'
						></path>
					</svg>
				</div>
				<div className='border-2 p-2 rounded-lg flex-grow  '>
					<input
						type='number'
						inputmode='numeric'
						name=''
                        min={"0"}
						placeholder='Amount (in Rs)'
						id=''
						className='outline-none w-full bg-transparent appearance-none'
					/>
				</div>
			</div>

			<div className='flex justify-center'>
				<button className='bg-green-400 p-3 px-5 rounded-full'>intiate Transfer</button>
			</div>
		</div>
	);
};

export default SendMoneyBox;
