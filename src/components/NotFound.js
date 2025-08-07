import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import homeLogo from "../assets/png/home_logo.png";

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">Oops!</h1>
          <p className="not-found-text">The page you're looking for is not available.</p>
          <Link to="/" className="home-link">Go Back Home</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;