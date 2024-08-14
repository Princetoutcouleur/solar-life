import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Expertise from "./Components/Expertise";
import About from "./Components/About";
import Team from "./Components/Team";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navigation />
      <Header />
      <Expertise />
      <About />
      <Team />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
