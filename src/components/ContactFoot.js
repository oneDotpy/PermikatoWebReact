import React, { useEffect } from 'react';
import './ContactFoot.css';
import instagramLogo from "../assets/png/icons/instagram.png";
import threadsLogo from "../assets/png/icons/threads.png";
import tiktokLogo from "../assets/png/icons/tiktok.png";
import youtubeLogo from "../assets/png/icons/youtube.png";
import linkedinLogo from "../assets/png/icons/linkedin.png";
import emailLogo from "../assets/png/icons/email.png";
import membershipIcon from "../assets/png/navbarlogo_white.png";
import reportIcon from "../assets/png/icons/kjri.png";

function ContactFoot() {
  useEffect(() => {
    const socialButtons = [
      { id: 'social-foot1', url: 'https://www.instagram.com/permikato/' },
      { id: 'social-foot2', url: 'https://www.threads.net/@permikato' },
      { id: 'social-foot3', url: 'https://www.tiktok.com/@permikato' },
      { id: 'social-foot4', url: 'https://www.youtube.com/@permikatoronto2281' },
      { id: 'social-foot5', url: 'https://www.linkedin.com/company/permika-toronto/' },
    ];

    socialButtons.forEach((button) => {
      document.getElementById(button.id)?.addEventListener('click', () => {
        window.open(button.url, '_blank');
      });
    });

    return () => {
      socialButtons.forEach((button) => {
        document.getElementById(button.id)?.removeEventListener('click', () => {
          window.open(button.url, '_blank');
        });
      });
    };
  }, []);

  return (
    <footer className="contact-foot-section">
      {/* Left Side: Buttons */}
      <div className="long-buttons-foot">
        <button className="long-btn-foot" onClick={() => window.open('https://linktr.ee/permikatoronto', '_blank')}>
          <img src={membershipIcon} alt="Counselling Permikato" />
          <span>All ongoing PERMIKATO events and forms!</span>
        </button>
        
        <button className="long-btn-foot" onClick={() => window.open('https://peduliwni.kemlu.go.id/beranda.html', '_blank')}>
          <img src={reportIcon} alt="Lapor Diri KJRI" />
          <span>Lapor Diri to KJRI Toronto!</span>
        </button>
      </div>

      {/* Right Side: Contact Info */}
      <div className="contact-info-foot">
        <h2>Feel free to reach out!</h2>
        <p>If you have any inquiries, please email to</p>
        <p><a href="mailto:permikato@gmail.com" className="contact-email-foot">permikato@gmail.com</a></p>

        {/* Social Icons */}
        <div className="social-icons-foot">
          <button className="social-btn-foot" id="social-foot1"><img src={instagramLogo} alt="Instagram" /></button>
          <button className="social-btn-foot" id="social-foot2"><img src={threadsLogo} alt="Threads" /></button>
          <button className="social-btn-foot" id="social-foot3"><img src={tiktokLogo} alt="TikTok" /></button>
          <button className="social-btn-foot" id="social-foot4"><img src={youtubeLogo} alt="YouTube" /></button>
          <button className="social-btn-foot" id="social-foot5"><img src={linkedinLogo} alt="LinkedIn" /></button>
        </div>
      </div>
    </footer>
  );
}

export default ContactFoot;
