import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const { name, email, password, address, phone } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      address,
      phone,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(newUser);

      const res = await axios.post('/api/register', body, config);
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      setError('Email đã tồn tại');
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
        <input type="text" name="address" value={address} onChange={onChange} placeholder="Address" />
        <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Number Phone" />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
