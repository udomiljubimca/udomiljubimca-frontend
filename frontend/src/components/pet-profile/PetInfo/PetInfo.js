import React from "react";

import "./PetInfo.css";
import { FaPaw } from "react-icons/fa";
import { SliderData } from "../Slider/SliderData";
import Slider from "../Slider/Slider";

const PetInfo = (props) => {
  return (
    <div className="petInfo">
      <Slider
        className="sliderDiv"
        slides={props.slides}
        current={props.current}
        prevSlide={props.prevSlide}
        nextSlide={props.nextSlide}
      />
      <div className="infoAbout">
        <h1 className="name">Naziv</h1>
        <hr />
        <p>
          {SliderData[props.current].type}
          <FaPaw className="pawIcon" />
          {SliderData[props.current].sex}
        </p>
        <hr />
        <p>
          {SliderData[props.current].size}
          <FaPaw className="pawIcon" />
          {SliderData[props.current].sex}
          <FaPaw className="pawIcon" />
          {SliderData[props.current].age}
          <FaPaw className="pawIcon" />
          {SliderData[props.current].breed}
        </p>
        <p className="infoParagraphs">Vakcine</p>
        <p className="infoParagraphs">Zdravlje</p>
        <p className="infoParagraphs">Karakter</p>
        <p className="infoParagraphs">Navike</p>
        <h3>Moja priča</h3>
        <p>{SliderData[props.current].description}</p>
      </div>
      <div className="mapInfo">
        <img
          className="favoriteImage"
          src={SliderData[props.current].image}
          alt=""
        />
        <p>MAPA</p>
      </div>
    </div>
  );
};

export default PetInfo;
