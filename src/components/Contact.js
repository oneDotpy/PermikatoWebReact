import React, { useEffect } from 'react';
import './Contact.css';
import instagramLogo from "../assets/png/icons/instagram.png";
import threadsLogo from "../assets/png/icons/threads.png";
import tiktokLogo from "../assets/png/icons/tiktok.png";
import youtubeLogo from "../assets/png/icons/youtube.png";
import linkedinLogo from "../assets/png/icons/linkedin.png";
import emailLogo from "../assets/png/icons/email.png";
import membershipIcon from "../assets/png/navbarlogo_white.png"; // Make sure this image exists
import sotoIcon from "../assets/png/navbarlogo_white.png"; // Make sure this image exists
import reportIcon from "../assets/png/navbarlogo_white.png"; // Make sure this image exists

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
          <button className="social-btn" id="social1"><img src={instagramLogo} alt="Instagram" /></button>
          <button className="social-btn" id="social2"><img src={threadsLogo} alt="Threads" /></button>
          <button className="social-btn" id="social3"><img src={tiktokLogo} alt="TikTok" /></button>
          <button className="social-btn" id="social4"><img src={youtubeLogo} alt="YouTube" /></button>
          <button className="social-btn" id="social5"><img src={linkedinLogo} alt="LinkedIn" /></button>
          <button className="social-btn" id="social6"><img src={emailLogo} alt="Email" /></button>
        </div>

        <div className="long-buttons">
          {/* Long buttons with links */}
          <button className="long-btn" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeL_kcuICXL3-oviwa2v3uSKU6nyDJSyx_j-cnSkeS6aj4SLQ/viewform', '_blank')}>
            <img src={membershipIcon} alt="Counselling Permikato" />
            <span>PERMIKATO Counselling Form</span>
          </button>

          <button className="long-btn" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeL_kcuICXL3-oviwa2v3uSKU6nyDJSyx_j-cnSkeS6aj4SLQ/viewform', '_blank')}>
            <img src={membershipIcon} alt="Membership Permikato" />
            <span>PERMIKATO Membership Form</span>
          </button>

          <button className="long-btn" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeL_kcuICXL3-oviwa2v3uSKU6nyDJSyx_j-cnSkeS6aj4SLQ/viewfhttps://drive.google.com/drive/folders/13qSY9kA8hgKeNPDrTe-u9_GHsroUUdxv', '_blank')}>
            <img src={sotoIcon} alt="SOTO" />
            <span>SOTO (Sharing Info Seputar Toronto) Slides & Recording</span>
          </button>

          <button className="long-btn" onClick={() => window.open('https://peduliwni.kemlu.go.id/beranda.html', '_blank')}>
            <img src={reportIcon} alt="Lapor Diri KJRI" />
            <span>Lapor Diri to KJRI Toronto!</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
