import React from 'react'
import {
    ArrowLeftOnRectangleIcon,
    ArrowRightIcon,
    CreditCardIcon,
    HeartIcon,
    MapPinIcon,
    ShoppingBagIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline';

const Icon = ({ type, ...props }) => {
    switch (type) {
        case 'heart': return <HeartIcon {...props} />
        case 'logout': return <ArrowLeftOnRectangleIcon {...props} />
        case 'orders': return <ShoppingBagIcon {...props} />
        case 'cart': return <ShoppingCartIcon {...props} />
        case 'location': return <MapPinIcon {...props} />
        case 'money': return <CreditCardIcon {...props} />
        case 'right_arrow': return <ArrowRightIcon {...props} />
        default: return null
    }
}




export default Icon