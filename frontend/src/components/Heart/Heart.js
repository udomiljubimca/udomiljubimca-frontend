import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './Heart.css'

function Heart({ kojeSrce, isLike }) {
  return (
    <div className={kojeSrce.isLike ? 'pet-like liked' : 'pet-like'}>
      {kojeSrce.isLike ? (
        <FaHeart onClick={() => isLike(kojeSrce.id)} />
      ) : (
          <FaRegHeart onClick={() => isLike(kojeSrce.id)} />
        )}
    </div>
  );
}

export default Heart;
