import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <React.Fragment>
      <Header />
      {/* {items.map((item) => (
        <div>{item.name}</div>
      ))} */}
      <Footer />
    </React.Fragment>
  );
}

export default Cart;
