import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link, NavLink, useLocation, useParams,
} from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';

const Detail = () => {
  const params = useParams();
  const { itemId } = params;
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsInfo());
  }, [dispatch]);

  const [state, updateState] = useState('');
  const laptops = useSelector((store) => store.items);
  const [laptop] = laptops.filter((laptop) => laptop.id === (Number(itemId)));

  const handleBack = () => {
    if (location.pathname === '/detail/:itemId') {
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
            <NavLink to="/" onClick={() => handleBack()} className="btn left">Back</NavLink>
            <div className="details">
              <div className="detail_img">
                <img src={laptop.image} className="image-detail" alt="laptop" />
              </div>
              <div className="details_item">
                <h1>{laptop.title}</h1>
                <h4>{laptop.item_model}</h4>
                <h2>{laptop.brand}</h2>
                <h4>{laptop.serial_n}</h4>
                <p>{laptop.description}</p>
                <div className="details_btn">
                  <Link to={`/detail/${id}/reserves`} state={id} key={id} className="details_btn__reserve" data-testid="reserve-link">Reserve</Link>
                  <button className="details_btn__admin" type="button">Edit Item</button>
                  <button className="details_btn__admin" type="button">Delete Item</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
    </>
  );
};

export default Detail;
