import React, { useEffect } from 'react';
import './Navbar.css';
import navbarlogoBlack from "../assets/png/navbarlogo_black.png";
import navbarlogoWhite from "../assets/png/navbarlogo_white.png";

function Navbar() {
  useEffect(() => {
    const logo = document.getElementById('nav-logo');
    const navLinks = document.querySelectorAll('nav ul li a');
    const navbar = document.querySelector('nav');
    const homeLink = document.querySelector('nav ul li a[href="#home"]');

    // Intersection Observer for scrolling behavior
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            link.style.color = '';
            link.style.setProperty('--underline-color', '');
          });
          const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
            if (id === 'home') {
              logo.src = navbarlogoBlack; // Update here
              navLinks.forEach((link) => {
                link.style.color = 'rgb(0, 0, 0)';
                link.style.setProperty('--underline-color', 'rgb(0, 0, 0)');
              });
              navbar.style.backgroundColor = 'rgba(252, 246, 241, 0.6)';
            } else {
              logo.src = navbarlogoWhite; // Update here
              navLinks.forEach((link) => {
                link.style.color = 'white';
                link.style.setProperty('--underline-color', 'white');
              });
              if (id === 'about') {
                navbar.style.backgroundColor = 'rgba(166, 1, 1, 0.6)';
              } else if (id === 'team') {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
              } else if (id === 'contact') {
                navbar.style.backgroundColor = 'rgba(24, 25, 26, 0.6)';
              }
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Handle click on logo to scroll to the home section when in mobile view
    const handleLogoClick = () => {
      if (window.innerWidth <= 600) {
        homeLink.click();
      }
    };
    
    // Add event listener for mobile to delegate home link to logo
    logo.addEventListener('click', handleLogoClick);

    return () => {
      observer.disconnect();
      logo.removeEventListener('click', handleLogoClick); // Cleanup listener
    };
  }, []);

  return (
    <nav>
      <img src={navbarlogoBlack} id="nav-logo" alt="Permika Toronto Logo" />
      <ul>
        <li className="home-link"><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#events">Our Events</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
