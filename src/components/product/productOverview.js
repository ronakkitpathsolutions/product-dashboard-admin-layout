import { useCallback, useState } from 'react'

const useProductOverview = () => {
    const [showImage, setShowImage] = useState(null)
    const [count, setCount] = useState(1)


    const handleQuantity = useCallback((val, key) => {
        return setCount(key === 'add' ? val + 1 : (key === 'remove' && val > 1) ? val - 1 : val)
    },[])

    const handleShowCase = useCallback((index) => setShowImage(index), [])

  return {count, showImage, handleQuantity, handleShowCase}
}

export default useProductOverview