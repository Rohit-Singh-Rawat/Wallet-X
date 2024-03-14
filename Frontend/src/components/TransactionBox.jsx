import React, { useState } from 'react'
import { transactionAtom } from '../store/atom/TransactionInfo'
import { useRecoilState } from 'recoil'


const TransactionBox = () => {
    const info = useRecoilState(transactionAtom);

  return (
		<div className='absolute z-20 text-white bg-[#0000004d]   flex justify-center items-center w-full h-[100dvh]'>
			<div className='w-10'>d</div>d
		</div>
	);
}

export default TransactionBox
