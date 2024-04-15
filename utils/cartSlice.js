import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        //Mutating The state over here 
      state.items.push(action.payload);  // this will add 
    },
    removeItem: (state) => {
      state.items.pop();   // this will delete from top
    },

    clearCart: (state, action) => {
      state.items.length = 0;   // this will make state as empty array 
    },
  },
});



export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
