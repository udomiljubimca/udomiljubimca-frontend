import React from "react";

import "./PetInfo.css";
import { FaPaw, FaHeart } from "react-icons/fa";
import { SliderData } from "../Slider/SliderData";
import Slider from "../Slider/Slider";
import { Button } from "react-bootstrap";

const PetInfo = (props) => {
  return (
    <div className="petInfo">
      <div className="wrapper">
        <h1 className="petName">
          Ime ljubimca : Lorem <FaHeart className="heartIconPetName" />
        </h1>
        <Slider
          className="sliderDiv"
          slides={props.slides}
          current={props.current}
          prevSlide={props.prevSlide}
          nextSlide={props.nextSlide}
        />
        <div className="infoAbout">
          <div className="leftInfoAbout">
            <div className="infoAboutFirst indentP">
              <p className="firstP">Naziv udruženja</p>
              <FaPaw className="pawIcon" />
              <p className="firstP">Beograd</p>
              <FaPaw className="pawIcon" />
              <p className="firstP">01.01.2021.</p>
            </div>
            <hr />
            <p className="indentP">
              {SliderData[props.current].type}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].sex}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].size}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].age}
            </p>
            <hr />
            <p className="infoParagraphs indentP">Vakcinisan: Da</p>
            <p className="infoParagraphs indentP">Zdravlje: Dobro</p>
            <p className="infoParagraphs indentP">Karakter: Lorem ipsum</p>
            <p className="infoParagraphs indentP">Navike: Lorem ipsum</p>
            <p className="infoParagraphs indentP">
              Posebne potrebe: Lorem ipsum
            </p>
          </div>
          <div className="rightInfoAbout">
            <img className="favoriteImage" src="" alt="udruzenjeImg" />
            <Button variant="primary">UDOMI ME</Button>
          </div>
        </div>
        <div className="mapInfo indentP">
          <h3 className="indentP">Moja priča</h3>
          <p className="indentP">{SliderData[props.current].description}</p>
        </div>
        <div className="videoDiv">
          <a href="/">Uslovi za udomljavanje</a>
          <video className="videoPet" controls></video>
          <div className="buttonDiv">
            <Button variant="light">Uredi profil</Button>
            <Button variant="light">Udomljen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
