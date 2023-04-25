import React, { useState } from 'react';
import axios from 'axios';
function Test() {
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [descreption, setDescreption] = useState(null);
  const [trademark, setTrademark] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [category, setCategory] = useState('Điện thoại');
  const [err, setErr] = useState(false);

  console.log(err);
  const handerSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('descreption', descreption);
    formData.append('trademark', trademark);
    formData.append('origin', origin);
    formData.append('category', category);
    try {
      await axios.post('/api/add', formData, {});
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="container">
      <div className="name">
        <input type="text" placeholder="Tên sản phẩm" name="name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="name">
        <input type="number" placeholder="Giá" name="price" onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="name">
        <input type="text" placeholder="Mô tả" name="descreption" onChange={(e) => setDescreption(e.target.value)} />
      </div>
      <div className="name">
        <input type="text" placeholder="Thương hiệu" name="trademark" onChange={(e) => setTrademark(e.target.value)} />
      </div>
      <div className="name">
        <input type="text" placeholder="Xuất sứ" name="origin" onChange={(e) => setOrigin(e.target.value)} />
      </div>
      <div className="name">
        <p>Thể loại</p>
        <select name="category" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="Điện thoại">Điện thoại</option>
          <option value="laptop">Lap Top</option>
          <option value="pc">Máy tính</option>
          <option value="accesory">Phụ kiện</option>
        </select>
      </div>
      <div className="row">
        <form onSubmit={handerSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input type="file" onChange={(e) => setImg(e.target.files[0])} name="img" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Tải lên
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Test;
