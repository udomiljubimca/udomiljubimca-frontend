import React from "react";

import "./PetInfo.css";
import { FaPaw } from "react-icons/fa";

const PetInfo = () => {
  return (
    <div className="petInfo">
      <div className="infoAbout">
        <h1 className="name">Naziv</h1>
        <hr />
        <p>
          Pas
          <FaPaw className="pawIcon" />
          Beograd
        </p>
        <hr />
        <p>
          Mali
          <FaPaw className="pawIcon" />
          Muzjak
          <FaPaw className="pawIcon" />
          Junior
          <FaPaw className="pawIcon" />
          Mešanac
        </p>
        <p className="infoParagraphs">Vakcine</p>
        <p className="infoParagraphs">Zdravje</p>
        <p className="infoParagraphs">Karakter</p>
        <p className="infoParagraphs">Navike</p>
        <h3>Moja priča</h3>
        <p>lorem</p>
      </div>
      <div className="mapInfo">
        <p>MAPA</p>
      </div>
    </div>
  );
};

export default PetInfo;
