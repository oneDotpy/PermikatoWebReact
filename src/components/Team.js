import React, { useState, useEffect, useRef } from 'react';
import './Team.css';
import black from "../assets/png/black.png";
import exec from "../assets/png/exec.jpg";
import rso from "../assets/png/rso.jpg";
import esd from "../assets/png/esd.jpg";
import ea from "../assets/png/ea.jpg";
import itmp from "../assets/png/itmp.jpg";
import se from "../assets/png/se.jpg";
import finance from "../assets/png/finance.jpg";

function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: black,
      title: "PERMIKATO EXECUTIVES 2024/2025",
      members: [""],
    },
    {
      image: rso,
      title: "RESEARCH AND STRATEGIC ORGANIZATION",
      members: [
        "Timothy Marcello Pasaribu - Head of RSO",
        "Kayna Mufidah - RSO Associate",
        "Marnala Agnes Aurelia Sinurat - RSO Associate",
      ],
    },
    {
      image: esd,
      title: "EDUCATION AND STUDENT DEVELOPMENT",
      members: [
        "Muhammad Nabil Ar-Rafi - Head of ESD",
        "Oswald Jonathan Geraldo - ESD Associate",
        "Aneira Rachmadsyah - ESD Associate",
        "Sekar Ayu Apriliani Wibawa - ESD Associate",
      ],
    },
    {
      image: ea,
      title: "EXTERNAL AFFAIRS",
      members: [
        "Adriana Meriam Elsabel Simanjuntak - Head of EA",
        "Muhammad Enrizky Brillian - Head of EA",
        "Kartika Cahya Kumala - EA Associate",
      ],
    },
    {
      image: itmp,
      title: "IT, MEDIA, AND PUBLICATION",
      members: [
        "Samuel Jediah Gultom - Head of ITMP",
        "Ahnaf Keenan Ardhito - IT Associate",
        "Alexa Chandra - Media Associate",
        "Daniella Talita Putri - Media Associate",
        "Nada Ramadhania - Media Associate",
        "Rafiif Nur Tahta Bagaskara - Media Associate",
      ],
    },
    {
      image: se,
      title: "STUDENT ENGAGEMENT",
      members: [
        "Gede Deanova Wikayana Fachrie - Head of Stud Eng",
        "Nasywa Atha Talitha - Stud Eng Associate",
        "Roberto Theno Kevin King - Stud Eng Associate",
      ],
    },
    {
      image: finance,
      title: "FINANCE",
      members: [
        "Brandy Theofilus Laurent - Head of Finance",
        "Edward Farrell Henderi - Finance Associate",
        "Josh Reiner - Finance Associate",
        "Stefanie Tania - Finance Associate",
      ],
    },
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
    <section id="team" className="team-section">
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
              <h1>{slide.title}</h1>
              <div className="team-members">
                {slide.members.map((member, i) => (
                  <p key={i}>{member}</p>
                ))}
              </div>
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

export default Team;
