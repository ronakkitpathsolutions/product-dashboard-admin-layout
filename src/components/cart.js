import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../apis/product'
import { fetchAllCartItems } from '../redux/action'

const useCart = () => {

    const [activeKey, setActiveKey] = useState('order_details')
    const user = useSelector(({userData}) => userData?.user)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchCartData()
        // eslint-disable-next-line
    }, [])

    const fetchCartData = async() => {
        setIsLoading(true)
        try {
            const response = await getAllCartItems(user?.user_id)
            if(response?.data){
                const { data } = response?.data
                console.log('response?.data :>> ', response?.data);
                dispatch(fetchAllCartItems(data?.cart_data))
                setIsLoading(false)
            }
        } catch (error) {
            console.log('error :>> ', error);
            setIsLoading(false)
        }
    }
    

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

  return { stepsData, activeKey, handleActiveStep, isLoading }
}

export default useCart