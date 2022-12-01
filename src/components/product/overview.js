import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { colors, socials } from '../../constant'

const useOverview = (otherData) => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    const product_id = useMemo(() => id, [id])

    const availableColors = useMemo(() => {
        return colors.map(val => {return{name: val, id: val}})
    },[])

    return { productData, setProductData, socials, availableColors, id: product_id }
}

export default useOverview