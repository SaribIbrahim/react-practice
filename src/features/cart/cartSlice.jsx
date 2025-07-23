import { createSlice } from "@reduxjs/toolkit";


const cartState = {
  cart: [],
};

const cartSlice=createSlice({
    name: "cart",
    initialState: cartState,
    reducers:{

       addToCart:(state,action)=>{
        action.payload.quantity = 1; // Set default quantity to 1
        state.cart.push(action.payload)
       },
    //    removeFromCart:(state,action)=>{

    //    }
      increaseQty:(state,action)=>{
      let id=action.payload;
      const currentItem=state.cart.find(item=>item.id===id);
      currentItem.quantity+=1;
      
      }
    }
})

export const { addToCart,increaseQty } = cartSlice.actions;

export default cartSlice.reducer;
