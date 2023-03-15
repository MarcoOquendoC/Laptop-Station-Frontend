import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../redux/Registration/auth';
import NavPrincipal from './NavPrincipal';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    dispatch(register({ user }));
    navigate('/');
  };

  return (
    <>
      <NavPrincipal />
      <div className="viewfinder">
        <div className="register">
          <h1>Sign In</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name" />
            <input className="form__input" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name" />
            <input className="form__input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
            <input className="form__input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
            <input className="form__input" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="confirm password" />
            <div className="form__input" />
            <button className="form__btn" type="submit">Sign up</button>
          </form>
          <p>
            Or
            <Link to="/login" className="orsignup"> Log in </Link>
            if you already have an account.
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
