import React, { useState, useEffect } from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo, deleteReserve } from '../redux/Reserve/reserve';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';

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
      <div className="viewfinder">
        <Link to="/" onClick={() => handleBack()} className="btn left"><img src={arrowLeft} alt="left" /></Link>
        {
          auth.first_name ? (
            <div className="reserves">
              <h1>
                Reservations
              </h1>
              <ul className="reserve_list">
                <li className="reserve_details">
                  <div className="model title">Model</div>
                  <div className="date title">Date</div>
                  <div className="action title">Delete</div>
                </li>
                {
                  reserves.map((reserve) => (
                    <li key={reserve.id} className="reserve_details">
                      <div className="model">{reserve.title}</div>
                      <div className="date">{reserve.date}</div>
                      <div className="action">
                        <button className="action_btn" type="button" onClick={() => handleDelete(reserve.id)}>🗑</button>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          ) : <div className="msg_alert">Please login or register to manage reserves</div>
        }
      </div>
    </>
  );
};

export default Reserve;
