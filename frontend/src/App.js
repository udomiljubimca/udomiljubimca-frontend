import "./App.css";

import Slider from "./components/pet-profile/slider/Slider";
import { SliderData } from "./components/pet-profile/slider/SliderData";
import Header from "./components/Header";
import Cards from "./components/pet-profile/Cards/Cards";
import PetInfo from "./components/pet-profile/PetInfo/PetInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider slides={SliderData} />
      <PetInfo />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
