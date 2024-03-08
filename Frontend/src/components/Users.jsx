import React, { useState } from 'react'
const Users = ({}) => {
    const [users, setUsers] = useState([
			{
				firstName: 'Harkirat',
				lastName: 'Singh',
				_id: 1,
			},
		]);
  return (
    <div>
        <div>
            <h2>
                Users
            </h2>
        </div>
        <div>
            <input type="text" placeholder='Search Users'/>
        </div>
        <div>
            {users.map(user => <User user={user}/>)}
        </div>
    </div>
  )
}

function User({user}){
    return (<div>
        <div>
            <div>
                {user.firstName[0]}
            </div>
            <div>
                {user.firstName}
            </div>
        </div>
        <div>
            <button >
                Send Money
            </button>
        </div>
    </div>)
}

export default Users