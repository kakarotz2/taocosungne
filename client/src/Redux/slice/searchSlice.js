import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    isLoading: false,
    search: [],
    error: '',
  },
  reducers: {
    getStartS: (state) => {
      state.isLoading = true;
    },
    getSuccessS: (state, action) => {
      state.isLoading = false;
      state.search = action.payload;
      state.error = '';
    },
    getFalseS: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getFalseS, getStartS, getSuccessS } = SearchSlice.actions;
export const SearchProduct = SearchSlice.reducer;
