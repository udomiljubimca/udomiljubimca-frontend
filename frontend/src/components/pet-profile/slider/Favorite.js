import React from 'react';
import './Favorite.css';
import { FaHeart } from 'react-icons/fa';

const Favorite = () => {
  return (
    <div className='favorite'>
      <button className='btn'>
        <FaHeart />
        OMILJEN
      </button>
      <button className='btn adopt'>UDOMI ME</button>
      <button className='btn'>PROFIL UDRUZENJA</button>
    </div>
  );
};

export default Favorite;
