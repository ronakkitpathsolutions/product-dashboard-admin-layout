import axios from './index'

export const getAllProducts = async () => {
    const response = await axios.get('/all-products')
    return response
}