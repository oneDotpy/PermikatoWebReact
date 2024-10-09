// src/components/Contact.js
import React, { useEffect } from 'react';
import '../Contact.css';

function Contact() {
  useEffect(() => {
    const socialButtons = [
      { id: 'social1', url: 'https://www.instagram.com/permikato/' },
      { id: 'social2', url: 'https://www.threads.net/@permikato' },
      { id: 'social3', url: 'https://www.tiktok.com/@permikato' },
      { id: 'social4', url: 'https://www.youtube.com/@permikatoronto2281' },
      { id: 'social5', url: 'https://www.linkedin.com/company/permika-toronto/' },
      { id: 'social6', url: 'mailto:permikato@gmail.com' },
    ];

    socialButtons.forEach((button) => {
      document.getElementById(button.id).addEventListener('click', () => {
        window.open(button.url, '_blank');
      });
    });

    return () => {
      socialButtons.forEach((button) => {
        document.getElementById(button.id).removeEventListener('click', () => {
          window.open(button.url, '_blank');
        });
      });
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="content-container">
        <h1>Contact Us</h1>
        <div className="social-icons">
          <button id="social1"><img src="../assets/png/icons/instagram.png" alt="Instagram" /></button>
          <button id="social2"><img src="../assets/png/icons/threads.png" alt="Threads" /></button>
          <button id="social3"><img src="../assets/png/icons/tiktok.png" alt="TikTok" /></button>
          <button id="social4"><img src="../assets/png/icons/youtube.png" alt="YouTube" /></button>
          <button id="social5"><img src="../assets/png/icons/linkedin.png" alt="LinkedIn" /></button>
          <button id="social6"><img src="../assets/png/icons/email.png" alt="Email" /></button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
