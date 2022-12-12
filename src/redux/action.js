import { constant } from "../constant/index";

export const setLoggedUser = (payload) => {
    return {
        type: constant.USER_DATA,
        payload
    }
}

export const setLogOutUser = (payload = {}) => {
    return {
        type: constant.LOG_OUT,
        payload
    }
}

export const addwishlist = (payload) => {
    return {
        type: constant.ADD_WISHLIST,
        payload
    }
}
export const addToAllWishlists = (payload) => {
    return {
        type: constant.ALL_WISHLISTS,
        payload
    }
}
export const allProducts = (payload) => {
    return {
        type: constant.ALL_PRODUCTS,
        payload
    }
}