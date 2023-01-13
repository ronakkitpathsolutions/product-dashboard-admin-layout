import { useDispatch, useSelector } from 'react-redux'
import { addProductToWishlists, deleteProductFromWishlists, getWishLists } from '../../apis/wishlists'
import useHistory from '../../hooks/useHistory'
import { addToAllWishlists, addwishlist, getAllWishlistsProducts } from '../../redux/action'
import useFetch from '../../hooks/useFetch'
import { fetchAllWishLists } from '../../utils/function'
import { useEffect, useState } from 'react'

const useProducts = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isProductLoading, setIsProductLoading] = useState(false)
  const wishlists = useSelector(({ wishlistReducer }) => wishlistReducer.wishlists)
  const user = useSelector(({ userData }) => userData?.user)

  const fetchWishlistsData = async () => {
    setIsProductLoading(true)
    try {
      const response = await getWishLists(user?.user_id)
      if (response?.data) {
        const { data } = response?.data
        if(data || !user?.user_id){
          dispatch(addToAllWishlists(fetchAllWishLists(user?.user_id ? data?.wish_lists : null)))
        }
        dispatch(getAllWishlistsProducts(user?.user_id ? data?.wish_lists : []))
        setIsProductLoading(false)
      }
    } catch (error) {
      console.log('error :>> ', error);
      setIsProductLoading(false)
    }
  }

  useEffect(() => {
    user?.user_id  && fetchWishlistsData()
    // eslint-disable-next-line
  }, [user])

  
  const handleRemoveWishList = async (product_id) => {
    try {
      const response = await deleteProductFromWishlists(user?.user_id, { product_id })
      if (response?.data) {
        dispatch(addwishlist({ id: product_id, checked: false }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleAddWishList = async (product_id) => {
    try {
      const response = await addProductToWishlists(user?.user_id, { product_id })
      if (response?.data) {
        dispatch(addwishlist({ id: product_id, checked: true }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const addToWishList = async (id) => {
    user?.user_id ? wishlists[id] ? await handleRemoveWishList(id) : await handleAddWishList(id) : dispatch(addwishlist({id, checked: wishlists[id] ? !wishlists[id]: !!id}))
  }
  const productOverview = (id) => history(`/product-overview/${id}`)

  return { productOverview, addToWishList, wishlists, user, isProductLoading }
}

export default useProducts