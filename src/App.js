import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";

function App() {
  return (
    <div className="App">

        <Header/>
        <Hero/>
        <HowToPlay/>
        <Footer/>
    </div>
  );
}

export default App;
