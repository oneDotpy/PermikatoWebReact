// src/components/Banner.js
import React from 'react';
import '../Banner.css';

function Banner() {
  return (
    <section id="home" className="banner-section">
      <div className="logo-container">
        <img src="../assets/png/home_logo.png" alt="Permika Logo" id="interactive-logo" />
      </div>
    </section>
  );
}

export default Banner;
