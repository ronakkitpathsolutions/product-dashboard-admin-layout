import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../apis/product'
import useHistory from '../../hooks/useHistory'
import { addToAllWishlists, addwishlist } from '../../redux/action'

const useProducts = (otherData) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const wishlists = useSelector(({ productReducer }) => productReducer.wishlists)

    const addToWishList = (id) => {
      dispatch(addwishlist({id, checked: wishlists[id] ? !wishlists[id]: !!id}))
    }

    const fetchAllWishLists = (value) => {
      if(!value) return {}
      const wishObj = {}
      value?.forEach(val => {
        wishObj[val?._id] = !!val?._id
      })
      return wishObj
    }

    const productOverview = (id) => history(`/product-overview/${id}`)

  return { productOverview, addToWishList, wishlists }
}

export default useProducts