import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../Loading/Logo/loading';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faCartShopping,
  faHome,
  faNewspaper,
  faPhone,
  faProcedures,
  faTractor,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './header.scss';
import { logout } from '../../Redux/slice/authSlice';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { currentUser } = user;
  const handelLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token', user.currentUser.token);
    navigate('/login');
  };

  window.onscroll = function () {
    const hidden = document.querySelector('.wrap-top');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      hidden.style.display = 'none';
      scrollTopBtn.classList.add('show');
    } else {
      hidden.style.display = 'block';
      scrollTopBtn.classList.remove('show');
    }
    scrollTopBtn.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  };

  return (
    <header className="header">
      <div className="wrap-top">
        <div className="header-top ">
          <div className="header-news top">
            <Link to="/news">
              <FontAwesomeIcon className="icons" icon={faNewspaper} />
              Tin tức
            </Link>
          </div>
          <div className="header-facebook top">
            <a href=".">
              <FontAwesomeIcon className="icons" icon={faFacebook} />
              facebook
            </a>
          </div>
          <div className="header-phone top">
            <a href="tel:0969938892">
              <FontAwesomeIcon className="icons" icon={faPhone} />
              CSKH
            </a>
          </div>
        </div>
      </div>
      <div className="wrap-bottom">
        <div className="wrap">
          <div className="header-bottom">
            <div className="header-logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <form action="/search" className="header-search">
              <input
                type="text"
                placeholder="Bạn muồn tìm gì ?..."
                name="q"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            <nav className="header-menu">
              <div className="menu-item">
                <FontAwesomeIcon className="icons" icon={faHome} />
                <Link to="/">Trang chủ</Link>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon className="icons" icon={faProcedures} />
                <Link to="/products">Sản phẩm</Link>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon className="icons" icon={faTractor} />
                <Link to="/">Dịch vụ</Link>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon className="icons" icon={faPhone} />
                <Link to="/contact">Liên hệ</Link>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon className="icons" icon={faCartShopping} />
                <Link to="/cart">Giỏ hàng (0)</Link>
              </div>
              <div className="menu-item">
                <div className="dropdown">
                  <FontAwesomeIcon className="icons" icon={faUser} />
                  {currentUser.user.name ? currentUser.user.name : 'Tài khoản'}
                  {!currentUser.user.name
                    ? user.showDropdown && (
                        <div className="dropdown-content">
                          <Link to="/login">
                            <p>Đăng nhập</p>
                          </Link>
                          <Link to="/register">
                            <p>Đăng kí</p>
                          </Link>
                        </div>
                      )
                    : user.showDropdown && (
                        <div className="dropdown-content">
                          <Link to="/account">
                            <p>Tài Khoản</p>
                          </Link>
                          <button className="btn_2" onClick={() => handelLogout()}>
                            Đăng xuất
                          </button>
                        </div>
                      )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <button id="scrollTopBtn">
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </button>
    </header>
  );
};

export default Header;
