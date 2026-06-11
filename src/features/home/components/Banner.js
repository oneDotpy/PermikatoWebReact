import React from 'react';
import './Banner.css';
import homeLogo from "../../../assets/images/brand/home_logo.png";
import heroImage from "../../../assets/images/events/welpar.jpg";

function Banner() {
  return (
    <section id="home" className="banner-section">
      <img
        src={heroImage}
        alt="PERMIKATO community gathering"
        className="banner-background-image"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      <div className="banner-shade" />

      <div className="banner-inner">
        <div className="banner-copy">
          <span className="banner-eyebrow">PERMIKA Toronto</span>
          <h1>Indonesian Students Building Home in Toronto.</h1>
          <p>
            Community, culture, and practical support for Indonesian students
            across the Greater Toronto Area.
          </p>

          <div className="banner-actions">
            <a href="/become-member" className="student-button">
              New Student Guide
            </a>
            <a href="#events" className="banner-secondary-link">
              See Events
            </a>
          </div>
        </div>

        <div className="banner-logo-lockup">
          <img
            src={homeLogo}
            alt="Permika Toronto Logo"
            id="interactive-logo"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
