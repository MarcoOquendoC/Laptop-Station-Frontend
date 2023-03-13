import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Detail = (props) => {
  const { id } = props;
  const laptops = useSelector((state) => state.items);
  const [laptop] = laptops.filter((laptop) => laptop.id === id);
  const location = useLocation();
  const [state, updateState] = useState('');

  const handleBack = () => {
    if (location.pathname === '/details') {
      updateState(true);
    } else {
      updateState(!state);
    }
  };

  return (
    <>
      <NavLink to="/" onClick={() => handleBack()}>Back</NavLink>
      <div>
        <div>
          <img src={laptop.image} className="image-detail" alt="laptop" />
        </div>
        <div>
          <h2>{laptop.title}</h2>
          <p>{laptop.item_model}</p>
          <p>{laptop.brand}</p>
          <p>{laptop.serial_n}</p>
          <p>{laptop.description}</p>
        </div>
        <div>
          <Link to="/detail/id/reserve" state={id} key={id}>Reserve</Link>
          <button type="button">Edit Item</button>
          <button type="button">Delete Item</button>
        </div>
      </div>
    </>
  );
};

Detail.defaultProps = {
  id: '',
};

Detail.propTypes = {
  id: PropTypes.string,
};

export default Detail;
