import React from 'react'

export const AppBar = (userFirstName) => {
  return (
    <div>
        <div>
            PAYTM App
        </div>
        <div>
            <div>
                <p>Hello</p>
            </div>
            <div>
                {userFirstName[0]}
            </div>
        </div>
    </div>
  )
}
