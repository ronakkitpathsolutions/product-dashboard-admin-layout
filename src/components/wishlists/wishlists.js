import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { addToAllWishlists } from '../../redux/action'

const useWishlists = (user_id) => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useFetch(`/user-wishlists/get/${user_id}`, "get", {}, !user_id)

  const fetchAllWishLists = (value) => {
    if (!value) return {}
    const wishObj = {}
    value?.forEach(val => {
      wishObj[val?._id] = !!val?._id
    })
    return wishObj
  }

  useEffect(() => {
    (data || !user_id) && dispatch(addToAllWishlists(fetchAllWishLists(user_id ? data?.data?.wish_lists : null)))
  }, [data, dispatch, user_id])

  return { data: data?.data, isLoading, error }
}

export default useWishlists