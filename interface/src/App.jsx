import Navbar from "./components/navbar.jsx";
import ImageCard from "./components/imageCard.jsx";
import CodingPortfolio from "./components/CodingProfileCard.jsx";
import TechnicalSkills from "./components/Technical.jsx";
import CollegeDetails from "./components/CollegeDetails.jsx";
import Project from "./components/Projectt.jsx";
import Footer from './components/Footer.jsx'

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
       
        <ImageCard />
        <CodingPortfolio />
        <Project/>
        <TechnicalSkills />
        <CollegeDetails />
        <Footer/>
      </div>
    </>
  );
}

export default App;
