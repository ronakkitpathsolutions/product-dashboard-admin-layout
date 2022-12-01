import { combineReducers } from "redux"
import { userData } from "./reducers/reducer"
import { productReducer } from "./reducers/products"

export const rootReducer = combineReducers({
    userData,
    productReducer
})