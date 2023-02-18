import axios from 'axios';
import { loginFalse, loginStart, loginSuccess } from '../slice/authSlice';
import { getFalseL, getFalseP, getStartL, getStartP, getSuccessL, getSuccessP } from '../slice/productSlice';

export const loginUser = async ({ email, password }, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    await axios.post('api/login', { email, password }).then((res) => {
      if (res.data) {
        dispatch(loginSuccess(res.data));
        console.log(res);
        localStorage.setItem('token', res.data.token.slice(7, -1));
        navigate('/');
      } else {
      }
    });
  } catch (err) {
    console.log(err);
    dispatch(loginFalse());
  }
};

// lay du lieu san pham tu server
export const getPhone = () => async (dispatch) => {
  dispatch(getStartP());
  try {
    const res = await axios.get('api/product/phone');
    dispatch(getSuccessP(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getFalseP());
  }
};

export const getLaptop = () => async (dispatch) => {
  dispatch(getStartL());
  try {
    const res = await axios.get('api/product/laptop');
    dispatch(getSuccessL(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getFalseL());
  }
};

export const getPC = () => async (dispatch) => {
  dispatch(getStartL());
  try {
    const res = await axios.get('api/product/pc');
    dispatch(getSuccessL(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getFalseL());
  }
};

export const getAccessory = () => async (dispatch) => {
  dispatch(getStartL());
  try {
    const res = await axios.get('api/product/accessory');
    dispatch(getSuccessL(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getFalseL());
  }
};
