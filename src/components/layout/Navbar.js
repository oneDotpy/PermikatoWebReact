import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import navbarlogoBlack from "../../assets/images/brand/navbarlogo_black.png";
import navbarlogoWhite from "../../assets/images/brand/navbarlogo_white.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState("light");
  const navbarRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const homeSectionThemes = useMemo(
    () => ({
      home: "dark",
      about: "light",
      isa: "light",
      team: "light",
      events: "light",
      dump: "light",
      contact: "dark",
    }),
    []
  );

  const pageThemes = useMemo(
    () => ({
      "/": "light",
      "/team": "light",
      "/adart": "light",
      "/survival-guide": "light",
      "/news": "light",
      "/notfound": "light",
      "/faq": "red",
      "/become-member": "red",
    }),
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("menu-open", next);
      return next;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  const handleNavClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isHomePage) {
      setTheme(pageThemes[location.pathname] || "light");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) {
      setTheme("light");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const sectionId = visibleEntry.target.id;
        window.history.replaceState(null, "", `#${sectionId}`);
        setTheme(homeSectionThemes[sectionId] || "light");
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-10% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const currentHash = window.location.hash.replace("#", "");
    if (currentHash && homeSectionThemes[currentHash]) {
      setTheme(homeSectionThemes[currentHash]);
    } else {
      setTheme("light");
    }

    return () => observer.disconnect();
  }, [isHomePage, location.pathname, homeSectionThemes, pageThemes]);

  const logoSrc = theme === "light" ? navbarlogoBlack : navbarlogoWhite;
  const hamburgerColor = theme === "light" ? "#111111" : "#ffffff";

  return (
    <nav
      ref={navbarRef}
      className={`site-navbar navbar-theme-${theme} ${isHidden ? "hide" : "show"}`}
    >
      <Link to="/" className="navbar-brand" onClick={handleNavClick}>
        <img src={logoSrc} id="nav-logo" alt="Permikato Toronto logo" />
      </Link>

      <button
        className={`hamburger-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span style={{ backgroundColor: hamburgerColor }}></span>
        <span style={{ backgroundColor: hamburgerColor }}></span>
        <span style={{ backgroundColor: hamburgerColor }}></span>
      </button>

      <ul className="nav-links">
        <li>
          <Link to="/" onClick={handleNavClick}>
            Home
          </Link>
        </li>

        <li className="dropdown">
          <div className="dropdown-trigger">
            <span>About Us</span>
            <ul className="dropdown-content">
              <li>
                <Link to="/team" className="dropdown-link" onClick={handleNavClick}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/adart" className="dropdown-link" onClick={handleNavClick}>
                  AD/ART
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/news" onClick={handleNavClick}>
            News
          </Link>
        </li>

        <li>
          <Link to="/survival-guide" onClick={handleNavClick}>
            Survival Guide
          </Link>
        </li>

        <li>
          <Link to="/faq" onClick={handleNavClick}>
            FAQ
          </Link>
        </li>
      </ul>

      <div className={`full-screen-menu ${isMenuOpen ? "visible" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleNavClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={handleNavClick}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/adart" onClick={handleNavClick}>
              AD/ART
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={handleNavClick}>
              News
            </Link>
          </li>
          <li>
            <Link to="/survival-guide" onClick={handleNavClick}>
              Survival Guide
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={handleNavClick}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
