import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import './product.scss';
function Product() {
  const [prodcut, setProdcut] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios('/api/product');
      setProdcut(data.data);
    };
    fetchData();
  }, []);
  console.log(prodcut);
  return (
    <React.Fragment>
      <Header />
      <div></div>
      <Footer />
    </React.Fragment>
  );
}
export default Product;
