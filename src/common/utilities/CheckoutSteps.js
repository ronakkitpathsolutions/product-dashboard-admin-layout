import React from 'react'
import Item from '../Item'
import List from './List'
import TotalAmount from './TotalAmount'
import Addresses from './Addresses'

const CheckoutSteps = ({ name, ...props }) => {
    switch (name) {
        case 'order_details':
            return <OrderDetails {...props} />
        case 'address':
            return <Addresses className="text-gray-400 body-font" />
        case 'payment':
            return <p>Payment details</p>
        default: return <OrderDetails {...props} />
    }
}

export default CheckoutSteps

const OrderDetails = ({products}) => {
    return (
        <>
            <div className="flow-root">
                <List className="divide-y divide-gray-200">
                    {products.map(({ id, ...data }) => <Item className="flex py-6 px-1 mx-auto xs:w-[95%] sm:w-[460px] sm:mx-auto md:w-[70%] w-full lg:mx-auto lg:w-[500px]" key={id} {...data} />)}
                </List>
            </div>
            <TotalAmount className="border-t border-indigo-500 py-6 lg:px-0 mx-auto xs:w-[95%] sm:w-[460px] sm:mx-auto md:w-[70%] w-full lg:mx-auto lg:w-[500px]" {...{ sub_total: 200.00 }} />
        </>
    )
}