import React from 'react'

const SendMoneyBox = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1>
                Send Money
            </h1>
        </div>
        <div>
            <div className='flex justify-center'>
                A
            </div>
            <div>
                Friend's Name   
            </div>
        </div>
        <div>
            Amount (in Rs)
        </div>
        <div>
            <input type="text" name="" id="" />
        </div>
        <div>
            <button>
                intiate Transfer
            </button>
        </div>
    </div>
  )
}

export default SendMoneyBox