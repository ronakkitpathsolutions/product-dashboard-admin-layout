import { useState } from 'react'

const useCart = () => {

    const [activeKey, setActiveKey] = useState('order_details')

    const handleActiveStep = (value) => {
        setActiveKey(value)
    }

    const stepsData = [
        {
            id: "order_details",
            label: "Order details",
            icon: "cart",
            describe: "Some info about your orders."
        },
        {
            id: "address",
            label: "Address",
            icon: "location",
            leftLink: true,
            rightLink: true,
            describe: "Where we sending it?"
        },
        {
            id: "payment",
            label: "Payment",
            icon: "money",
            describe: "Show us the money."
        }
    ]

  return { stepsData, activeKey, handleActiveStep }
}

export default useCart