import { constant } from "../../constant";

const initialState = {
    products: [],
    view_product: {}
}

export const productReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.ALL_PRODUCTS:
            return {
                ...state, products: payload
            }
        case constant.VIEW_PRODUCT:
            return {
                ...state, view_product: payload
            }
        case constant.UPDATE_PRODUCT:
            return {
                ...state, view_product: payload 
            }
        case constant.DELETE_PRODUCT:
            const cloneData = [...state.products]
            cloneData.splice(payload.index, 1)
            return {
                ...state, products: cloneData
            }
        default: return state
    }
}