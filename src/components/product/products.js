import { useDispatch, useSelector } from 'react-redux'
import { products } from '../../constant'
import useHistory from '../../hooks/useHistory'
import { addwishlist } from '../../redux/action'

const useProducts = (otherData) => {
    const wishlists = useSelector(({ productReducer }) =>productReducer.wishlists)
    const dispatch = useDispatch()
    const history = useHistory()

    const addToWishList = (id) => {
      dispatch(addwishlist({id, checked: wishlists[id] ? !wishlists[id]: !!id}))
    }

    const productOverview = (id) => history(`/product-overview/${id}`)

  return { productOverview, products, addToWishList, wishlists }
}

export default useProducts