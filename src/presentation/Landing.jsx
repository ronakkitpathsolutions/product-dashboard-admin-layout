import React, { Fragment } from 'react'
import Products from './product/Products'

const Landing = ({ ...props }) => {
    return (
        <Fragment {...props} >
            <Products/>
        </Fragment>
    )
}







export default Landing