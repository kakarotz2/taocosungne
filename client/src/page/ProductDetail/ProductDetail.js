import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import { getDetail } from '../../Redux/API/apiRequest';
import './ProductDetail.scss';

function Cart() {
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
      <div className="content-cart">{product === undefined ? '' : <div>{product.name}</div>}</div>
      <Footer />
    </React.Fragment>
  );
}
export default Cart;
