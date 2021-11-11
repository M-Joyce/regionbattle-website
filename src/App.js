import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";
import Discord from "./components/Discord";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <HowToPlay/>
        <Discord/>
        <Footer/>
    </div>
  );
}

export default App;
