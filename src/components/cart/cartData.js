import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from '../../apis/product'
import { fetchAllCartItems } from '../../redux/action'

const useCartData = (initial) => {

    const user = useSelector(({userData}) => userData?.user)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const fetchCartData = async() => {
        setIsLoading(true)
        try {
            const response = await getAllCartItems(user?.user_id)
            if(response?.data){
                const { data } = response?.data
                dispatch(fetchAllCartItems(data?.cart_data))
                setIsLoading(false)
            }
        } catch (error) {
            console.log('error :>> ', error);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        user?.user_id && fetchCartData()
        // eslint-disable-next-line
    }, [user])

  return { isLoading }
}

export default useCartData