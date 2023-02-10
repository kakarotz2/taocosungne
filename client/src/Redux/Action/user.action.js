import axios from 'axios';
import * as userType from '../Types/user.type';

export const register = (username, email, password) => {
  return (dispatch) => {
    try {
      axios
        .post('/api/register', {
          username: username,
          email: email,
          password: password,
        })
        .then((data) => {
          dispatch({
            type: userType.REGISTER_USER_SUCCESS,
            payload: data.data,
          });
        });
    } catch (err) {
      dispatch({
        type: userType.REGISTER_USER_FAIL,
        payload: err,
      });
    }
  };
};
export const login = (username, password) => {
  return (dispatch) => {
    try {
      axios.post('/api/login', { username, password }).then(({ data }) => {
        localStorage.setItem('token', data.token);
        dispatch({
          type: userType.LOGIN_USER_SUCCESS,
          payload: data,
        });
        localStorage.getItem(data.token);
      });
    } catch (err) {
      dispatch({
        type: userType.LOGIN_USER_FAIL,
        payload: err,
      });
    }
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: userType.LOGOUT_USER,
    });
  };
};
