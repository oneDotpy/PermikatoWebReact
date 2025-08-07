import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Events.css';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvx5UO9CVXqc06OmTxGJZTG90ml0CpElXPpNhYZtMdcF4yJJ4BjVUJUz76is0YzAf5RTwJpAI3a3jQ/pub?output=csv';

function Events() {
  const [events, setEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedEvent, setFocusedEvent] = useState(null);

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        setEvents(result.data);
      }
    });
  }, []);

  const handleNext = () => {
    if (currentSlide < events.length - 3) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleImageClick = (index) => {
    setFocusedEvent(events[index]);
    setIsFocused(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFocus = () => {
    setIsFocused(false);
    setFocusedEvent(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="events" className="events-section">
      <h1>Our programs</h1>

      {!isFocused && currentSlide > 0 && (
        <button className="events-prev-button" onClick={handlePrev}>←</button>
      )}

      <div className="events-slider-container">
        <div
          className="events-slide-container"
          style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
        >
          {events.map((event, index) => (
            <div
              className="events-slide"
              key={index}
              onClick={() => handleImageClick(index)}
              style={{
                backgroundImage: `url(${event.image})`,
              }}
            >
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        </div>
      </div>

      {!isFocused && currentSlide < events.length - 3 && (
        <button className="events-next-button" onClick={handleNext}>→</button>
      )}

      <p>Scroll and click each program for more info!</p>

      {isFocused && focusedEvent && (
        <div className={`events-focus-modal ${isFocused ? 'show' : ''}`}>
          <div className="events-modal-content">
            <button className="events-close-button" onClick={handleCloseFocus}>✖</button>
            <img 
              src={focusedEvent.image} 
              alt={focusedEvent.title} 
              loading='lazy'
            />
            <h2>{focusedEvent.title}</h2>
            <p>{focusedEvent.description}</p>

            {focusedEvent.galleryLink && focusedEvent.galleryLink !== '' && (
              <button
                className="events-gallery-button"
                onClick={() => window.open(focusedEvent.galleryLink, '_blank')}
              >
                View Photo Gallery
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;
