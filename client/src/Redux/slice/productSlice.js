import { createSlice } from '@reduxjs/toolkit';

const PhonetSlice = createSlice({
  name: 'phone',
  initialState: {
    isLoading: false,
    phone: [],
    error: '',
  },
  reducers: {
    getStartP: (state) => {
      state.isLoading = true;
    },
    getSuccessP: (state, action) => {
      state.isLoading = false;
      state.phone = action.payload;
      state.error = '';
    },
    getFalseP: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const LaptopSlice = createSlice({
  name: 'laptop',
  initialState: {
    isLoading: false,
    laptop: [],
    error: '',
  },
  reducers: {
    getStartL: (state) => {
      state.isLoading = true;
    },
    getSuccessL: (state, action) => {
      state.isLoading = false;
      state.laptop = action.payload;
      state.error = '';
    },
    getFalseL: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getStartP, getSuccessP, getFalseP } = PhonetSlice.actions;
export const { getStartL, getSuccessL, getFalseL } = LaptopSlice.actions;
export const PhoneProduct = PhonetSlice.reducer;
export const LaptopProduct = LaptopSlice.reducer;
