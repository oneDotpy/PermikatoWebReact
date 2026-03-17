import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Isa from "./components/Isa";
import Events from "./components/Events";
import Dump from "./components/Dump";
import ContactFoot from "./components/ContactFoot";

function Home() {
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

  return (
    <div className="Home">
      <Banner />
      <About />
      <Isa />
      <Events />
      <Dump />
      <ContactFoot />
    </div>
  );
}

export default Home;