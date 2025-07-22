import { createSlice } from "@reduxjs/toolkit";


const cartState = {
  cart: [],
};

const cartSlice=createSlice({
    name: "cart",
    initialState: cartState,
    reducers:{

       addToCart:(state,action)=>{
        state.cart.push(action.payload)
       },
    //    removeFromCart:(state,action)=>{

    //    }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
