// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Team />
      <Events />
      <Contact />      
    </div>
  );
}

export default App;
