import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Slider.css";

const Slider = (props) => {
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <section className="slider">
        <FaArrowLeft className="left-arrow" onClick={props.prevSlide} />
        <FaArrowRight className="right-arrow" onClick={props.nextSlide} />
        {props.slides.map((slide, index) => {
          return (
            <div
              className={index === props.current ? "slide active" : "slide"}
              key={index}
            >
              {index === props.current && (
                <img src={slide.image} alt="mainPetImg" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <section className="sideImages">
        <div className="sideImageDiv">
          <img
            src={props.slides[props.current].image}
            alt="petImg1"
            className="sideImage"
          />
        </div>
        <div className="sideImageDiv">
          <img src="" alt="petImg2" />
        </div>
        <div className="sideImageDiv">
          <img src="" alt="petImg3" />
        </div>
      </section>
    </div>
  );
};

export default Slider;
