import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label, buttonText, to}) => {
  return (
    <div>
        <div>{label}</div>
        <Link to={to}> {buttonText}
        </Link>
    </div>
  )
}

export default BottomWarning;