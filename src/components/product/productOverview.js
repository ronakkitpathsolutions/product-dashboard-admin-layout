import { useCallback, useEffect, useState } from 'react'
import { getProductReview } from '../../apis/review'
import { addNewCartItem } from '../../apis/product'
import { useSelector } from 'react-redux'

const useProductOverview = (id, config) => {


    const user_id = useSelector(({userData}) => userData?.user?.user_id)
    const [showImage, setShowImage] = useState(null)
    const [productConfig, setProductConfig] = useState({
      color: config?.data?.colors?.[0] || null,
      category: config?.data?.category || null
    })
    const [count, setCount] = useState(1)
    const [reviews, setReviews] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isButtonLoading, setIsButtonLoading] = useState(false)

    const handleFetchReviews = async() => {
        setLoading(true)
        try {
            const response = await getProductReview(id)
            if(response?.data){
                setReviews(response?.data?.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log('error', error)
        }
    }

    useEffect(() => {
     id && handleFetchReviews()
    // eslint-disable-next-line
    },[id])

    const handleQuantity = useCallback((val, key) => {
        return setCount(key === 'add' ? val + 1 : (key === 'remove' && val > 1) ? val - 1 : val)
    },[])

    const handleChange = (e) => {
      const { value } = e.target
      setProductConfig({...productConfig, color: value })
    }

    const handleCartItem = async(product_id) => {
        setIsButtonLoading(true)
      try {

        const response = await addNewCartItem(user_id, { product_id, ...productConfig, qty: count })
        if(response?.data){
          console.log('response :>> ', response);
          setIsButtonLoading(false)
        }

      } catch (error) {
        console.log('error :>> ', error);
        setIsButtonLoading(false)
      }
      console.log('data :>> ', { product_id, ...productConfig, qty: count });
    }

    const handleShowCase = useCallback((index) => setShowImage(index), [])

    const configData = {
      name: "choose_color",
      value: productConfig['color'],
      onChange: handleChange,
      placeHolder: "Choose color",
    }

  return {count, showImage, reviews, isLoading, handleQuantity, handleShowCase, configData, handleCartItem, isButtonLoading}
}


export default useProductOverview