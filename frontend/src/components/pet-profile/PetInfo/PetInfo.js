import React from "react";

import "./PetInfo.css";
import { FaPaw } from "react-icons/fa";
import { SliderData } from "../slider/SliderData";

const PetInfo = ({ current }) => {
  return (
    <div className="petInfo">
      <div className="infoAbout">
        <h1 className="name">Naziv</h1>
        <hr />
        <p>
          {SliderData[current].type}
          <FaPaw className="pawIcon" />
          {SliderData[current].sex}
        </p>
        <hr />
        <p>
          {SliderData[current].size}
          <FaPaw className="pawIcon" />
          {SliderData[current].sex}
          <FaPaw className="pawIcon" />
          {SliderData[current].age}
          <FaPaw className="pawIcon" />
          {SliderData[current].breed}
        </p>
        <p className="infoParagraphs">Vakcine</p>
        <p className="infoParagraphs">Zdravje</p>
        <p className="infoParagraphs">Karakter</p>
        <p className="infoParagraphs">Navike</p>
        <h3>Moja priča</h3>
        <p>{SliderData[current].description}</p>
      </div>
      <div className="mapInfo">
        <p>MAPA</p>
      </div>
    </div>
  );
};

export default PetInfo;
