import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo_laptop_station.svg';
import menuImg from '../images/menu.svg';
import { currentUser, logout } from '../redux/Registration/auth';

const NavPrincipal = () => {
  const dispatch = useDispatch();

  dispatch(currentUser());

  const userName = useSelector((store) => store.auth.first_name);

  const handleClick = () => {
    dispatch(logout());
  };

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
            <li className="menu_text"><Link to="/login">{userName || 'Login'}</Link></li>
            <li className="menu_text select"><Link to="/">Home</Link></li>
            <li className="menu_text"><Link to="/laptops">Latops</Link></li>
            <li className="menu_text"><Link to="/reserves">Reserves</Link></li>
            <li className="menu_text admin"><Link className="a__admin" to="/addItem">Add item</Link></li>
            <li className="menu_text"><Link to="/" onClick={handleClick}>Log Out</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavPrincipal;
