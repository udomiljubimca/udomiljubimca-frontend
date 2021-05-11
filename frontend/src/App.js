import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Register_form from "./components/register-form";



function App() {
  return (
    <div className="App">
        <Header/>
      <Register_form/>
      <Footer/>
    </div>
  );
}

export default App;
