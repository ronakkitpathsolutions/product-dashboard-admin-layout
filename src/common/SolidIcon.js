import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';

const SolidIcon = ({ type, ...props }) => {
    switch (type) {
        case 'heart': return <HeartIcon {...props} />
        default: return null
    }
}




export default SolidIcon