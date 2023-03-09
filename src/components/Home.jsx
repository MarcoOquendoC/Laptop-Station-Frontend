import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsInfo } from '../redux/Home/home';

const Home = () => {
  const dispatch = useDispatch();
  let items = [];
  const handleGetItemsInfo = () => {
    dispatch(getItemsInfo());
  };

  useEffect(() => {
    handleGetItemsInfo();
  }, []);

  items = useSelector((store) => store.items);

  return (
    <div>
      <h1>Home</h1>
      <div>
        Items:
        {items[0]
          ? items.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          )) : null}
        <br />
      </div>
      <br />
      <button type="button" onClick={handleGetItemsInfo}>items</button>
    </div>
  );
};

export default Home;
