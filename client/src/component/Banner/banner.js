import React from 'react';
import { Link } from 'react-router-dom';
import './banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faBullhorn,
  faChevronRight,
  faClock,
  faDesktop,
  faHeadphonesSimple,
  faHouseSignal,
  faLaptopCode,
  faMobileScreen,
  faParachuteBox,
  faTabletScreenButton,
  faTv,
} from '@fortawesome/free-solid-svg-icons';
import Slider from './Silder/slider';
function Banner() {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="list-items">
          <div className="item">
            <Link to="/">
              <div className="lable-item first">
                <FontAwesomeIcon className="icons" icon={faMobileScreen} />
                <span>Điện thoại</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faLaptopCode} />
                <span>Laptop</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faTabletScreenButton} />
                <span>Máy tính bảng</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faHeadphonesSimple} />
                <span>Âm thanh</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faClock} />
                <span>Đồng hồ</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faHouseSignal} />
                <span>Nhà thông minh</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faTv} />
                <span>Pc - Màn hình</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faDesktop} />
                <span>Tivi</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>

            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faParachuteBox} />
                <span>Hàng cũ</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>
            <Link to="/">
              <div className="lable-item">
                <FontAwesomeIcon className="icons" icon={faBullhorn} />
                <span>Khuyến mại</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>
            <Link to="/">
              <div className="lable-item last">
                <FontAwesomeIcon className="icons" icon={faReact} />
                <span>Reactjs.org</span>
                <FontAwesomeIcon className="j" icon={faChevronRight} />
              </div>
            </Link>
          </div>
        </div>
        <div className="banner-container">
          <Slider />
        </div>

        <div className="helo">
          <div className="left-banner">
            <img
              src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/fold-4-00241.png"
              alt=""
            />

            <img
              className="mid"
              src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/right-banner-aw-vlt-009.png"
              alt=""
            />

            <img
              src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/fold-4-00241.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Banner;
