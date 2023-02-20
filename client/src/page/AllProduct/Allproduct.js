import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAccessory, getLaptop, getPhone } from '../../Redux/API/apiRequest';
import MyComponent from './MyProduct';
import './index.scss';

function AllProduct() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhone());
    dispatch(getLaptop());
    dispatch(getAccessory());
  }, [dispatch]);

  const infoPhone = useSelector((state) => state.phone.phone);
  const isLoadingP = useSelector((state) => state.phone.isLoading);

  const infoLaptop = useSelector((state) => state.laptop.laptop);
  const isLoadingL = useSelector((state) => state.laptop.isLoading);

  const infoPC = useSelector((state) => state.pc.Pc);
  const isLoadingPC = useSelector((state) => state.pc.isLoading);

  const infoAccessory = useSelector((state) => state.accessory.accessory);
  const isLoadingA = useSelector((state) => state.accessory.isLoading);

  return (
    <div className="product">
      <div className="phone product-item">
        <div className="all">
          <Link to="/">
            <p>Điện thoại nổi bật</p>
          </Link>
          <div className="category">
            <Link to="/">iPhone</Link>
            <Link to="/">Nokia</Link>
            <Link to="/">SamSung</Link>
            <Link to="/">Xem tất cả</Link>
          </div>
        </div>
        <div className="product-list-item">
          <MyComponent sendData={infoPhone} isLoading={isLoadingP} />
        </div>
      </div>
      <div className="laptop product-item">
        <div className="all">
          <Link to="/">
            <p>Laptop</p>
          </Link>
          <div className="category">
            <Link to="/">Dell</Link>
            <Link to="/">Lenovo</Link>
            <Link to="/">GTX-4090</Link>
            <Link to="/">Xem tất cả</Link>
          </div>
        </div>
        <div className="product-list-item">
          <MyComponent sendData={infoLaptop} isLoading={isLoadingL} />
        </div>
      </div>
      <div className="pc product-item">
        <div className="all">
          <Link to="/">
            <p>Màn Hình, máy để bàn</p>
          </Link>
          <div className="category">
            <Link to="/">Dell</Link>
            <Link to="/">Lenovo</Link>
            <Link to="/">GTX-4090</Link>
            <Link to="/">Xem tất cả</Link>
          </div>
        </div>
        <div className="product-list-item">
          <MyComponent sendData={infoPC} isLoading={isLoadingPC} />
        </div>
      </div>
      <div className="tablet product-item">
        <div className="all">
          <Link to="/">
            <p>Phụ kiện</p>
          </Link>
          <div className="category">
            <Link to="/">Tai nghe</Link>
            <Link to="/">Ốp lưng</Link>
            <Link to="/">Cáp sạc</Link>
            <Link to="/">Xem tất cả</Link>
          </div>
        </div>
        <div className="product-list-item">
          <MyComponent sendData={infoAccessory} isLoading={isLoadingA} />
        </div>
      </div>
    </div>
  );
}
export default AllProduct;
