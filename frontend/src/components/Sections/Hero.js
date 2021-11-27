import React from "react";
import "./Hero.css";

const Hero = ({ title, desc, bg }) => {
  return (
    <div
      className="blog-hero flex flex--space-between flex--align-center"
      data-collapse="desktop"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="blog-hero__info container">
        <h3 className="blog-box-title">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Hero;
