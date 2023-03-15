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

  const reserves = useSelector((store) => store.reserves);

  return (
    <>
      <Link to={`/detail/${id}`} onClick={() => handleBack()}>Back</Link>
      <div>
        <h1>Hola reserva</h1>
        <form action="">
          <input type="date" />
          <input type="number" />
          <input type="number" />
        </form>
        <div className="reserves">
          <div className="reserve">
            <h2>
              Este es el user_id:
              {' '}
              {reserves[0] ? reserves[0].user_id : null}
            </h2>
            <p>
              Fecha:
              {' '}
              {reserves[0] ? reserves[0].date : null}
            </p>
            <p>laptop: Nombre del item</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reserve;
