import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer } from "./productReducers";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    Cart: cartReducer,
})

export default reducers;