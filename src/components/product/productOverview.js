import { useCallback, useEffect, useState } from 'react'
import { getProductReview } from '../../apis/review'

const useProductOverview = (id) => {
    const [showImage, setShowImage] = useState(null)
    const [productConfig, setProductConfig] = useState({})
    const [count, setCount] = useState(1)
    const [reviews, setReviews] = useState([])
    const [isLoading, setLoading] = useState(false)

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

    const handleShowCase = useCallback((index) => setShowImage(index), [])

    const configData = {
      name: "choose_color",
      value: productConfig['color'],
      onChange: handleChange,
      placeHolder: "Choose color",
    }

  return {count, showImage, reviews, isLoading, handleQuantity, handleShowCase, configData}
}


export default useProductOverview