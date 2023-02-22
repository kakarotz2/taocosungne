import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import { getDetail } from '../../Redux/API/apiRequest';
import './ProductDetail.scss';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  console.log(product);

  return (
    <React.Fragment>
      <Header />
      {product === undefined ? (
        ''
      ) : (
        <div className="titel-detail">
          <p className="title">{product.name}</p>
          <div className="content-detail">
            <div className="detail-img">
              <div className="detail-img-top">
                <img src={product.img} alt="" />
              </div>
            </div>
            <div className="detail-mid">
              <p>{product.price}</p>
              <div className="choose">
                <div>
                  <strong> 512GB </strong>
                  <br />
                  {product.price}
                </div>
                <div>
                  <strong> 512GB </strong>
                  <br />
                  {product.price}
                </div>
              </div>
              <div className="promotion">
                <div className="promotion-title">
                  <FontAwesomeIcon icon={faGift} />
                  <p>Khuyến mại</p>
                </div>
                <div className="promotion-content">
                  Nhập mã <span style={{ color: 'red' }}>{product._id}</span> để được giảm giá khi thanh toán
                </div>
              </div>
              <div className="pay">
                <div className="pay-now">
                  <span style={{ fontWeight: '700' }}>Mua Ngay</span> <br />{' '}
                  <span>(Giao hàng tận nơi hoặc nhận tại cửa hàng)</span>
                </div>
                <div className="installment">
                  <div className="installment_0percent">
                    Trả góp 0% <br /> (xét duyệt qua điện thoại)
                  </div>
                  <div className="installment-card">
                    Trả góp qua thẻ <br /> (Visa, MasterCard, JCB)
                  </div>
                </div>
                <div className="bonus-offer">
                  <div></div>
                </div>
              </div>
            </div>
            <div className="detail-right">
              <div className="info">
                <span>Thông tin sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
}
export default ProductDetail;
