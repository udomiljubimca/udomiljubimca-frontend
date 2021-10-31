import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";

import { SliderData } from "./components/pet-profile/Slider/SliderData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Cards from "./components/pet-profile/Cards/Cards";
import PetInfo from "./components/pet-profile/PetInfo/PetInfo";
import UserProfile from "./components/user-profile/UserProfile/UserProfile";

function App() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="App">
      <Header />
      {/* <PetInfo
        slides={SliderData}
        current={current}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      /> */}
      <UserProfile />
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}

export default App;
