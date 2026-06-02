import React from "react";
import "./Dump.css";

import welpar from "../assets/png/events/welpar.jpg";
import dump1 from "../assets/dump/dump1.JPG";
import dump2 from "../assets/dump/dump2.JPG";
import dump3 from "../assets/dump/dump3.jpg";
import dump4 from "../assets/dump/dump4.jpg";
import dump6 from "../assets/dump/dump6.jpg";
import dump9 from "../assets/dump/dump9.JPG";
import dump10 from "../assets/dump/dump10.JPG";
import dump11 from "../assets/dump/dump11.jpg";
import dump12 from "../assets/dump/dump12.jpg";

const pictures = [
  { image: welpar, alt: "PERMIKATO photo memory 1" },
  { image: dump1, alt: "PERMIKATO photo memory 2" },
  { image: dump2, alt: "PERMIKATO photo memory 3" },
  { image: dump3, alt: "PERMIKATO photo memory 4" },
  { image: dump4, alt: "PERMIKATO photo memory 5" },
  { image: dump6, alt: "PERMIKATO photo memory 6" },
  { image: dump9, alt: "PERMIKATO photo memory 7" },
  { image: dump10, alt: "PERMIKATO photo memory 8" },
  { image: dump11, alt: "PERMIKATO photo memory 9" },
  { image: dump12, alt: "PERMIKATO photo memory 10" },
];

function Dump() {
  return (
    <section id="dump" className="dump-section">
      <div className="dump-shell">
        <div className="dump-header">
          <div>
            <span className="dump-eyebrow">Moments We Keep</span>
            <h2>Photo Dump from Our Community, Events, and Memories</h2>
          </div>

          <p>
            A glimpse into the people, energy, and little moments that make
            PERMIKATO feel like home through the memories we have built
            together.
          </p>
        </div>

        <div className="dump-featured-card">
          <div className="dump-featured-copy">
            <span className="dump-chip">Community Gallery</span>
            <h3>Captured Moments That Feel Warm, Lively, and Personal</h3>
            <p>
              From welcoming new students to casual hangouts and shared
              celebrations, this gallery highlights the spirit of our community
              in Toronto through candid, memorable snapshots.
            </p>

            <div className="dump-actions">
              <a
                href="https://www.instagram.com/permikato/"
                target="_blank"
                rel="noopener noreferrer"
                className="dump-primary-button"
              >
                Open Instagram
              </a>

              <a href="#events" className="dump-secondary-button">
                Back to Events
              </a>
            </div>
          </div>

          <div className="dump-featured-image-wrap">
            <img
              src={pictures[0].image}
              alt={pictures[0].alt}
              className="dump-featured-image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="dump-gallery-wrap">
          <div className="dump-gallery">
            {pictures.map((picture, index) => (
              <article className="dump-card" key={index}>
                <div className="dump-card-image-wrap">
                  <img
                    src={picture.image}
                    alt={picture.alt}
                    className="dump-card-image"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dump;
