import { useCallback, useState } from 'react'

const useProductOverview = () => {
    const [showImage, setShowImage] = useState(null)
    const [productConfig, setProductConfig] = useState({})
    const [count, setCount] = useState(1)


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

  console.log('productConfig', {...productConfig, qty: count})
  return {count, showImage, handleQuantity, handleShowCase, configData}
}


export default useProductOverview