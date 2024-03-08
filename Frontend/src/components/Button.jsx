import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <button onClick={onClick} type='button'>
        {label}
    </button>
  )
}

export default Button