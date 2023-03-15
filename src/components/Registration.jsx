import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../redux/Registration/auth';

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
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">
            <input onChange={(e) => setFirstName(e.target.value)} id="first_name" type="text" placeholder="first name" />
          </label>
          <label htmlFor="last_name">
            <input onChange={(e) => setLastName(e.target.value)} id="last_name" type="text" placeholder="last name" />
          </label>
          <label htmlFor="email">
            <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email" />
          </label>
          <label htmlFor="password">
            <input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="password" />
          </label>
          <label htmlFor="confirm_password">
            <input onChange={(e) => setConfirmPassword(e.target.value)} id="confirm_password" type="password" placeholder="confirm password" />
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>
          Or
          {' '}
          <Link to="/signup">Log in</Link>
          {' '}
          if you already have an account.
        </p>
      </div>
    </>
  );
};

export default Registration;
