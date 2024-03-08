import React, { useEffect } from 'react'
import { AppBar } from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
const DashBoard = () => {

  
  return (
    <div>
      <AppBar>
      </AppBar>
      <Balance amount="50000">
      </Balance>
      <Users>
        
      </Users>
    </div>
  )
}

export default DashBoard