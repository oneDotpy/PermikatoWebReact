import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

import instagramLogo from "../assets/png/icons/instagram.png";
import gta from "../assets/png/isa/gta.jpg";

function Isa() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  const slides = useMemo(
    () => [
      {
        image: gta,
        heading: 'Indonesian student communities across the Greater Toronto Area',
        title: 'A shared network of Indonesian student communities in Toronto and beyond',
        description:
          'PERMIKATO is connected with Indonesian Student Associations across the Greater Toronto Area. Each campus community helps students settle in, build friendships, celebrate culture, and feel at home while studying abroad.',
        meta: [
          'Student-led communities',
          'Cultural and social activities',
          'A home away from home',
        ],
        isIntro: true,
      },
      {
        image: utsg,
        heading: 'University of Toronto St. George',
        title: 'UTISA',
        logo: utisa,
        instagram: 'https://www.instagram.com/uoftisa/',
        description:
          'UTISA connects Indonesian students at U of T St. George through community events, campus support, and shared cultural moments in downtown Toronto.',
      },
      {
        image: utsc,
        heading: 'University of Toronto Scarborough',
        title: 'IDNSA UTSC',
        logo: idnsa,
        instagram: 'https://www.instagram.com/idnsautsc/',
        description:
          'IDNSA UTSC brings Indonesian students in Scarborough together through welcoming gatherings, friendships, and a supportive campus network.',
      },
      {
        image: utm,
        heading: 'University of Toronto Mississauga',
        title: 'UTM ISA',
        logo: isautm,
        instagram: 'https://www.instagram.com/isautm/',
        description:
          'UTM ISA creates a warm and familiar space for Indonesian students in Mississauga to connect, grow, and feel at home.',
      },
      {
        image: humber,
        heading: 'Humber College',
        title: 'ISA Humber',
        logo: isahumber,
        instagram: 'https://www.instagram.com/isa_humber/',
        description:
          'ISA Humber unites Indonesian students through relaxed social events, shared experiences, and a strong sense of belonging.',
      },
      {
        image: tmu,
        heading: 'Toronto Metropolitan University',
        title: 'TMU ISA',
        logo: tmuisa,
        instagram: 'https://www.instagram.com/tmuisa/',
        description:
          'TMU ISA builds a vibrant Indonesian student network in downtown Toronto through community-building and campus life activities.',
      },
      {
        image: uw,
        heading: 'University of Waterloo',
        title: 'UW ISA',
        logo: uwisa,
        instagram: 'https://www.instagram.com/uw_isa/',
        description:
          'UW ISA offers Indonesian students in Waterloo a close-knit community built on friendship, support, and memorable shared events.',
      },
      {
        image: yorku,
        heading: 'York University',
        title: 'YorkU ISA',
        logo: yorkuisa,
        instagram: 'https://www.instagram.com/yorkuisa/',
        description:
          'YorkU ISA helps Indonesian students stay connected through community activities, cultural celebration, and a welcoming support system.',
      },
    ],
    []
  );

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchEndX - touchStartX.current;

    if (distance > 60) handlePrev();
    if (distance < -60) handleNext();

    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section id="isa" className="isa-section">
      <div className="isa-shell">
        <div className="isa-header">
          <div>
            <span className="isa-eyebrow">Indonesian Student Associations</span>
            <h2>Meet Indonesian Student Associations across Toronto and beyond</h2>
          </div>

          <p>
            From U of T and TMU to Waterloo and York, these student-led communities
            help Indonesian students build friendships, celebrate culture, and
            navigate campus life together.
          </p>
        </div>

        <div className="isa-controls-row">
          <div className="isa-controls" aria-label="ISA slider controls">
            <button
              type="button"
              className="isa-nav-button"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="isa-nav-button"
              onClick={handleNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        <div
          className="isa-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="isa-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <article className="isa-slide" key={`${slide.title}-${index}`}>
                <div
                  className="isa-slide-media"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="isa-slide-media-overlay" />
                  <div className="isa-slide-badge">
                    {slide.isIntro ? 'PERMIKATO Network' : 'Student Association'}
                  </div>
                </div>

                <div className="isa-slide-content">
                  <div className="isa-slide-copy">
                    <span className="isa-campus-label">{slide.heading}</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>

                    {slide.isIntro ? (
                      <div className="isa-meta-grid">
                        {slide.meta.map((item) => (
                          <div className="isa-meta-card" key={item}>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="isa-identity-row">
                        <div className="isa-logo-wrap">
                          <img
                            src={slide.logo}
                            alt={`${slide.title} logo`}
                            className="isa-logo"
                            loading="lazy"
                          />
                        </div>

                        <a
                          href={slide.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="isa-instagram-button"
                        >
                          <img
                            src={instagramLogo}
                            alt="Instagram"
                            className="isa-instagram-logo"
                            loading="lazy"
                          />
                          <span>Visit Instagram</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="isa-pagination" aria-label="ISA slider pagination">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-dot`}
              type="button"
              className={`isa-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Isa;