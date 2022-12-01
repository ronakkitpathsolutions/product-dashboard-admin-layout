import { constant } from "../../constant";

const initialState = {
    wishlists: {}
}

export const productReducer  = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.ADD_WISHLIST:
            return {
                ...state, wishlists: { ...state.wishlists, [payload.id]: payload.checked }
            }
        default: return state
    }
}