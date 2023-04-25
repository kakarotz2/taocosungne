import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingProduct from '../../../component/Loading/LoadingProduct';
import './product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MyComponent(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5 * 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsOnCurrentPage = props.sendData ? props.sendData.slice(startIndex, endIndex) : [];
  return (
    <div>
      <div className="list-items">
        <div className="wrap-items">
          {props.isLoading ? (
            <LoadingProduct />
          ) : (
            itemsOnCurrentPage.map((items) => (
              <div key={items._id} className="items">
                <Link to={`/product/${items._id}`}>
                  <div className="photo">
                    <img src={items.img} alt="logo" />
                  </div>
                  <div className="name">
                    <h3>{items.name}</h3>
                  </div>
                  <div className="price">
                    <p>{items.price}</p>
                  </div>
                </Link>
                <div className="title">
                  <p title={items.descreption}>{items.descreption}</p>
                </div>
                <div className="start">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {props.isLoading
        ? ''
        : Array.from(
            { length: Math.ceil(props.sendData ? props.sendData.length / itemsPerPage : null) },
            (_, index) => (
              <button className="next-page" key={index} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            ),
          )}
    </div>
  );
}
export default MyComponent;
