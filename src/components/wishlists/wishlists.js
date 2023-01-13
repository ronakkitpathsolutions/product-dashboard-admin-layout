import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToAllWishlists, getAllWishlistsProducts } from '../../redux/action'
import { getWishLists } from '../../apis/wishlists'
import { fetchAllWishLists } from '../../utils/function'

const useWishlists = () => {

  const user = useSelector(({ userData }) => userData?.user)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const fetchWishlistsData = async () => {
    setIsLoading(true)
    try {
      const response = await getWishLists(user?.user_id)
      if (response?.data) {
        const { data } = response?.data
        dispatch(addToAllWishlists(fetchAllWishLists(user?.user_id ? data?.wish_lists : null)))
        dispatch(getAllWishlistsProducts(user?.user_id ? data?.wish_lists : []))
        setIsLoading(false)
      }
    } catch (error) {
      console.log('error :>> ', error);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWishlistsData()
    // eslint-disable-next-line
  }, [])

  return { isLoading }
}

export default useWishlists