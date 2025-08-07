import React, { useEffect, useState } from 'react';
import './Contact.css';
import instagramLogo from "../assets/png/icons/instagram.png";
import threadsLogo from "../assets/png/icons/threads.png";
import tiktokLogo from "../assets/png/icons/tiktok.png";
import youtubeLogo from "../assets/png/icons/youtube.png";
import linkedinLogo from "../assets/png/icons/linkedin.png";
import emailLogo from "../assets/png/icons/email.png";
import membershipIcon from "../assets/png/navbarlogo_white.png";
import reportIcon from "../assets/png/icons/kjri.png";

function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    { question: "What is PERMIKATO?", answer: "PERMIKATO is the Indonesian student association in Toronto, Canada, aimed at fostering community and cultural engagement." },
    { question: "How can I join PERMIKATO?", answer: "You can join by filling out the membership form on our website or reaching out via our social media platforms." },
    { question: "What events does PERMIKATO organize?", answer: "We host various events including cultural nights, networking sessions, and community outreach programs." },
    { question: "How can I stay updated on PERMIKATO events?", answer: "Follow us on our social media channels or check our Linktree for the latest updates and forms." },
    { question: "How do I contact PERMIKATO for collaborations?", answer: "You can contact us through email at permikato@gmail.com or message us on Instagram." }
  ];

  useEffect(() => {
    const socialButtons = [
      { id: 'social1', url: 'https://www.instagram.com/permikato/' },
      { id: 'social2', url: 'https://www.threads.net/@permikato' },
      { id: 'social3', url: 'https://www.tiktok.com/@permikato' },
      { id: 'social4', url: 'https://www.youtube.com/@permikatoronto2281' },
      { id: 'social5', url: 'https://www.linkedin.com/company/permika-toronto/' },
      { id: 'social6', url: 'mailto:permikato@gmail.com' },
    ];

    const clickHandlers = {};

    socialButtons.forEach((button) => {
      const element = document.getElementById(button.id);
      if (element) {
        clickHandlers[button.id] = () => window.open(button.url, '_blank');
        element.addEventListener('click', clickHandlers[button.id]);
      }
    });

    return () => {
      socialButtons.forEach((button) => {
        const element = document.getElementById(button.id);
        if (element && clickHandlers[button.id]) {
          element.removeEventListener('click', clickHandlers[button.id]);
        }
      });
    };
  }, []);

  return (
    <section id="faq-contact" className="contact-section">
      <div className="content-container">
        
        {/* FAQ Section */}
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-row">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-divider"></div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <h2>Feel Free to Reach Out!</h2>
        <div className="social-icons">
          <button className="social-btn" id="social1" title='Instagram'><img src={instagramLogo} alt="Instagram" /></button>
          <button className="social-btn" id="social2" title='Threads'><img src={threadsLogo} alt="Threads" /></button>
          <button className="social-btn" id="social3" title='TikTok'><img src={tiktokLogo} alt="TikTok" /></button>
          <button className="social-btn" id="social4" title='YouTube'><img src={youtubeLogo} alt="YouTube" /></button>
          <button className="social-btn" id="social5" title='LinkedIn'><img src={linkedinLogo} alt="LinkedIn" /></button>
          <button className="social-btn" id="social6" title='Email'><img src={emailLogo} alt="Email" /></button>
        </div>

        <div className="long-buttons">
          <button className="long-btn" onClick={() => window.open('https://linktr.ee/permikatoronto', '_blank')}>
            <img src={membershipIcon} alt="Counselling Permikato" />
            <span>All ongoing PERMIKATO events and forms!</span>
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
