import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItemsInfo } from '../redux/Home/home';
import menuImg from '../images/menu.svg';
import logo from '../images/logo_laptop_station.svg';

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
      <div className="principal">
        <div className="header">
          <div className="menu mob"><img src={menuImg} alt="menu" /></div>
          <div className="menu_logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="menu mob" />
        </div>

        <nav className="menunav">
          <ul className="menunav_ul">
            <li className="menu_text select"><Link to="/">Home</Link></li>
            <li className="menu_text"><Link to="/laptops">Latops</Link></li>
            <li className="menu_text"><Link to="/reserves">Reserves</Link></li>
            <li className="menu_text admin"><Link to="/addItem">Add item</Link></li>
            <li className="menu_text"><Link to="/logOut">Log Out</Link></li>
          </ul>
        </nav>
      </div>

      <div className="viewfinder">
        Items:
        {items[0]
          ? items.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          )) : null}
        <br />
      </div>
    </>
  );
};

export default Home;
