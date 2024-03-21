import axios from '../axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Users = ({}) => {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(async () => {
			setIsLoading(true);
			const token = `Bearer ${localStorage.getItem('token')}`;

			const response = await axios({
				method: 'get',
				url: `/user/search?filter=${searchTerm}`,
				headers: {
					authorization: token,
				},
			});
			setUsers(response.data.users);
			setIsLoading(false);
		}, 500);
		return () => {
			clearInterval(timer);
		};
	}, [searchTerm]);

	return (
		<div className='bg-[#1A1A1A] rounded-md mx-3 h-[100%] mt-6 md:w-[50%]   md:row-auto '>
			<div className='flex justify-start flex-col px-5  lg:px-10 sm:flex-row mt-8 gap-10 lg:justify-between items-center'>
				<div className='text-xl font-bold   '>
					<h2>Users</h2>
				</div>
				<div className='flex justify-center items-center my-4 sm:mt-0 bg-black rounded-md p-3 gap-3'>
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
							className='color000000 svgShape'
						></path>
					</svg>
					<input
						type='text'
						placeholder='Search Users'
						onChange={(e) => setSearchTerm((t) => e.target.value)}
						className='outline-none bg-transparent text-white'
					/>
				</div>
			</div>
			<div className='text-sm sm:text-md '>
				{isLoading ? (
					<div className='text-center text-2xl my-10'>Fetching Users...</div>
				) : users.length ? (
					users.map((user) => (
						<User
							user={user}
							key={user._id}
						/>
					))
				) : (
					<div className='text-center text-2xl my-10'>No User Found</div>
				)}
			</div>
		</div>
	);
};

function User({ user }) {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col   xs:flex-row justify-between items-center mx-7 my-7 pb-5 px-5 border-b-[0.5px] last-of-type:border-b-[0] '>
			<div className='flex items-center gap-4'>
				<div
					className='w-7 h-7 flex justify-center rounded-full items-center text-white uppercase'
					style={{ background: user.avatar }}
				>
					{user.firstName[0]}
				</div>
				<div className=''>
					{user.firstName} {user.lastName}
				</div>
			</div>
			<div
				onClick={() =>
					navigate(
						`/send?id=${user._id}&name=${user.firstName} ${user.lastName}`
					)
				}
				className='bg-green-500 text-sm sm:text-md px-2 p-[2px] sm:p-2 sm:px-4 rounded-full font-bold text-black flex justify-center items-center'
			>
				<button>Send Money</button>
			</div>
		</div>
	);
}

export default Users;
