import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import navbarlogoBlack from "../assets/png/navbarlogo_black.png";
import navbarlogoWhite from "../assets/png/navbarlogo_white.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState('white');
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const observerRef = useRef(null);
  const scrollHandlerRef = useRef(null);
  const isScrollListenerAttached = useRef(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); // Closes menu when clicking a link (for mobile)
    document.body.classList.remove('menu-open'); // Ensures no body lock
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;
    const navLinks = document.querySelectorAll('nav ul li a, nav ul li span');
    const sections = document.querySelectorAll('section');

    if (!navbar || !logo) return;

    let lastScrollY = window.scrollY;

    // Navbar hides on scroll for all pages
    const handleScroll = () => {
      if (!navbar) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('hide');
        navbar.classList.remove('show');
      } else {
        navbar.classList.add('show');
        navbar.classList.remove('hide');
      }
      lastScrollY = currentScrollY;
    };

    // Remove previous listener if exists
    if (isScrollListenerAttached.current && scrollHandlerRef.current) {
      try {
        window.removeEventListener('scroll', scrollHandlerRef.current);
      } catch (error) {
        console.warn("Failed to remove old scroll event listener:", error);
      }
    }

    // Attach new scroll listener
    scrollHandlerRef.current = handleScroll;
    window.addEventListener('scroll', handleScroll);
    isScrollListenerAttached.current = true;

    // Function to update navbar & link colors
    const updateNavbarAndLinks = () => {
      let currentSection = window.location.hash.replace("#", "");
      const navbar = navbarRef.current;
      const logo = logoRef.current;
      const navLinks = document.querySelectorAll('nav ul li a:not(.dropdown-link), nav ul li span');
    
      if (!navbar || !logo) return;
    
      if (location.pathname === '/') {
        if (!currentSection || currentSection === 'home') {
          logo.src = navbarlogoBlack;
          setHamburgerColor('black');
          navbar.style.backgroundColor = 'rgba(252, 246, 241, 0.6)';
          navLinks.forEach((link) => {
            link.style.color = 'black';
            link.style.setProperty('--underline-color', 'black');
          });
        } else if (currentSection === 'about') {
          logo.src = navbarlogoWhite;
          setHamburgerColor('white');
          navbar.style.backgroundColor = 'rgba(166, 1, 1, 0.6)';
          navLinks.forEach((link) => {
            link.style.color = 'white';
            link.style.setProperty('--underline-color', 'white');
          });
        } else if (currentSection === 'team') {
          logo.src = navbarlogoWhite;
          setHamburgerColor('white');
          navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
          navLinks.forEach((link) => {
            link.style.color = 'white';
            link.style.setProperty('--underline-color', 'white');
          });
        } else if (currentSection === 'contact') {
          logo.src = navbarlogoWhite;
          setHamburgerColor('white');
          navbar.style.backgroundColor = 'rgba(24, 25, 26, 0.6)';
          navLinks.forEach((link) => {
            link.style.color = 'white';
            link.style.setProperty('--underline-color', 'white');
          });
        } else if (currentSection === 'events') {
          logo.src = navbarlogoWhite;
          setHamburgerColor('white');
          navbar.style.backgroundColor = '#8B0000';
          navLinks.forEach((link) => {
            link.style.color = 'white';
            link.style.setProperty('--underline-color', 'white');
          });
        } else if (currentSection === 'dump') {
          logo.src = navbarlogoWhite;
          setHamburgerColor('white');
          navbar.style.backgroundColor = '#4e0101';
          navLinks.forEach((link) => {
            link.style.color = 'white';
            link.style.setProperty('--underline-color', 'white');
          });
        } else {
          logo.src = navbarlogoBlack;
          setHamburgerColor('white');
          navbar.style.backgroundColor = 'rgba(252, 246, 241, 0.6)';
          navLinks.forEach((link) => {
            link.style.color = 'black';
            link.style.setProperty('--underline-color', 'black');
          });
        }
      } else if (location.pathname === '/team' || location.pathname === '/survival-guide' || location.pathname === '/notfound') {
        // Not Found page
        logo.src = navbarlogoBlack;
        setHamburgerColor('black');
        navbar.style.backgroundColor = 'rgba(252, 246, 241, 0.6)';
        navLinks.forEach((link) => {
          link.style.color = 'black';
          link.style.setProperty('--underline-color', 'black');
        });
      } else if (location.pathname === '/faq' || location.pathname === '/become-member') {
        // Set FAQ page to red (#A60101)
        logo.src = navbarlogoWhite;
        setHamburgerColor('white');
        navbar.style.backgroundColor = '#A60101';
        navLinks.forEach((link) => {
          link.style.color = 'white';
          link.style.setProperty('--underline-color', 'white');
        });
      } else {
        logo.src = navbarlogoBlack;
        setHamburgerColor('black');
        navbar.style.backgroundColor = 'rgba(252, 246, 241, 0.6)';
        navLinks.forEach((link) => {
          link.style.color = 'black';
          link.style.setProperty('--underline-color', 'black');
        });
      }
    };
    
    updateNavbarAndLinks();

    // Section observer for navbar & link color changes on `/`
    if (location.pathname === '/') {
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, null, `#${entry.target.id}`);
            updateNavbarAndLinks();
          }
        });
      };

      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(observerCallback, { threshold: 0.4 });
      sections.forEach((section) => observerRef.current.observe(section));
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (isScrollListenerAttached.current && scrollHandlerRef.current) {
        try {
          window.removeEventListener('scroll', scrollHandlerRef.current);
        } catch (error) {
          console.warn("Error while removing scroll listener:", error);
        }
        isScrollListenerAttached.current = false;
      }
    };
  }, [location.pathname]);

  return (
    <nav ref={navbarRef}>
      <img ref={logoRef} src={navbarlogoBlack} id="nav-logo" alt="Permika Toronto Logo" />
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        style={{ color: hamburgerColor }}
      >
        <span style={{ backgroundColor: hamburgerColor }}></span>
        <span style={{ backgroundColor: hamburgerColor }}></span>
        <span style={{ backgroundColor: hamburgerColor }}></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
        <li className="dropdown">
          <div className="dropdown-trigger">
            <span>About Us ▾</span>
            <ul className="dropdown-content">
            <li><Link to="/team" className="dropdown-link" onClick={handleNavClick}>Our Team</Link></li>
            <li><Link to="/adart" className="dropdown-link" onClick={handleNavClick}>AD/ART</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/news" onClick={handleNavClick}>News</Link></li>
        <li><Link to="/survival-guide" onClick={handleNavClick}>Survival Guide</Link></li>
        <li><Link to="/faq" onClick={handleNavClick}>FAQ</Link></li>
      </ul>

      <div className={`full-screen-menu ${isMenuOpen ? 'visible' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
          <li><Link to="/team" onClick={handleNavClick}>Our Team</Link></li>
          <li><Link to="/adart" onClick={handleNavClick}>AD/ART</Link></li>
          <li><Link to="/survival-guide" onClick={handleNavClick}>Survival Guide</Link></li>
          <li><Link to="/news" onClick={handleNavClick}>News</Link></li>
          <li><Link to="/faq" onClick={handleNavClick}>FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
