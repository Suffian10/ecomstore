import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import './Signup.css'
export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('User logged in:', userData);
        navigate('/home');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <div className='signup-wrapper'>
      <div className='signup-container'>
        <h1>Welcome to WebCart</h1>
        <div className='Signup-form'>
          <form>
            <div className='signup-field'>
              <label className='label-tag'>Email</label>
              <input
                className='signup-inputfield'
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='signup-field'>
              <label className='label-tag'>Password</label>
              <input
                id='myInput'
                className='signup-inputfield'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='button' className='btnn' onClick={handleLogin}>
              Login
            </button>
            <h1 className='text-btn-2'>
              You want to create an account?
              <br />
              <Link className='kuch-bhi' to={'/signup'}>
                Sign Up
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
