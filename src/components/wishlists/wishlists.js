import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { addToAllWishlists } from '../../redux/action'

const useWishlists = () => {
  const dispatch = useDispatch()
  const { user_id } = useSelector(({ userData }) => userData?.user)
  const { data, isLoading, error } = useFetch(`/user-wishlists/get/${user_id}`, "get")

  const fetchAllWishLists = (value) => {
    if(!value) return {}
    const wishObj = {}
    value?.forEach(val => {
      wishObj[val?._id] = !!val?._id
    })
    return wishObj
  }

  useEffect(() => {
    data && dispatch(addToAllWishlists(fetchAllWishLists(data?.data?.wish_lists)))
  },[data, dispatch])

  return { data: data?.data, isLoading, error }
}

export default useWishlists