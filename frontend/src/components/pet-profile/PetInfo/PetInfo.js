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
            <p className="infoParagraphs">
              <strong>Vakcinisan</strong> Da
            </p>
            <p className="infoParagraphs">
              <strong>Zdravlje</strong> Dobro
            </p>
            <p className="infoParagraphs">
              <strong>Karakter</strong> Lorem ipsum
            </p>
            <p className="infoParagraphs">
              <strong>Posebne navike</strong> Lorem ipsum
            </p>
            <p className="infoParagraphs">
              <strong>Dobar život sa</strong> Lorem ipsum
            </p>
            <p className="infoParagraphs">
              <strong>Nije dobar život sa</strong> Lorem ipsum
            </p>
          </div>
          <div className="rightInfoAbout">
            <img className="favoriteImage" src="" alt="udruzenjeImg" />
            {/* Ne dodaje se klasa */}
            <Button variant="primary">UDOMI ME</Button>
          </div>
        </div>
        <div className="storyInfo ">
          <hr />
          <h2>Moja priča</h2>
          <p>{SliderData[props.current].description}</p>
        </div>
        <div className="videoDiv">
          <a href="/">Uslovi za udomljavanje</a>
          <video className="videoPet" controls></video>
          <div className="buttonDiv">
            {/* Ne dodaje se klasa */}
            <Button variant="light">Uredi profil</Button>
            <Button variant="light">Udomljen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
