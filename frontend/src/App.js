import React, { useState } from 'react';

import './App.css';
import { SliderData } from './components/pet-profile/slider/SliderData';
import Header from './components/Header';
import Cards from './components/pet-profile/Cards/Cards';
import PetInfo from './components/pet-profile/PetInfo/PetInfo';
import Footer from './components/Footer';

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
    <div className='App'>
      <Header />
      <PetInfo
        slides={SliderData}
        current={current}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
