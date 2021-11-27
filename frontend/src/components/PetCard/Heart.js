import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Heart({ kojeSrce, isLike }) {
  return (
    <div className="pet-like">
      {kojeSrce.isLike ? (
        <FaHeart onClick={() => isLike(kojeSrce.id)} />
      ) : (
        <FaRegHeart onClick={() => isLike(kojeSrce.id)} />
      )}
    </div>
  );
}

export default Heart;
