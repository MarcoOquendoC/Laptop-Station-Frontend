import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsInfo());
  }, [dispatch]);

  const items = useSelector((store) => store.items);

  // esto me marco error de linter porque no se usaba en ninguna linea
  // const userId = useSelector((store) => store.auth.id) || 'unlogged';

  return (
    <>
      <NavPrincipal />
      <div className="viewfinder">
        <div className="titles">
          <h1>Latest Models</h1>
          <h4>Please select a Laptop Model</h4>
        </div>
        <div className="items">
          {items[0]
            ? items.map((item) => (
              <Link to={`/detail/${item.id}`} state={item.id} key={item.id} data-testid="laptop-card">
                <div key={item.id} className="item">
                  <img src={item.image} alt={item.image} />
                  <h2>{item.title}</h2>
                  <h4>{item.item_model}</h4>
                  <p>{item.description}</p>
                </div>
              </Link>
            )) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
