import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import { LaptopProduct, PhoneProduct } from './slice/productSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    phone: PhoneProduct,
    laptop: LaptopProduct,
  },
});

export default store;
