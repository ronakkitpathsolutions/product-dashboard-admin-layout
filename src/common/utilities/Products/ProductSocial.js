import React from 'react'
import SVG from '../../svg/svg'

const ProductSocial = ({socials,...props}) => {
    return (
        <span {...props}>
            {socials.map(({id, type})=><SVG key={id} {...{type}} />)}
        </span>
    )
}

export default ProductSocial