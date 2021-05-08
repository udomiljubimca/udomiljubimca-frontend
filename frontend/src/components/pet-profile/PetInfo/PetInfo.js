import React from "react";

import "./PetInfo.css";
import { FaPaw, FaRegHeart } from "react-icons/fa";
import { SliderData } from "../Slider/SliderData";
import Slider from "../Slider/Slider";
import Button from "react-bootstrap/Button";

const PetInfo = (props) => {
  return (
    <div className="petInfo">
      <div className="wrapper">
        <h1 className="petName">
          Ime ljubimca : Lorem <FaRegHeart className="heartIconPetName" />
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
            <div className="infoAboutFirst">
              <p className="firstP">Naziv udruženja</p>
              <FaPaw className="pawIcon" />
              <p className="firstP">Beograd</p>
              <FaPaw className="pawIcon" />
              <p className="firstP">01.01.2021.</p>
            </div>
            <hr />
            <p>
              {SliderData[props.current].type}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].sex}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].size}
              <FaPaw className="pawIcon" />
              {SliderData[props.current].age}
            </p>
            <hr />
            <p className="infoParagraphs">Vakcinisan: Da</p>
            <p className="infoParagraphs">Zdravlje: Dobro</p>
            <p className="infoParagraphs">Karakter: Lorem ipsum</p>
            <p className="infoParagraphs">Navike: Lorem ipsum</p>
            <p className="infoParagraphs">Posebne potrebe: Lorem ipsum</p>
          </div>
          <div className="rightInfoAbout">
            <img className="favoriteImage" src="" alt="udruzenjeImg" />
            <Button variant="primary">UDOMI ME</Button>
          </div>
        </div>
        <div className="storyInfo ">
          <h3>Moja priča</h3>
          <p>{SliderData[props.current].description}</p>
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
