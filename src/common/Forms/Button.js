import React from 'react'

const Button = ({label, handleClick, ...props}) => {
  return (
    <button {...props} onClick={(handleClick && handleClick())} >
        {label}
    </button>
  )
}

export default Button