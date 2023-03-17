import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsInfo, deleteItem } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';
import arrowLeft from '../images/left.svg';
import arrowRight from '../images/rigth.svg';

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
      <div className="viewfinder">
        {
          auth.first_name ? (
            <div className="viewfinder">
              <div className="btn left last"><img src={arrowLeft} alt="rigth" /></div>
              <div className="items">

                {items[0]
                  ? items.map((item) => (
                    <div key={item.id}>
                      <div key={item.id} className="item">
                        <img src={item.image} alt={item.image} />
                        <h2>{item.title}</h2>
                        <br />
                        <button type="button" onClick={() => handleDelete(item.id)}>Delete Item</button>
                      </div>
                    </div>
                  )) : null}

              </div>
              <div className="btn rigth"><img src={arrowRight} alt="rigth" /></div>
            </div>
          ) : <div className="msg_alert">Please login to manage items</div>
        }
      </div>
    </>
  );
};

export default Home;
