import React, { useState, useEffect } from 'react';
import {
  Link, useLocation, useParams, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo, addReserve, deleteReserve } from '../redux/Reserve/reserve';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';

const Reserve = () => {
  const params = useParams();
  const { itemId } = params;

  const navigate = useNavigate();

  const auth = useSelector((store) => store.auth);
  const reserves = useSelector((store) => store.reserves);

  const [state, updateState] = useState('');
  const [date, setDate] = useState('2023-12-14');
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

  const addReservation = () => {
    const reserve = {
      date,
      user_id: auth.id,
      item_id: itemId,
    };
    dispatch(addReserve(reserve));
    navigate('/reservations');
  };

  const handleDelete = (reserveId) => {
    dispatch(deleteReserve(reserveId));
  };

  return (
    <>
      <NavPrincipal />
      <Link to={`/detail/${itemId}`} onClick={() => handleBack()}>Back</Link>
      {
        auth.first_name ? (
          <div>
            <h1>
              New Reservation
            </h1>
            <form onSubmit={addReservation}>
              <input className="date" onChange={(e) => setDate(e.target.value)} type="date" placeholder="2000-12-31" />
              <button type="submit">Add</button>
            </form>
            <h2>Reservations for this laptop</h2>
            <div className="reserves">
              {
                reserves.filter((r) => r.item_id === Number(itemId)).map((reserve) => (
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
