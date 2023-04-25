import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/API/apiRequest';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password }, dispatch, navigate);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Username:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {message && <div>{message}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginAdmin;
