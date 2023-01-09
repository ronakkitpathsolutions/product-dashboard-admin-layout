import axios from './index'

export const getAllProducts = async () => {
    const response = await axios.get('/all-products')
    return response
}

export const getAllCartItems = async (id) => {
    const response = await axios.get(`/add-to-cart/cart/${id}`)
    return response
}