import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cortex from '../assets/Cortex.png';
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === "admin" && password === "password") {
     
      localStorage.setItem('username', username);
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };
 
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ textAlign: 'left', width: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <img src={Cortex} alt="Cortex Logo" />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '10px', padding: '10px', width: '100%', display: 'block' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '10px', padding: '10px', width: '100%', display: 'block' }}
          />
        </div>
       
        <a href="/forgot-password" style={{ display: 'block', marginBottom: '10px', color: 'black', textDecoration: 'none', textAlign: 'right' }}>
          Forgot Password?
        </a>
        <button type="submit" style={{ padding: '10px', background: 'blue', color: 'white', width: '100%' }}>
          Login
        </button>
      </form>
    </div>
  );
};
 
export default Login;