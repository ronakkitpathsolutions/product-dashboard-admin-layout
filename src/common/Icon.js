import {
    ArrowLeftOnRectangleIcon,
    CreditCardIcon,
    HeartIcon,
    MapPinIcon,
    ShoppingBagIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline';
import React from 'react'

const Icon = ({ type, ...props }) => {
    switch (type) {
        case 'heart': return <HeartIcon {...props} />
        case 'logout': return <ArrowLeftOnRectangleIcon {...props} />
        case 'orders': return <ShoppingBagIcon {...props} />
        case 'cart': return <ShoppingCartIcon {...props} />
        case 'location': return <MapPinIcon {...props} />
        case 'money': return <CreditCardIcon {...props} />
        default: return null
    }
}




export default Icon