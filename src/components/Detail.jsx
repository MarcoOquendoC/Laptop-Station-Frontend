import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Detail = (props) => {
  const { id } = props;
  const laptops = useSelector((state) => state.items);
  const [laptop] = laptops.filter((laptop) => laptop.id === id);

  return (
    <>
      <div>
        <div>
          <img src="default.png" className="image-detail" alt="laptop" />
        </div>
        <div>
          <h2>{laptop.title}</h2>
          <p>kajshdjka</p>
          <p>Asus</p>
          <p>Asus</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quibusdam.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempora magni libero
          </p>
        </div>
        <div>
          <button type="button">Reserve</button>
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
