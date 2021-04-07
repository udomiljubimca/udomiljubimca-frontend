import { useState, useEffect } from 'react';
import './App.css';
import Slider from './components/pet-profile/Slider';
import { SliderData } from './components/pet-profile/SliderData';

function App() {
  return (
    <div className='App'>
      <h1>Udomi ljubimca</h1>
      <Slider slides={SliderData} />
    </div>
  );
}

export default App;
