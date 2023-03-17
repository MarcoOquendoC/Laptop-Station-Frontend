import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo_laptop_station.svg';
import menuImg from '../images/menu.svg';
import { currentUser, logout } from '../redux/Registration/auth';

const NavPrincipal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const userName = useSelector((store) => store.auth.first_name);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="principal">
        <div className="header">
          <div className="menu mob" data-hamburger><img src={menuImg} alt="menu" /></div>
          <div className="menu_logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="menu mob" />
        </div>

        <nav className="menunav">
          <ul className="menunav_ul">
            <li className="menu_text">{userName ? <Link to="/">{userName}</Link> : <Link to="/login">Log in</Link>}</li>
            <li className="menu_text"><Link to="/">Latops</Link></li>
            <li className="menu_text"><Link to="/reservations">Reservations</Link></li>
            <li className="menu_text"><Link to="/addItem">Add item</Link></li>
            <li className="menu_text select"><Link to="/deleteItems">Delete Items</Link></li>
            <li className="menu_text">{!userName ? null : <Link to="/" onClick={() => handleClick()}>Log out</Link>}</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavPrincipal;
