import React from "react";
import PetInfo from "./PetInfo/PetInfo";

function PetProfile({ pet }) {
  return (
    <div>
      <PetInfo pet={pet} />
      <h1 className="text-center"> TODO: featured slider </h1>
    </div>
  );
}

export default PetProfile;
