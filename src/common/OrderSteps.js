import React from 'react'
import Icon from './Icon'

const OrderSteps = ({ stepsData, ...props }) => {

    

    return (
        <ol {...props} >
            {
                stepsData.map(({ id, leftLink, rightLink, icon, label, describe }) => <li key={id} className="relative flex items-center justify-center p-4">
                    {
                        leftLink ? <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span> : null
                    }
                    {
                        rightLink ? <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"></span> : null
                    }
                    <Icon type={icon} className='w-7 h-7 mr-4' />
                    <p className="hidden md:block leading-none" >
                        <strong className="block font-medium">{label}</strong>
                        <small className="mt-1">{describe}</small>
                    </p>
                </li>)
            }
        </ol>
    )
}

export default OrderSteps