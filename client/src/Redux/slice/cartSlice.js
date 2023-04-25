// file cartSlice.js

import { createSlice } from '@reduxjs/toolkit';
export const addMultipleProductsToCart = (products) => (dispatch) => {
  products.forEach((product) => {
    dispatch(addToCart(product));
  });
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex < 0) {
        // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        // Sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm lên 1
        state.items[itemIndex].quantity += 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
