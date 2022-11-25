import React from 'react'

const Badge = ({count, ...props}) => {
  return (
    <span {...props} >{count ? count : null}</span>
  )
}

export default Badge