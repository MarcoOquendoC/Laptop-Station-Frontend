import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo, deleteReserve } from '../redux/Reserve/reserve';
import NavPrincipal from './NavPrincipal';
import { currentUser } from '../redux/Registration/auth';

const Reserve = () => {
  const params = useParams();
  const itemId = params.id;
  console.log(itemId);

  const [state, updateState] = useState('');
  const [date, setDate] = useState('2000/12/31');
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

  const handleDelete = (id) => {
    dispatch(deleteReserve(id));
  };

  const auth = useSelector((store) => store.auth);
  const reserves = useSelector((store) => store.reserves);

  const addReservation = () => {
    const requestBody = {
      user_id: auth.id,
      date,
      item_id: itemId,
    };
    dispatch(createReservation(requestBody)).then((response) => {
      if (response.error) {
        responseMessage(response.error.message, 'danger');
      } else {
        responseMessage('Pet room reserved succesfully', 'success');
      }
      close();
    });
  };

  return (
    <>
      <NavPrincipal />
      <Link to={`/detail/${itemId}`} onClick={() => handleBack()}>Back</Link>
      {
        userName ? (
          <div>
            <h1>
              {userName}
              {' '}
              Reserves
            </h1>
            <form action="">
              <input className="date" onChange={(e) => setDate(e.target.value)} type="date" placeholder="2000/12/31" />
              {/* <input type="number" />
              <input type="number" /> */}
              <button type="button" onClick={() => addReservation()}>Add</button>
            </form>
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
