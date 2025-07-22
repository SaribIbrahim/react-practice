import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "../features/deposit/depositSlice.js";

export const store=configureStore({
    reducer:{
        deposit: depositReducer
    }
})