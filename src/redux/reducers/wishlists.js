import { constant } from "../../constant";

const initialState = {
    wishlists: {},
    all_wishlists: []
}

export const wishlistReducer = (state = initialState, action) => {
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
        case constant.ALL_WISHLISTS_PRODUCTS:
            return {
                ...state, all_wishlists: payload
            }
        case constant.DELETE_WISHLIST_PRODUCT:
            const cloneData = [...state.all_wishlists]
            cloneData.splice(payload.index, 1)
            return {
                ...state, all_wishlists: cloneData
            }
        default: return state
    }
}