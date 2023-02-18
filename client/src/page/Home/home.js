import React from 'react';
import Banner from '../../component/Banner/banner';
import Footer from '../../component/Footer/footer';
import Header from '../../component/Header/header';
import AllProduct from '../AllProduct/Allproduct';
function Home() {
  return (
    <div>
      <Header />
      <React.Fragment>
        <Banner />
        <AllProduct />
      </React.Fragment>
      <Footer />
    </div>
  );
}
export default Home;
