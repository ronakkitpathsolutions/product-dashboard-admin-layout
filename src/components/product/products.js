import { useState } from 'react'

const useProducts = (otherData) => {
    const [ overview, setOverview ] = useState(null)
    const handleOverview = (key) => setOverview(key)

  return { handleOverview, overview }
}

export default useProducts