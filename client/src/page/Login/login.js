import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './login.scss';
import Header from '../../component/Header/header';
import Loading from '../../component/Loading/loading/loading';
import { loginUser } from '../../Redux/API/apiRequest';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  console.log(user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser({ email, password }, dispatch, navigate);
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Mật khẩu:
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <div className="valition">
            <button type="submit">Đăng nhập</button>
            {user.error && <p style={{ color: 'red' }}>{user.error}</p>}
            <Link to="/register" style={{ color: 'blue' }}>
              Bạn chưa có tài khoản?
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
