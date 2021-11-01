import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

// Components
import PetProfileOrganization from "../components/PetProfileOrganization/PetProfileOrganization";

// Fake data
import fakePetData from "../fakePetData";

const PetProfileOrganizationPage = () => {
  const [pets, setPets] = useState(fakePetData);
  const { params } = useRouteMatch();
  const pet = pets.find(
    (current) => current.name.toLocaleLowerCase() === params.name
  );
  return <PetProfileOrganization pet={pet} />;
};

export default PetProfileOrganizationPage;
