import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

// Components
import { Row, Col } from "react-bootstrap";

// Assets
import "./advancedSlider.css";

const Slider = ({ slides }) => {
  const sliderLength = slides.length - 1;
  const [sliderCurrent, setSliderCurrent] = useState(0);

  if (!Array.isArray(slides) || sliderLength <= 0) {
    return null;
  }

  const sliderNextHandler = () => {
    setSliderCurrent(sliderCurrent === sliderLength ? 0 : sliderCurrent + 1);
  };

  const sliderPrevHandler = () => {
    setSliderCurrent(sliderCurrent === 0 ? sliderLength : sliderCurrent - 1);
  };

  const sidebarCurrentHandler = (sidebar) => {
    slides.filter((c, i) => {
      if (c.image == sidebar.image) {
        setSliderCurrent(i);
      }
    });
  };

  return (
    <Row className="slider-wrap">
      <Col md={9} className="slider">
        <BiHeart className="sliderHeartIcon" />
        <div className="slider-arrows d-flex justify-content-between">
          <BsChevronLeft className="left-arrow" onClick={sliderPrevHandler} />
          <BsChevronRight className="right-arrow" onClick={sliderNextHandler} />
        </div>
        {slides.map((main, index) => {
          return (
            <div
              className={index === sliderCurrent ? "slide active" : "slide"}
              key={main.image}
            >
              {index === sliderCurrent && (
                <img src={main.image} alt="Udomi Ljubimca" className="image" />
              )}
            </div>
          );
        })}
      </Col>
      <Col
        md={3}
        sm={12}
        className="d-flex flex-md-column justify-content-sm-between mt-3 mt-md-0"
      >
        {slides.map((sidebar, i) => {
          return (
            <div
              className={`sideImageDiv col-md-12 col-4 ${
                i === sliderCurrent ? "active" : ""
              }`}
              key={i}
            >
              <img
                src={sidebar.image}
                onClick={() => sidebarCurrentHandler(sidebar)}
                alt="petImg1"
                className="sideImage"
              />
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default Slider;
