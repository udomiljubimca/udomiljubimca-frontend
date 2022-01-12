import React from "react";
import "./testimonials.css";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
  return (
    <div className="flex flex--space-between flex-wrap testimonials-wrap">
      <TestimonialBox text="Smiley Cat Web Design is the real deal! Best. Product. Ever! I have gotten at leat 50 times the value from Smiley Cat Web Design." />
      <TestimonialBox text="The best on the net! We were treated like royalty. Smiley Cat Web Design is the real deal!" />
      <TestimonialBox text="Stinky goop is exactly what our business has been lacking. I highly endorse it. It really saves me time and effort." />
    </div>
  );
}

export default Testimonials;
