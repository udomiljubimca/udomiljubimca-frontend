import React from "react";
import PetInfoOrganization from "./PetInfoOrganization/PetInfoOrganization";

function PetProfileOrganization({ pet }) {
  return (
    <div>
      <PetInfoOrganization pet={pet} />
      <h1 className="text-center"> TODO: featured slider </h1>
    </div>
  );
}

export default PetProfileOrganization;
