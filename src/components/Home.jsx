import React from 'react';
import { useDispatch } from 'react-redux';
import { getItemsInfo } from '../redux/Home/home';

const Home = () => {
  const dispatch = useDispatch();

  const handleGetItemsInfo = () => {
    dispatch(getItemsInfo());
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        Items:
        <br />
      </div>
      <br />
      <button type="button" onClick={handleGetItemsInfo}>items</button>
    </div>
  );
};

export default Home;
