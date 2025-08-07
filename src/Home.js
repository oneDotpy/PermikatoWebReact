import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Isa from "./components/Isa";
import Team from "./components/Team";
import Contact from "./components/Contact";
import ContactFoot from "./components/ContactFoot";
import Events from "./components/Events";
import Dump from "./components/Dump";
import Execs from "./components/Execs";
import SurvivalGuide from "./components/SurvivalGuide"; // Import the new page

function Home() {
  return (
    <div className="Home">
      <Banner />
      <About />
      <Isa />
      <Events />
      <Dump />
      <ContactFoot />
    </div>
  );
}

export default Home;