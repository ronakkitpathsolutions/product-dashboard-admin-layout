import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishlists, deleteProductFromWishlists } from '../../apis/wishlists'
import useHistory from '../../hooks/useHistory'
import { addwishlist } from '../../redux/action'

const useProducts = (otherData) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const wishlists = useSelector(({ productReducer }) => productReducer.wishlists)
  const user_id = useSelector(({ userData }) => userData?.user?.user_id)

  console.log('wishlists', wishlists)

  const handleRemoveWishList = async (product_id) => {
    try {
      const response = await deleteProductFromWishlists(user_id, { product_id })
      if (response?.data) {
        dispatch(addwishlist({ id: product_id, checked: false }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleAddWishList = async (product_id) => {
    try {
      const response = await addProductToWishlists(user_id, { product_id })
      if (response?.data) {
        dispatch(addwishlist({ id: product_id, checked: true }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const addToWishList = async (id) => {
    wishlists[id] ? await handleRemoveWishList(id) : await handleAddWishList(id)
  }
  const productOverview = (id) => history(`/product-overview/${id}`)

  return { productOverview, addToWishList, wishlists, user_id }
}

export default useProducts