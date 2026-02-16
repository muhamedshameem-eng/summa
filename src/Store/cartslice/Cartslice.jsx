import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");
const initialState = {
  cartItems: storedItems ? JSON.parse(storedItems) : []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push({
          _id: newItem._id,
          name: newItem.name,
          // category: newItem.category,
          // image: newItem.image,
          img: newItem.img,
          price: newItem.price,
          desc: newItem.desc,
          quantity: newItem.quantity
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(Items => Items._id !== action.payload._id)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(Item => Item._id === _id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        localStorage.setItem("cartitems", JSON.stringify(state.cartItems));
      }
    }
  }
});
export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;