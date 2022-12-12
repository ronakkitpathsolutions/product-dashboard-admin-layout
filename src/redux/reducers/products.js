import { constant } from "../../constant";

const initialState = {
    wishlists: {},
    products: []
}

export const productReducer  = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.ADD_WISHLIST:
            return {
                ...state, wishlists: { ...state.wishlists, [payload.id]: payload.checked }
            }
        case constant.ALL_WISHLISTS:
            return {
                ...state, wishlists: { ...payload }
            }
        case constant.ALL_PRODUCTS:
            return {
                ...state, products: payload
            }
        default: return state
    }
}