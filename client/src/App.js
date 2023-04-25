import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './page/404';
import Home from './page/Home/home';
import LoginForm from './page/Login/login';
import Product from './page/Product/product';
import Register from './page/Register/register';
import Search from './page/Search/search';
import ProductDetail from './page/ProductDetail/ProductDetail';
import Test from './page/Admin';
import Contact from './page/Contact/Contact';
import './App.scss';
import LoginAdmin from './page/Admin/LoginAdmin';
import AdminPage from './page/Admin/admin';
import Account from './page/Account/Account';
import CheckOut from './page/Checkout/Checkout';
import Cart from './page/Cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<AdminPage />}></Route>

          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
