import React, { useState } from 'react';
import './Events.css';
import welpar from '../assets/png/events/welpar.jpg';
import halloween from '../assets/png/events/halloween.png';
import sports from '../assets/png/events/sports.png';

const events = [
  {
    image: welpar,
    title: 'Welcoming Party',
    description: 'Join us for the welcoming party where new members get to meet and have fun!',
    galleryLink: 'https://drive.google.com/drive/folders/1OjPia7t58Utjm1txrbLjVONlgLqYCXfq',
  },
  {
    image: halloween,
    title: 'Halloween Night',
    description: 'Coming Soon...',
    galleryLink: '',
  },
  {
    image: sports,
    title: 'Sports Day',
    description: 'Coming Soon...',
    galleryLink: '',
  },
];

function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedEvent, setFocusedEvent] = useState(null);

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
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  };

  const handleCloseFocus = () => {
    setIsFocused(false);
    setFocusedEvent(null);
    document.body.style.overflow = ''; // Allow background scroll again
  };

  return (
    <section id="events" className="events-section">
      <h1>Our Events</h1>
      
      {/* Arrows are now outside the slider container */}
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

      {isFocused && focusedEvent && (
        <div className="events-focus-modal">
        <div className="events-modal-content">
          <button className="events-close-button" onClick={handleCloseFocus}>✖</button>
          <img src={focusedEvent.image} alt={focusedEvent.title} />
          <h2>{focusedEvent.title}</h2>
          <p>{focusedEvent.description}</p>
      
          {focusedEvent.galleryLink !== '' && (
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
