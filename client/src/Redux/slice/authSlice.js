import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    currentUser: {
      user: {
        id: '',
        name: '',
        role: '',
        date: '',
        email: '',
        phone: '',
      },
      token: null,
    },
    error: '',
    isSuccess: null,
    showDropdown: true,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = '';
      state.isSuccess = true;
    },
    loginFalse: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
    },
    logout: (state) => {
      state.isLoading = false;
      state.currentUser = {
        user: {
          id: '',
          name: '',
          role: '',
          date: '',
          email: '',
          phone: '',
        },
        token: null,
      };
      state.error = '';
      state.showDropdown = true;
    },
  },
});
export const { loginStart, loginFalse, loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
