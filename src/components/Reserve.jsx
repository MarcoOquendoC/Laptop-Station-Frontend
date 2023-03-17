import React, { useState, useEffect } from 'react';
import {
  Link, useLocation, useParams, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo, addReserve } from '../redux/Reserve/reserve';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';

const Reserve = () => {
  const params = useParams();
  const { itemId } = params;
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);

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

  return (
    <>
      <NavPrincipal />
      <div className="viewfinder">
        <Link to={`/detail/${itemId}`} onClick={() => handleBack()} className="btn left"><img src={arrowLeft} alt="left" /></Link>
        {
          auth.first_name ? (
            <div className="new-reservation-cont">
              <h1 className="new-reservation-title">
                New Reservation
              </h1>
              <form onSubmit={addReservation}>
                <input className="date" onChange={(e) => setDate(e.target.value)} type="date" placeholder="2000-12-31" />
                <button type="submit">Add</button>
              </form>

            </div>
          ) : <div className="msg_alert">Please login or register to manage Reserves</div>
        }
      </div>
    </>
  );
};

export default Reserve;
