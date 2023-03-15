import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link,
  NavLink,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const location = useLocation();
  const dispatch = useDispatch();

  const handleGetItemsInfo = useCallback(() => {
    dispatch(getItemsInfo());
  }, [dispatch]);

  useEffect(() => {
    handleGetItemsInfo();
  }, [handleGetItemsInfo]);

  const [state, updateState] = useState('');
  const laptops = useSelector((store) => store.items);
  const [laptop] = laptops.filter((laptop) => laptop.id === (Number(id)));

  const handleBack = () => {
    if (location.pathname === '/details/:id') {
      updateState(true);
    } else {
      updateState(!state);
    }
  };

  return (
    <>
      <NavPrincipal />
      {laptop
        ? (
          <div className="viewfinder">
            <NavLink to="/" onClick={() => handleBack()}>Back</NavLink>
            <div>
              <div>
                <img src={laptop.image} className="image-detail" alt="laptop" />
              </div>
              <div>
                <h2>{laptop.title}</h2>
                <p>{laptop.item_model}</p>
                <p>{laptop.brand}</p>
                <p>{laptop.serial_n}</p>
                <p>{laptop.description}</p>
              </div>
              <div>
                <Link to="/detail/id/reserve" state={id} key={id}>Reserve</Link>
                <button type="button">Edit Item</button>
                <button type="button">Delete Item</button>
              </div>
            </div>
          </div>
        ) : null}
    </>
  );
};

export default Detail;
