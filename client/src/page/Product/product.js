import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import MyComponent from '../AllProduct/MyProduct';
import './product.scss';
function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios('/api/product');
      setProduct(data.data);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="product-page">
        <div className="top-product">
          <Link to="/">
            <FontAwesomeIcon style={{ margin: '0 4px 0 0', color: '#322e2ec4' }} icon={faHome} /> Trang chủ{' '}
          </Link>{' '}
          <FontAwesomeIcon style={{ margin: '0 8px', color: '#322e2ec4' }} icon={faChevronRight} /> Sản phẩm
        </div>
        <MyComponent sendData={product} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Product;
