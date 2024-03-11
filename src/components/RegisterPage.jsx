import React from 'react'
import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Form submitted:', { username, email, password });
  };

  return (
    <div className='login-container'>
      <h2>Sign Up for free!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='sign-up-inputs'
            type='text'
            id='username'
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className='sign-up-inputs'
            type='text'
            id='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className='sign-up-inputs'
            type='text'
            id='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className='sign-up-inputs'
            type='text'
            id='confirmPassword'
            value={confirmPassword}
            placeholder='Confirm password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </form>
      <button className='btn-sign-up'>Sign Up</button>
    </div>
  );
}

export default RegisterPage
