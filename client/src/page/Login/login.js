import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './login.scss';
import * as userAction from '../../Redux/Action/user.action';
import Header from '../../component/Header/header';
import Loading from '../../component/Loading/loading/loading';

const LoginForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [focused, setFocused] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_USER' });
    dispatch(userAction.login(username, password));
    if ((user.userInfo.success = true)) {
      Navigate('/');
    }

    // console.log(user);
    // setIsLoading(true);
    // try {
    //   await axios.post('api/login', { email, password }).then((res) => {
    //     if (res.data.token) {
    //       localStorage.setItem('token', res.data.token);
    //       return res.data;
    //     } else {
    //       return res.data;
    //     }
    //   });
    //   const token = localStorage.getItem('token');
    //   console.log('token:' + token);
    //   // handle successful login
    //   Navigator({
    //     pathname: '/',
    //   });
    // } catch (err) {
    //   setError({ ...error, err: 'Email hoặc mật khẩu không đúng' });
    // }
    // // Xử lý đăng nhập, gửi username và password đến API hoặc xử lý các hành động khác
    if (!username) {
      setError({ ...error, username: 'Tên đăng nhập là bắt buộc' });
    } else if (!password) {
      setError({ ...error, password: 'Mật khẩu là bắt buộc' });
    } else {
      console.log('username:', username);
      console.log('Password:', password);
    }
    // setIsLoading(false);
  };
  return (
    <React.Fragment>
      {user.isLoading ? <Loading /> : ''}
      <Header />

      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Tên đăng nhập:
            <input
              type="text"
              value={username}
              onFocus={() => setFocused({ ...focused, username: true })}
              onBlur={() => setFocused({ ...focused, username: false })}
              onChange={(e) => {
                setUsername(e.target.value);
                setError({ ...error, username: '' });
              }}
              className={focused.username ? 'focused' : ''}
            />
            {error.username && <p style={{ color: 'red' }}>{error.username}</p>}
          </label>
          <br />
          <label>
            Mật khẩu:
            <input
              type="password"
              value={password}
              onFocus={() => setFocused({ ...focused, password: true })}
              onBlur={() => setFocused({ ...focused, password: false })}
              onChange={(e) => {
                setPassword(e.target.value);
                setError({ ...error, password: '' });
              }}
              className={focused.password ? 'focused' : ''}
            />
            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
          </label>
          <br />
          <div className="valition">
            <button type="submit">Đăng nhập</button>
            <Link to="/register" style={{ color: 'blue' }}>
              Bạn chưa có tài khoản?
            </Link>
            {error.err && <p style={{ color: 'red' }}>{error.err}</p>}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
