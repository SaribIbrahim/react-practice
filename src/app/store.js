import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "../features/deposit/depositSlice.js";
import cartReducer from "../features/cart/cartSlice.jsx";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer=combineReducers({
    cart:cartReducer,
    depAmount:depositReducer
})

export const store=configureStore({
    reducer:{
        rootReducer
    }
})