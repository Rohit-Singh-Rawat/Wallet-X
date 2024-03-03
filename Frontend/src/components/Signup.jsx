import React from 'react';

const Signup = () => {
	return (
		<div>
			<form action=''>
				<label>First Name</label>
				<input type='text' />
				<label>Last Name</label>
				<input type='text' />
				<label>Email</label>
				<input type='email' />
				<label>Password</label>
				<input type='password' />
				<button>Sign Up</button>
				<p>
					Already have an account?{' '}
					<span>
						<a href='/signin'>Login</a>
					</span>
				</p>
			</form>
		</div>
	);
};

export default Signup;
