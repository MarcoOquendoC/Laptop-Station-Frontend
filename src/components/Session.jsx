import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/Registration/auth';
import NavPrincipal from './NavPrincipal';

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
      <NavPrincipal />
      <div className="viewfinder">
        <div className="register">
          <h1>Log In</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input className="form__input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            <div className="form__input" />
            <button className="form__btn" type="submit">Log in</button>
          </form>
          <p>
            Or
            <Link to="/signup" className="orsignup"> Sign up </Link>
            if you don&apos;t have an account.
          </p>
        </div>
      </div>
    </>
  );
};

export default Session;
