import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingProduct from '../../../component/Loading/LoadingProduct';
import './product.scss';

function MyComponent(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5 * 2;
  const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsOnCurrentPage = props.sendData ? props.sendData.slice(startIndex, endIndex) : [];
  return (
    <div>
      <div className="list-items">
        <div className="wrap-items">
          {props.isLoading ? (
            <LoadingProduct />
          ) : itemsOnCurrentPage.length === 0 ? (
            <p style={{ color: 'red', fontWeight: '600' }}>Xin lỗi hiện tại danh mục này không có sản phẩm</p>
          ) : (
            itemsOnCurrentPage.map((items) => (
              <div key={items._id} className="items">
                <Link to={`/product/${items._id}`}>
                  <div className="photo">
                    <img src={items.img} alt="logo" />
                  </div>
                  <div className="name">
                    <h3>{items.name}</h3>
                  </div>
                  <div className="price">
                    <p>{formatter.format(12000000)}</p>
                  </div>
                </Link>
                <div className="title">
                  <p title="Bảo hành chọn đời một đổi một cho từng sản phẩm bị lỗi trong vòng 1 tuần">
                    Bảo hành chọn đời một đổi một cho từng sản phẩm bị lỗi trong vòng 1 tuần
                  </p>
                </div>
              </div>
            ))
          )}

          {/* <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div>
          <div className="items"></div> */}
        </div>
      </div>
      {props.isLoading
        ? ''
        : Array.from(
            { length: Math.ceil(props.sendData ? props.sendData.length / itemsPerPage : null) },
            (_, index) => (
              <button className="next-page" key={index} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            ),
          )}
    </div>
  );
}
export default MyComponent;
