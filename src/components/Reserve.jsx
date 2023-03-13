import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Reserve = () => {
  const [state, updateState] = useState('');
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname === '/details') {
      updateState(true);
    } else {
      updateState(!state);
    }
  };

  return (
    <>
      <NavLink to="/" onClick={() => handleBack()}>Back</NavLink>
      <div>
        <h1>Hola reserva</h1>
        <form action="">
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </form>
      </div>
    </>
  );
};

export default Reserve;
