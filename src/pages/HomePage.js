import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../app/App.css";
import Banner from "../features/home/components/Banner";
import About from "../features/home/components/About";
import Isa from "../features/home/components/Isa";
import Events from "../features/home/components/Events";
import PhotoDump from "../features/home/components/PhotoDump";
import Footer from "../components/layout/Footer";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "events") {
      const eventSection = document.getElementById("events");

      if (eventSection) {
        setTimeout(() => {
          eventSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }

      navigate(".", { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const firstPass = window.setTimeout(scrollToSection, 150);
    const settledPass = window.setTimeout(scrollToSection, 1200);

    return () => {
      window.clearTimeout(firstPass);
      window.clearTimeout(settledPass);
    };
  }, [location.hash]);

  return (
    <div className="Home">
      <Banner />
      <About />
      <Isa />
      <Events />
      <PhotoDump />
      <Footer />
    </div>
  );
}

export default HomePage;
