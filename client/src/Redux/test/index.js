import React, { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';

function MyComponent() {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 15; // 5 items trên mỗi hàng và 3 hàng, nên có tổng cộng 15 items trên mỗi trang
  const data = [
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
    { img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250.jpg' },
  ];

  // Tính toán số lượng trang dựa trên số lượng phần tử và số lượng phần tử trên mỗi trang
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Tính toán chỉ số bắt đầu và kết thúc của các phần tử hiển thị trên trang hiện tại
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  // Lấy ra các phần tử hiển thị trên trang hiện tại
  const currentPageData = data.slice(startIndex, endIndex);

  // Hàm xử lý khi click vào phân trang
  const handlePageChange = (event) => {
    setActivePage(event.target.text);
  };

  return (
    <div>
      {[...Array(3)].map((_, rowIndex) => (
        <Row key={rowIndex}>
          {currentPageData.slice(rowIndex * 5, rowIndex * 5 + 5).map((item) => (
            <Col md={2} key={item.id}>
              <div>
                <img src={item.img} alt="ssss" />
              </div>
            </Col>
          ))}
        </Row>
      ))}
      <Pagination>
        {Array.from({ length: pageCount }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === activePage} onClick={handlePageChange}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}
export default MyComponent;
