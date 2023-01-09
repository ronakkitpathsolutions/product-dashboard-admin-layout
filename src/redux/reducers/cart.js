import { constant } from "../../constant";

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.CART_ITEMS:
            return {
                ...state, cart: payload
            }
        case constant.ADD_CART_ITEM:
            return {
                ...state, cart: [...state.cart, payload]
            }
        case constant.REMOVE_CART_ITEM:
            const cloneData = [...state.cart]
            cloneData.splice(payload?.index, 1)
            return {
                ...state, cart: cloneData
            }
        case constant.UPDATE_CART_ITEM:
            const cartData = [...state.cart]
            cartData[payload?.index] = {
                ...cartData[payload?.index]
            }
            return {
                ...state, cart: cartData
            }
        default: return state
    }
}