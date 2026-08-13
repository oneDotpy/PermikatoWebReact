import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-header">
          <div className="about-heading-block">
            <span className="about-eyebrow">About Permika Toronto</span>
            <h2>
              Indonesian Students Building
              <br />
              Community in Toronto
            </h2>
          </div>

          <p className="about-intro">
            Permika Toronto is a student community that connects Indonesian
            students across the Greater Toronto Area through friendship,
            collaboration, and shared purpose.
          </p>
        </div>

        <div className="about-content-grid">
          <figure className="about-image-panel">
            <img
              src="/assets/events/spookseek.jpg"
              alt="PERMIKATO students at a community event"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Spook n Seek with the PERMIKATO community.</figcaption>
          </figure>

          <div className="about-highlight-card">
            <div className="about-highlight-top">
              <span className="about-mini-label">Community at a Glance</span>
              <div className="about-stat-lockup">
                <strong>160+</strong>
                <h3>Students Across 9 Colleges and Universities</h3>
              </div>
            </div>

            <p>
              Perhimpunan Mahasiswa Indonesia di Kanada (Permika) Toronto is an
              Indonesian students association in Toronto, Canada. Based on our
              database of registered members, we accommodate 160+ Indonesian
              students dispersed in 9 colleges and universities in the Greater
              Toronto Area.
            </p>
          </div>

          <div className="about-text-card">
            <span className="about-mini-label">What We Stand For</span>
            <p>
              We aim to foster fruitful relationships between Indonesian
              students and the diaspora in Toronto, provide networking
              opportunities, support and nurture the talents and aspirations of
              our members, and initiate impactful actions within our community.
            </p>
            <p>
              Consisting of students from various post-secondary education
              levels and many academic programs, Permika Toronto is a student
              body of vibrant and diverse ideas. We strive to synergize the
              multidisciplinary backgrounds of our committee members into one
              robust force for the Indonesian student community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
