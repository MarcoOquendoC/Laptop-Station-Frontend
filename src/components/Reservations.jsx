import React, { useState, useEffect } from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo, deleteReserve } from '../redux/Reserve/reserve';
import NavPrincipal from './NavPrincipal';

const Reserve = () => {
  const auth = useSelector((store) => store.auth);
  const reserves = useSelector((store) => store.reserves);

  const [state, updateState] = useState('');
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname === '/details') {
      updateState(true);
    } else {
      updateState(!state);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservesInfo());
  }, [dispatch]);

  const handleDelete = (reserveId) => {
    dispatch(deleteReserve(reserveId));
  };

  return (
    <>
      <NavPrincipal />
      <Link to="/" onClick={() => handleBack()}>Back</Link>
      {
        auth.first_name ? (
          <div>
            <h1>
              {`${auth.first_name} ${auth.last_name}`}
              {' '}
              Reservations
            </h1>
            <div className="reserves">
              {
                reserves.map((reserve) => (
                  <div key={reserve.id}>
                    <strong>{reserve.title}</strong>
                    {': '}
                    <span>{reserve.date}</span>
                    <button type="button" onClick={() => handleDelete(reserve.id)}>🗑</button>
                  </div>
                ))
              }
            </div>
          </div>
        ) : <h1>Please login or register to manage reserves</h1>
      }
    </>
  );
};

export default Reserve;
