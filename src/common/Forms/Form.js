import React from 'react'

const Form = ({children, handleSubmit, ...props}) => {
  return (
    <form {...props} onSubmit={handleSubmit} >
        {children}
    </form>
  )
}

export default Form