import './login.scss';
import React, { useState } from 'react';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/API/apiRequest';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const mes = useSelector((state) => state.auth);

  const handerValidator = () => {
    if (email.trim() === '' || password.trim() === '') {
      setError('Email và mật khẩu không được để trống');
    }
    if (mes.isSuccess == false) {
      setError(mes.error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handerValidator();
    loginUser({ email, password }, dispatch, navigate);
  };
  return (
    <React.Fragment>
      <Header />
      {/* {user.isLoading ? <Loadding /> : ''} */}
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            {/* Đăng nhập */}
            <div className="col-md-6 left">
              <div className="input-box">
                <header>Đăng Nhập</header>
                <div className="input-field">
                  <input
                    type="text"
                    value={email}
                    className="input-control"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  {/* {setErrE} */}
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: '9px' }}></div>
                    <div className="form-notch-middle" style={{ width: '92px' }}></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    value={password}
                    className="input-control"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setError('')}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: '9px' }}></div>
                    <div className="form-notch-middle" style={{ width: '72px' }}></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
                <div className="input-field">
                  <input
                    type="submit"
                    className="submit"
                    value="Đăng nhập"
                    onBlur={() => setError('')}
                    onClick={handleSubmit}
                  />
                </div>
                {error && <p style={{ color: 'red', marginTop: '8px', fontWeight: '600' }}>{error}</p>}
                <div className="signin">
                  <span>
                    Bạn chưa có tài khoản? <a href=".">Đăng kí</a>
                  </span>
                </div>
              </div>
            </div>
            {/* Đăng kí */}
            <div className="col-md-6 right "></div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default LoginPage;
