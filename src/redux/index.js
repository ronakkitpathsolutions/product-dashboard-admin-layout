import { combineReducers } from "redux"
import { userData } from "./reducers/reducer"
import { productReducer } from "./reducers/products"
import { cartReducer } from "./reducers/cart"

export const rootReducer = combineReducers({
    userData,
    productReducer,
    cartReducer
})