import React from 'react'
import { classNames } from '../../utils/function'

const Input = ({ errorClass, labelClass, inputClass, errorMessage, className, label, ...props }) => {
  return (
    <div className={className} >
      {label ? <label className={labelClass} >{label}</label> : null}
      <input className={inputClass} {...props} />
      {errorMessage ? <span className={classNames(`${errorClass}`,"text-red-500 font-medium text-sm")} >{errorMessage}</span> : null}
    </div>
  )
}

export default Input