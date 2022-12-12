import axios from './index'

export const getWishLists = async (user_id, payload) => {
    const response = await axios.get(`/user-wishlists/get/${user_id}`)
    return response
}

export const deleteProductFromWishlists = async (user_id, payload) => {
    const response = await axios.delete(`/user-wishlists/delete/${user_id}`, { data: payload })
    return response
}

export const addProductToWishlists = async (user_id, payload) => {
    const response = await axios.post(`/user-wishlists/${user_id}`, payload)
    return response
}