import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReservesInfo } from '../redux/Reserve/reserve';

const Reserve = () => {
  const params = useParams();
  const { id } = params;

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

  // Use useCallback to 'memoize' the handleGetItemsInfo function
  const handleGetItemsInfo = useCallback(() => {
    dispatch(getReservesInfo());
  }, [dispatch]);

  useEffect(() => {
    handleGetItemsInfo();
  }, [handleGetItemsInfo]);

  const userName = useSelector((store) => `${store.auth.first_name} ${store.auth.last_name}`);
  const reserves = useSelector((store) => store.reserves);

  return (
    <>
      <Link to={`/detail/${id}`} onClick={() => handleBack()}>Back</Link>
      {
        userName ? (
          <div>
            <h1>
              {userName}
              {' '}
              Reserves
            </h1>
            <form action="">
              <input type="date" />
              <input type="number" />
              <input type="number" />
              <button type="submit">Add</button>
            </form>
            <div className="reserves">
              {
                reserves.map((reserve) => (
                  <div key={reserve.id}>
                    <strong>{reserve.title}</strong>
                    {': '}
                    <span>{reserve.date}</span>
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
