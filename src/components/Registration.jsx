import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => (
  <>
    <div>
      <form action="">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="confirm password" />
        <button type="button">sign up</button>
      </form>
      <Link to="/signin">Log in</Link>
    </div>
  </>
);

export default Registration;
