import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/Registration/auth';

const Session = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login({ user }));
    navigate('/');
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email" />
          </label>
          <label htmlFor="password">
            <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="password" />
          </label>
          <button type="submit">Log in</button>
        </form>
        <p>
          Or
          {' '}
          <Link to="/signup">Sign up</Link>
          {' '}
          if you don&apos;t have an account.
        </p>
      </div>
    </>
  );
};

export default Session;
