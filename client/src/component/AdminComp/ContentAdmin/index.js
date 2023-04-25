import React, { useState } from 'react';
import './index.scss';

function ContentAdmin() {
  return (
    <div className="content-admin">
      <div className="title">
        <div className="account b">
          <div className="title-account">
            <span>Người dùng</span>
          </div>
        </div>
        <div className="products b">
          <div className="title-account">
            <span>Tất cả sản phẩm</span>
          </div>
        </div>
        <div className="order b">
          <div className="title-account">
            <span>Tất cả đơn hàng</span>
          </div>
        </div>
        <div className="total b">
          <div className="title-account">
            <span>Tổng thu nhập</span>
          </div>
        </div>
      </div>
      <div className="c">
        <div className="c-user"></div>
        <div className="c-product"></div>
      </div>
    </div>
  );
}

export default ContentAdmin;
