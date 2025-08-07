import React from 'react';
import './Banner.css';
import homeLogo from "../assets/png/home_logo.png";

function Banner() {
  return (
    <section id="home" className="banner-section">
      <div className="logo-and-button-container">
        <img 
          src={homeLogo} 
          alt="Permika Toronto Logo" 
          id="interactive-logo" 
          loading='lazy'
        />
        <div className="separator">|</div>
        <a href="/become-member" className="student-button">New Student Click Here</a>
      </div>
    </section>
  );
}

export default Banner;
