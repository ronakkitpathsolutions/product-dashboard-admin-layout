import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../../constant'
import { addwishlist } from '../../redux/action'

const useProducts = (otherData) => {
    const wishlists = useSelector(({ productReducer }) =>productReducer.wishlists)
    const dispatch = useDispatch()
    const [ overview, setOverview ] = useState(null)
    const handleOverview = (key) => setOverview(key)

    const addToWishList = (id) => {
      dispatch(addwishlist({id, checked: wishlists[id] ? !wishlists[id]: !!id}))
    }

  return { handleOverview, overview, products, addToWishList, wishlists }
}

export default useProducts