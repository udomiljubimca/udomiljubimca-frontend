import React from "react";
import Card from "./PetCard";

const Pets = ({ ljubimci, isLike, trigger }) => {
  return (
    <div>
      <Card ljubimac={ljubimci} like={isLike} changeStyle={trigger} />
    </div>
  );
};

export default Pets;
