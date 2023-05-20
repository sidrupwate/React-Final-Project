import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    cart: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };

        default:
            return state;
    }
}