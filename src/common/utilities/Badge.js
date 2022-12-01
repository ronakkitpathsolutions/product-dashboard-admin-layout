import React from 'react'

const Badge = ({count, type, label, ...props}) => {
    switch (type) {
        case 'label':
            return <span {...props} >{label}</span>
        case 'count':
            return <span {...props} >{count ? count : null}</span>
        case 'dot':
            return <span {...props} />
        default: <span {...props} >{count ? count : null}</span>
    }
}

export default Badge