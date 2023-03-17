import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getItemsInfo, deleteItem } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsInfo());
  }, [dispatch]);

  const auth = useSelector((store) => store.auth);
  const items = useSelector((store) => store.items);

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <>
      <NavPrincipal />
      {
          auth.first_name ? (
            <div className="viewfinder">
              <div className="titles">
                <h1>Delete items</h1>
              </div>
              <NavLink to="/" className="btn left"><img src={arrowLeft} alt="left" /></NavLink>
              <div className="items">
                {items[0]
                  ? items.map((item) => (
                    <div key={item.id}>
                      <div key={item.id} className="item">
                        <img src={item.image} alt={item.image} />
                        <h2>{item.title}</h2>
                        <br />
                        <button className="delete_btn" type="button" onClick={() => handleDelete(item.id)}>Delete Item</button>
                      </div>
                    </div>
                  )) : null}
              </div>
            </div>
          ) : <div className="msg_alert">Please login to manage items</div>
        }
    </>
  );
};

export default Home;
