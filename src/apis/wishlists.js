import axios from './index'

export const getWishLists = async (user_id, payload) => {
    const response = await axios.get(`/user-wishlists/get/${user_id}`)
    return response
}