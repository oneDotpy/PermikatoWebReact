import React, { useState, useEffect, useRef } from 'react';
import './Dump.css';
import welpar from '../assets/png/events/welpar.jpg';
import halloween from '../assets/png/events/halloween.png';
import sports from '../assets/png/events/sports.png';

// import dump1 from '../assets/png/DSCF0168.jpg';
// import dump2 from '../assets/png/DSCF0213.jpg';
// import dump3 from '../assets/png/DSCF0235.jpg';
// import dump4 from '../assets/png/IMG_7351.JPG';
// import dump5 from '../assets/png/IMG_7352.JPG';
// import dump6 from '../assets/png/IMG_7367.JPG';

import dump1 from '../assets/dump/dump1.JPG';
import dump2 from '../assets/dump/dump2.JPG';
import dump3 from '../assets/dump/dump3.jpg';
import dump4 from '../assets/dump/dump4.jpg';
// import dump5 from '../assets/dump/dump5.jpg';
import dump6 from '../assets/dump/dump6.jpg';
// import dump7 from '../assets/dump/dump7.jpg';
// import dump8 from '../assets/dump/dump8.JPG';
import dump9 from '../assets/dump/dump9.JPG';
import dump10 from '../assets/dump/dump10.JPG';
import dump11 from '../assets/dump/dump11.jpg';
import dump12 from '../assets/dump/dump12.jpg';

const pictures = [welpar, dump1, dump2, dump3, dump4, dump6, dump9, dump10, dump11, dump12];

function Dump() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const isTransitioningRef = useRef(false); // To control smooth transition loop behavior

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === pictures.length - 3) {
          isTransitioningRef.current = true; // Temporarily disable smooth transition
          return 0; // Jump to the first slide
        }
        return prevSlide + 1;
      });
    }, 1500); // Change every 6 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      if (isTransitioningRef.current) {
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      } else {
        // Smooth transition for normal sliding
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      }

      sliderRef.current.style.transform = `translateX(-${currentSlide * (100 / pictures.length)}%)`;
    }
  }, [currentSlide]);

  return (
    <section id="dump" className="dump-section">
      <h1>Photo Dump</h1>
      <div className="dump-slider-container">
        <div className="dump-slide-container" ref={sliderRef}>
          {pictures.map((picture, index) => (
            <div
              className="dump-slide"
              key={index}
              style={{
                backgroundImage: `url(${picture})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <a
        href="https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_LINK"
        target="_blank"
        rel="noopener noreferrer"
        className="dump-drive-button"
      >
        Dump Drive
      </a>
    </section>
  );
}

export default Dump;
