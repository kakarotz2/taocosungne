import React from 'react';
import Header from '../../component/Header/header';
import bg from '../../imgs/bg1.gif';
import './index.scss';
import { logout } from '../../Redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/Footer/footer';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = localStorage.getItem('username');
  const date = localStorage.getItem('date');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('number');
  const _id = localStorage.getItem('id');
  const role = localStorage.getItem('role');

  const handelLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('date');
    localStorage.removeItem('number');
    localStorage.removeItem('id');
    navigate('/login');
  };
  return (
    <React.Fragment>
      <Header />
      <div className="account-info">
        <div className="img-account">
          <div class="wrapper">
            <img src={bg} alt="Background" />
            <div className="avatar"></div>
          </div>
        </div>
        <div className="info">
          <span>UID: {name}</span>
          <br />
          <button onClick={handelLogout}>Đăng Xuất</button>
        </div>
        <div className="info-account">
          <div className="history-trade">Lich su giao dich</div>
          <div className="info-ac">
            <span>Thông tin tài khoản</span>
            <table>
              <tbody>
                <tr>
                  <th scope="row">_ID:</th>
                  <th>{_id}</th>
                </tr>
                <tr>
                  <th scope="row">UID:</th>
                  <th>{name}</th>
                </tr>
                <tr>
                  <th scope="row">Email:</th>
                  <th>{email}</th>
                </tr>
                <tr>
                  <th scope="row">Chức Vụ:</th>
                  <th>{role}</th>
                </tr>
                <tr>
                  <th scope="row">Số điện thoại:</th>
                  <th>0{phone}</th>
                </tr>
                <tr>
                  <th scope="row">Ngày tham gia:</th>
                  <th>{date.slice(0, -14)}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Account;
