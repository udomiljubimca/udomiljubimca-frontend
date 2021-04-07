import './App.css';
import Slider from './components/pet-profile/slider/Slider';
import { SliderData } from './components/pet-profile/slider/SliderData';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Slider slides={SliderData} />
    </div>
  );
}

export default App;
