import React from 'react'

const Signin = () => {
  return (
    <div>
      <form action="">
        <label >Email</label>
        <input type="text" />
        <label >Password</label>
        <input type="password" />
        <button>Sign In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  )
}

export default Signin