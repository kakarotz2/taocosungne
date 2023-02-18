import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    currentUser: {
      user: {
        name: '',
      },
      token: null,
    },
    error: '',
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
    },
    loginFalse: (state, action) => {
      state.isLoading = false;
      state.error = 'Không thể đăng nhập. Vui lòng thử lại';
    },
    logout: (state) => {
      state.isLoading = false;
      state.currentUser = {
        user: {
          name: '',
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
