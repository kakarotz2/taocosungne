import { createSlice } from '@reduxjs/toolkit';

const DetailSlice = createSlice({
  name: 'detail',
  initialState: {
    isLoading: false,
    detail: [],
    error: '',
  },
  reducers: {
    getStartD: (state) => {
      state.isLoading = true;
    },
    getSuccessD: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.error = '';
    },
    getFalseD: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getStartD, getSuccessD, getFalseD } = DetailSlice.actions;
export const DetailProduct = DetailSlice.reducer;
