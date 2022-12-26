import api from './index'

export const getProductReview = async(id) => {
    const response = await api.get(`/product-comments/${id}`)
    return response
}

export const addNewProductComment = async(id, payload) => {
    const response = await api.post(`/product-comments/${id}`, payload)
    return response
}