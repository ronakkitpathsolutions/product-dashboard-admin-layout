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