import Header from '../../component/Header/header';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './search.scss';
function Search() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchValue = new URLSearchParams(location.search.toLowerCase()).get('q');
    const fetchData = async () => {
      const result = await axios.get(`/api/product/${searchValue}`);
      setResults(result.data);
    };
    fetchData();
  }, [location.search]);
  if (location.search === '?q=') {
    var search = 'Tất cả';
  } else {
    search = location.search;
  }
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: '120px' }}>
        Kết quả tìm kiếm với {location.search === '?q=' ? (search = 'Tất cả') : search.slice((0, 3)).toUpperCase()}
        {results.map((item) => {
          return (
            <li key={item._id}>
              {item.name}, {item.price}, {item.trademark}
            </li>
          );
        })}
      </div>
    </React.Fragment>
  );
}
export default Search;
