  import React, { useState, useEffect, useRef } from 'react';
  import './Isa.css';

  import utsg from "../assets/png/isa/utsg.jpg";
  import utsc from "../assets/png/isa/utsc.jpg";
  import utm from "../assets/png/isa/utm.jpg";
  import humber from "../assets/png/isa/humber.png";
  import tmu from "../assets/png/isa/tmu.jpg";
  import uw from "../assets/png/isa/uw.jpg";
  import yorku from "../assets/png/isa/yorku.jpg";

  import utisa from "../assets/png/isa/utisa.png";
  import idnsa from "../assets/png/isa/idnsa.png";
  import isautm from "../assets/png/isa/isautm.png";
  import isahumber from "../assets/png/isa/isahumber.png";
  import tmuisa from "../assets/png/isa/tmuisa.png";
  import uwisa from "../assets/png/isa/uwisa.png";
  import yorkuisa from "../assets/png/isa/yorkuisa.jpg";

  import arrow from "../assets/png/isa/arrow.png"
  import instagramLogo from "../assets/png/icons/instagram.png"

  import gta from "../assets/png/isa/gta.jpg"

  import black from "../assets/png/black.png";

  function Isa() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
  
    const slides = [
      {
        image: gta,
        heading: "Indonesian Student Associations around the GTA",
        members: ["Swipe →"],
        description: "Indonesian Student Associations (ISAs) across GTA campuses help Indonesian students settle into university life with events like frosh events, cultural activities, and social gatherings to build a home away from home.",
      },
      {
        image: utsg,
        heading: "University of Toronto St. George",
        title: "UTISA",
        members: [utisa],
        instagram: "https://www.instagram.com/uoftisa/",
        description: "UTISA connects Indonesian students at UofT St. George.",
      },
      {
        image: utsc,
        heading: "University of Toronto Scarborough",
        title: "IDNSA UTSC",
        members: [idnsa],
        instagram: "https://www.instagram.com/idnsautsc/",
        description: "IDNSA UTSC brings Indonesian students in Scarborough together.",
      },
      {
        image: utm,
        heading: "University of Toronto Mississauga",
        title: "UTM ISA",
        members: [isautm],
        instagram: "https://www.instagram.com/isautm/",
        description: "UTM ISA is your Indonesian family at UTM.",
      },
      {
        image: humber,
        heading: "Humber College",
        title: "ISA HUMBER",
        members: [isahumber],
        instagram: "https://www.instagram.com/isa_humber/",
        description: "ISA Humber unites Indonesian students.",
      },
      {
        image: tmu,
        heading: "Toronto Metropolitan University",
        title: "TMU ISA",
        members: [tmuisa],
        instagram: "https://www.instagram.com/tmuisa/",
        description: "TMU ISA builds a strong Indonesian student network.",
      },
      {
        image: uw,
        heading: "University of Waterloo",
        title: "UW ISA",
        members: [uwisa],
        instagram: "https://www.instagram.com/uw_isa/",
        description: "UW ISA offers Indonesian students in Waterloo a close-knit community.",
      },
      {
        image: yorku,
        heading: "York University",
        title: "YorkU ISA",
        members: [yorkuisa],
        instagram: "https://www.instagram.com/yorkuisa/",
        description: "YorkU ISA keeps Indonesian students connected.",
      }
    ];
    
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    const handleTouchStart = (e) => {
      sliderRef.current.touchStartX = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      if (!sliderRef.current.touchStartX) return;
      const touchEndX = e.touches[0].clientX;
      const distance = touchEndX - sliderRef.current.touchStartX;
  
      if (distance > 50) handlePrev(); // Swipe right
      if (distance < -50) handleNext(); // Swipe left
    };
  
    useEffect(() => {
      const slider = sliderRef.current;
      slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
      slider.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    }, [currentSlide]);
  
    return (
      <section id="isa" className="team-section">
        <div className="slider-container" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <h1>{slide.heading}</h1> {/* Main heading */}
                <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>{slide.title}</h2> {/* Sub-heading */}
                {slide.description && (
                  <p className="description-text">
                  {slide.description}
                </p>                
                )}

                <div className="team-members">
                  {index === 0
                    ? slide.members.map((member, i) => (
                        <p key={i} style={{ margin: "10px 0" }}>
                          {member}
                        </p>
                      )) // Render text for the first slide
                    : slide.members.map((member, i) => (
                        <img
                          key={i}
                          src={member}
                          alt={`${slide.title} member`}
                          style={{
                            width: "150px", // Adjust size as needed
                            height: "auto",
                            borderRadius: "10px",
                            margin: "10px 0", // Add spacing between images
                          }}
                        />
                      ))}
                </div>
                {index !== 0 && slide.instagram && ( // Hide button on the first slide
                  <a
                    href={slide.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-button"
                  >
                    <img
                      src={instagramLogo}
                      alt="Instagram"
                      className="instagram-logo"
                      loading='lazy'
                    />
                    <span>Visit Instagram</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Prev and Next arrows */}
        <button className="prev-button" onClick={handlePrev}>←</button>
        <button className="next-button" onClick={handleNext}>→</button>
      </section>
    );
  }
  
  export default Isa;
  