import Header from '../../component/Header/header';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../../component/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
import MyComponent from '../AllProduct/MyProduct';
import './search.scss';

function Search() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchValue = new URLSearchParams(location.search.toLowerCase()).get('q');
  useEffect(() => {
    const searchValue = new URLSearchParams(location.search.toLowerCase()).get('q');
    const fetchData = async () => {
      const result = await axios.get(`/api/product/search/${searchValue}`);
      setResults(result.data);
    };
    fetchData();
  }, [location.search]);
  return (
    <React.Fragment>
      <Header />
      <div className="search">
        <div className="search-top">
          <Link to="/">
            <FontAwesomeIcon style={{ margin: '0 4px 0 0', color: '#322e2ec4' }} icon={faHome} /> Trang chủ{' '}
          </Link>{' '}
          <FontAwesomeIcon style={{ margin: '0 8px', color: '#322e2ec4' }} icon={faChevronRight} />
          Kết quả tìm kiếm với: <strong style={{ color: '#444343' }}> "{searchValue ? searchValue : 'Tất cả'}"</strong>
        </div>
        <div className="search-content">
          <div className="arrange">
            <p>Sắp xếp theo</p>
            <p>Tăng dần</p>
            <p>Giảm dần</p>
          </div>
          <div className="content">
            {false ? (
              <p className="not-found">
                Tìm thấy <strong>0</strong> sản phẩm cho kết quả tìm kiếm với từ khóa:
                <strong style={{ color: '#444343' }}> "{searchValue ? searchValue : 'Tất cả'}"</strong>
              </p>
            ) : (
              <MyComponent sendData={results} />
            )}
          </div>
        </div>
        <div className="search-bot"></div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Search;
