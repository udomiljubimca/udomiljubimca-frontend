import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";

const Slider = (props) => {
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <section className="slider">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={props.prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={props.nextSlide}
        />
        {props.slides.map((slide, index) => {
          return (
            <div
              className={index === props.current ? "slide active" : "slide"}
              key={index}
            >
              {index === props.current && (
                <img src={slide.image} alt="" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <section className="sideImages">
        <div>mala slika</div>
        <div>mala slika</div>
        <div>mala slika</div>
      </section>
    </div>
  );
};

export default Slider;
