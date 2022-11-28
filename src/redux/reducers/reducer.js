import { constant } from "../../constant/index";

const initialState = {
}

export const userData = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.USER_DATA:
            return {
                ...state, ...payload
            }
        case constant.LOG_OUT:
            return {}
        default: return state
    }
}