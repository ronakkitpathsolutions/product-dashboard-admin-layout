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

export const fetchAllCartItems = (payload) => {
    console.log('payload :>> ', payload);
    return { 
        type: constant.CART_ITEMS, 
        payload
    }
}

export const deleteItemInCart = (payload) => {
    return { 
        type: constant.DELETE_CART_ITEM, 
        payload
    }
}

export const updateItemInCart = (payload) => {
    return { 
        type: constant.UPDATE_CART_ITEM, 
        payload
    }
}

export const addItemInCart = (payload) => {
    return { 
        type: constant.ADD_CART_ITEM, 
        payload
    }
}