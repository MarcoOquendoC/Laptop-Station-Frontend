import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../redux/Home/home';
import NavPrincipal from './NavPrincipal';

const AddItem = () => {
  const auth = useSelector((store) => store.auth);
  const [title, setTitle] = useState('No Title');
  const [model, setModel] = useState('No Model');
  const [serial, setSerial] = useState('00-00-00');
  const [image, setImage] = useState('https://picsum.photos/730/500');
  const [description, setDescription] = useState('Description');
  const [brand, setBrand] = useState('Asus');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      user_id: auth.id,
      title,
      item_model: model,
      serial_n: serial,
      image,
      description,
      brand,
    };
    dispatch(addItem({ item }));
    navigate('/');
  };

  return (
    <>
      <NavPrincipal />
      <div className="viewfinder">
        {
        auth.first_name ? (
          <div className="register">
            <h1>New Laptop</h1>
            <form className="form" onSubmit={handleSubmit}>
              <input className="form__input" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
              <input className="form__input" onChange={(e) => setModel(e.target.value)} type="text" placeholder="Model" />
              <input className="form__input" onChange={(e) => setSerial(e.target.value)} type="text" placeholder="Serial" />
              <input className="form__input" onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image Link" />
              <input className="form__input" onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
              <input className="form__input" onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Brand" />
              <div className="form__input" />
              <button className="form__btn" type="submit">Add Laptop</button>
            </form>
          </div>
        ) : <div className="msg_alert">Please login or register to manage Laptops</div>
        }
      </div>
    </>
  );
};
export default AddItem;
