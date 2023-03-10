import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';
import arrowRight from '../images/rigth.svg';

const Home = () => {
  const dispatch = useDispatch();

  // Use useCallback to 'memoize' the handleGetItemsInfo function
  const handleGetItemsInfo = useCallback(() => {
    dispatch(getItemsInfo());
  }, [dispatch]);

  useEffect(() => {
    handleGetItemsInfo();
  }, [handleGetItemsInfo]);

  const items = useSelector((store) => store.items);

  return (
    <>
      <NavPrincipal />
      <div className="viewfinder">
        <div className="btn left last"><img src={arrowLeft} alt="rigth" /></div>
        <div className="titles">
          <h1>Latest Models</h1>
          <h4>Please select a Laptop Model</h4>
        </div>
        <div className="items">

          {items[0]
            ? items.map((item) => (
              <Link to="/detail" state={item.id} key={item.id}>
                <div key={item.id} className="item">
                  <img src={item.image} alt={item.image} />
                  <h2>{item.title}</h2>
                  <h4>{item.item_model}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            )) : null}

        </div>
        <div className="btn rigth"><img src={arrowRight} alt="rigth" /></div>
      </div>
    </>
  );
};

export default Home;
