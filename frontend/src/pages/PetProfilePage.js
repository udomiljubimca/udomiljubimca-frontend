import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";

// Components
import PetProfile from "../components/PetProfile/PetProfile";

// Fake data
import fakePetData from "../fakePetData";

const PetProfilePage = () => {
  const [pets, setPets] = useState(fakePetData);
  const { params } = useRouteMatch();
  const pet = pets.find(
    (current) => current.name.toLocaleLowerCase() === params.name
  );
  return <PetProfile pet={pet} />;
};

export default PetProfilePage;
