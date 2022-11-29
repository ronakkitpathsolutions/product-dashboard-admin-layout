import React from 'react'

const List = ({children, ...props}) => <ul {...props} >{children}</ul>
export default List