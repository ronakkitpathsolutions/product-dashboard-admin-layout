import React from 'react'

const Input = ({labelClass, inputClass, errorMessage, className, label, ...props}) => {
  return (
    <div className={className} >
        <label className={labelClass} >{label}</label>
        <input className={inputClass} {...props} />
    </div>
  )
}

export default Input