import axios from 'axios';
import { loginFalse, loginStart, loginSuccess } from '../slice/authSlice';
import { getFalseD, getStartD, getSuccessD } from '../slice/detailSlice';
import {
  getFalseA,
  getFalseL,
  getFalseP,
  getFalsePc,
  getStartA,
  getStartL,
  getStartP,
  getStartPc,
  getSuccessA,
  getSuccessL,
  getSuccessP,
  getSuccessPc,
} from '../slice/productSlice';
import { getFalseS, getStartS, getSuccessS } from '../slice/searchSlice';

export const loginUser = async ({ email, password }, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/api/login', { email, password });
    dispatch(loginSuccess(res.data));
    const username = res.data.user.name;
    const role = res.data.user.role.trim();
    const date = res.data.user.date.trim();
    const account = res.data.user.email;
    const uid = res.data.user._id;
    const number = res.data.user.phone;

    console.log(uid);
    localStorage.setItem('username', username);
    localStorage.setItem('id', uid);
    localStorage.setItem('number', number);
    localStorage.setItem('date', date);
    localStorage.setItem('email', account);
    localStorage.setItem('role', role);
    localStorage.setItem('token', res.data.token.slice(7, -1));
    if (role === 'admin') {
      console.log('dang login');
      return navigate('/admin');
    } else {
      navigate('/');
    }
  } catch (err) {
    dispatch(loginFalse(err.response.data.message));
  }
};

// lay du lieu san pham tu server
export const getPhone = () => async (dispatch) => {
  dispatch(getStartP());
  try {
    const res = await axios.get('api/product/phone');
    dispatch(getSuccessP(res.data));
  } catch (err) {
    dispatch(getFalseP());
  }
};

export const getLaptop = () => async (dispatch) => {
  dispatch(getStartL());
  try {
    const res = await axios.get('api/product/laptop');
    dispatch(getSuccessL(res.data));
  } catch (err) {
    dispatch(getFalseL());
  }
};

export const getPC = () => async (dispatch) => {
  dispatch(getStartPc());
  try {
    const res = await axios.get('api/product/pc');
    dispatch(getSuccessPc(res.data));
  } catch (err) {
    dispatch(getFalsePc());
  }
};

export const getAccessory = () => async (dispatch) => {
  dispatch(getStartA());
  try {
    const res = await axios.get('api/product/accessory');
    dispatch(getSuccessA(res.data));
  } catch (err) {
    dispatch(getFalseA());
  }
};
// tim` kiem'
export const getSearch = () => async (dispatch) => {
  dispatch(getStartS());
  try {
    const res = await axios.get('api/product/search/:name');
    dispatch(getSuccessS(res));
  } catch (error) {
    dispatch(getFalseS());
  }
};

// detail data
export const getDetail = (id) => async (dispatch) => {
  dispatch(getStartD());
  try {
    const res = await axios.get(`/api/product/getid/${id}`);
    dispatch(getSuccessD(res.data));
  } catch (error) {
    dispatch(getFalseD());
  }
};
