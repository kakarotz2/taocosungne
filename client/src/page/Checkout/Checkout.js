import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import { getDetail } from '../../Redux/API/apiRequest';
import './index.scss';
function CheckOut() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail.detail);
  console.log(product);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  return (
    <React.Fragment>
      <Header />
      <div className="content-checkout"></div>
      <Footer />
    </React.Fragment>
  );
}
export default CheckOut;
