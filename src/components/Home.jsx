import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';

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
    <div>
      <h1>Home</h1>
      <div>
        Items:
        {items[0]
          ? items.map((item) => (
            <Link to="/detail" state={item.id} key={item.id}>
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            </Link>
          )) : null}
        <br />
      </div>
      <br />
      <button type="button" onClick={handleGetItemsInfo}>items</button>
    </div>
  );
};

export default Home;
