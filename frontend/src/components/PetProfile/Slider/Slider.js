import React from 'react';
import { FaArrowLeft, FaArrowRight, FaRegHeart } from 'react-icons/fa';
import './Slider.css';

const Slider = (props) => {
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className='container-slider'>
      <section className='slider'>
        <FaArrowLeft className='left-arrow' onClick={props.prevSlide} />
        <FaArrowRight className='right-arrow' onClick={props.nextSlide} />
        {props.slides.map((slide, index) => {
          return (
            <div
              className={index === props.current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === props.current && (
                <img src={slide.image} alt='mainPetImg' className='image' />
              )}
            </div>
          );
        })}
        <FaRegHeart className='sliderHeartIcon' />
      </section>
      <section className='sideImages'>
        <div className='sideImageDiv'>
          <img
            src={props.slides[props.current].image}
            alt='petImg1'
            className='sideImage'
          />
        </div>
        <div className='sideImageDiv'>
          <img
            src={props.slides[props.current].image}
            alt='petImg2'
            className='sideImage'
          />
        </div>
        <div className='sideImageDiv'>
          <img
            src={props.slides[props.current].image}
            alt='petImg3'
            className='sideImage'
          />
        </div>
      </section>
    </div>
  );
};

export default Slider;
