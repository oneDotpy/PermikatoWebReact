// src/components/Banner.js
import React from 'react';
import './Banner.css';
import homeLogo from "../assets/png/home_logo.png";

function Banner() {
  return (
    <section id="home" className="banner-section">
      <div className="logo-container">
        <img src={homeLogo} alt="Permika Logo" id="interactive-logo" />
      </div>
    </section>
  );
}

export default Banner;
