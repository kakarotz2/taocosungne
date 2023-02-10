import React from 'react';
import Logo from '../../component/Loading/Logo/loading';
import { Link } from 'react-router-dom';
import chipi from '../../img/yasuo.png';
import './404.scss';

const NotFoundPage = () => (
  <div className="not-found-page ">
    <img style={{ width: '48px' }} src={chipi} alt="" />
    <h2>Đại Vương ơi không ổn rồi ...</h2>
    <p>Rất tiếc, trang bạn yêu cầu không tìm thấy.</p>
    <Logo />
    <p>
      <Link to="/">Trở lại trang chủ</Link>
    </p>
  </div>
);

export default NotFoundPage;
