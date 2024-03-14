import React, { useState } from 'react';
const Users = ({}) => {
	const [users, setUsers] = useState([
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		},
		{
			firstName: 'Ram',
			lastName: 'Singh',
			_id: 1,
		}, 
	]);
	return (
		<div className='bg-[#1A1A1A] h-[100%] lg:mt-20 lg:mr-20 w-[50%]  md:row-auto '>
			
			<div>
				<div className='flex justify-start mt-8 gap-20 items-center'>
					<div className='text-xl font-bold ml-10'>
						<h2>Users</h2>
					</div>
					<div className='flex justify-center items-center bg-black rounded-md p-3 gap-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							data-name='Layer 1'
							viewBox='0 0 32 32'
							id='searchingemployee'
                            className='h-5 w-5'
						>
							<path
								d='M16.525,5a8.148,8.148,0,1,0-.112,11.623l.011-.01c.033-.032.068-.058.1-.091A8.156,8.156,0,0,0,16.525,5ZM6.019,16.1a2.6,2.6,0,0,1,2.544-2.151h.229a2.245,2.245,0,0,0,3.974-.049.492.492,0,0,0,.21.049A2.579,2.579,0,0,1,15.507,16.1,7.144,7.144,0,0,1,6.019,16.1Zm3.766-8.2a1.526,1.526,0,0,1,.982-.052l2.886.819a.5.5,0,0,0,.134.009c0,.024.007.046.007.07a3.029,3.029,0,1,1-6.059,0c0-.021.006-.04.006-.061a.506.506,0,0,0,.185-.036Zm-1.8-.353a3.025,3.025,0,0,1,5.58.055l-2.525-.717a2.556,2.556,0,0,0-1.63.087Zm4.044,5.006v.311a1.265,1.265,0,0,1-2.529,0v-.311a3.7,3.7,0,0,0,2.529,0Zm4.282,2.727A3.585,3.585,0,0,0,13.02,12.95c0-.032.009-.061.009-.093v-.588a.494.494,0,0,0-.036-.177,4.029,4.029,0,1,0-4.458,0,.494.494,0,0,0-.036.177v.588c0,.032.008.062.01.094a3.6,3.6,0,0,0-3.292,2.321,7.147,7.147,0,1,1,11.093,0ZM30.856,26.614l-8.839-8.839a1.491,1.491,0,0,0-1.7-.282l-.857-.857a10.492,10.492,0,1,0-2.828,2.828l.857.857a1.489,1.489,0,0,0,.282,1.7l8.839,8.839a3,3,0,1,0,4.242-4.242ZM4.047,17.482a9.5,9.5,0,1,1,13.436,0A9.511,9.511,0,0,1,4.047,17.482Zm13.4,1.378c.255-.211.5-.433.743-.671s.46-.488.671-.743l.682.682-1.414,1.414Zm12.7,11.289a2.047,2.047,0,0,1-2.828,0l-8.839-8.839a.5.5,0,0,1,0-.707L20.6,18.482a.5.5,0,0,1,.707,0l8.839,8.839a2,2,0,0,1,0,2.828Z'
								fill='#ffffff'
								class='color000000 svgShape'
							></path>
						</svg>
						<input
							type='text'
							placeholder='Search Users'
							className='outline-none bg-transparent text-white'
						/>
					</div>
				</div>
				<div>
					{users.map((user) => (
						<User user={user} />
					))}
				</div>
			</div>
		</div>
	);
};

function User({ user }) {
	return (
		<div className='flex justify-between items-center mx-7 my-5 pb-5 px-5 border-b-[0.5px] '>
			<div className='flex items-center gap-4'>
				<div className='w-7 h-7 flex justify-center rounded-full items-center bg-white text-black uppercase'>{user.firstName[0]}</div>
				<div>{user.firstName}</div>
			</div>
			<div className='bg-green-500 p-2 px-4 rounded-full font-bold text-black flex justify-center items-center'>
				<button>Send Money</button>
			</div>
		</div>
	);
}

export default Users;
