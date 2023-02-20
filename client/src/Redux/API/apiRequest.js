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
  dispatch(getStartPc());
  try {
    const res = await axios.get('api/product/pc');
    dispatch(getSuccessPc(res.data));
  } catch (err) {
    console.log(err);
    dispatch(getFalsePc());
  }
};

export const getAccessory = () => async (dispatch) => {
  dispatch(getStartA());
  try {
    const res = await axios.get('api/product/accessory');
    dispatch(getSuccessA(res.data));
  } catch (err) {
    console.log(err);
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
