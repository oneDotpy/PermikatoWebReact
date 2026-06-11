import React from "react";
import "./PhotoDump.css";
import pictures from "../data/photoDumpImages";

function PhotoDump() {
  return (
    <section id="dump" className="dump-section">
      <div className="dump-shell">
        <div className="dump-header">
          <div>
            <span className="dump-eyebrow">Moments We Keep</span>
            <h2>Photo Dump From Our Community, Events, and Memories</h2>
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
              decoding="async"
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
                    decoding="async"
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

export default PhotoDump;
