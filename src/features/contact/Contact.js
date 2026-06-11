import React from 'react';
import './Contact.css';
import instagramLogo from "../../assets/images/icons/instagram.png";
import threadsLogo from "../../assets/images/icons/threads.png";
import tiktokLogo from "../../assets/images/icons/tiktok.png";
import youtubeLogo from "../../assets/images/icons/youtube.png";
import linkedinLogo from "../../assets/images/icons/linkedin.png";
import emailLogo from "../../assets/images/icons/email.png";
import membershipIcon from "../../assets/images/brand/navbarlogo_white.png";
import reportIcon from "../../assets/images/icons/kjri.png";

function Contact() {
  const faqs = [
    {
      question: "What is PERMIKATO?",
      answer:
        "PERMIKATO is the Indonesian student association in Toronto, Canada, aimed at fostering community and cultural engagement.",
    },
    {
      question: "How can I join PERMIKATO?",
      answer:
        "You can join by filling out the membership form on our website or reaching out via our social media platforms.",
    },
    {
      question: "What events does PERMIKATO organize?",
      answer:
        "We host various events including cultural nights, networking sessions, and community outreach programs.",
    },
    {
      question: "How can I stay updated on PERMIKATO events?",
      answer:
        "Follow us on our social media channels or check our Linktree for the latest updates and forms.",
    },
    {
      question: "How do I contact PERMIKATO for collaborations?",
      answer:
        "You can contact us through email at permikato@gmail.com or message us on Instagram.",
    },
  ];

  const socialLinks = [
    { icon: instagramLogo, alt: "Instagram", url: "https://www.instagram.com/permikato/" },
    { icon: threadsLogo, alt: "Threads", url: "https://www.threads.net/@permikato" },
    { icon: tiktokLogo, alt: "TikTok", url: "https://www.tiktok.com/@permikato" },
    { icon: youtubeLogo, alt: "YouTube", url: "https://www.youtube.com/@permikatoronto2281" },
    { icon: linkedinLogo, alt: "LinkedIn", url: "https://www.linkedin.com/company/permika-toronto/" },
    { icon: emailLogo, alt: "Email", url: "mailto:permikato@gmail.com" },
  ];

  return (
    <section id="faq-contact" className="contact-page">
      <div className="contact-shell">
        <div className="contact-hero">
          <span className="contact-eyebrow">FAQ & Contact</span>
          <h1 className="contact-title">
            Stay <span>Connected</span>
          </h1>
          <p className="contact-subtitle">
            Find quick answers, reach out through our social channels, and stay
            updated with the latest PERMIKATO forms and important resources.
          </p>
        </div>

        <div className="faq-card">
          <div className="section-heading">
            <span className="section-chip">Help Center</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-card">
          <div className="section-heading">
            <span className="section-chip">Reach Us</span>
            <h2>Feel Free to Reach Out</h2>
            <p>
              Follow PERMIKATO online and connect with us through your preferred
              platform.
            </p>
          </div>

          <div className="social-icons">
            {socialLinks.map((item, index) => (
              <button
                key={index}
                className="social-btn"
                title={item.alt}
                onClick={() => window.open(item.url, '_blank')}
              >
                <img src={item.icon} alt={item.alt} />
              </button>
            ))}
          </div>

          <div className="contact-links">
            <button
              className="contact-link-card primary"
              onClick={() => window.open('https://linktr.ee/permikatoronto', '_blank')}
            >
              <div className="contact-link-icon">
                <img src={membershipIcon} alt="PERMIKATO Linktree" />
              </div>
              <div className="contact-link-text">
                <h3>All Ongoing PERMIKATO Events and Forms</h3>
                <p>Access current registrations, updates, and active links in one place.</p>
              </div>
              <span className="contact-link-arrow">↗</span>
            </button>

            <button
              className="contact-link-card"
              onClick={() => window.open('https://peduliwni.kemlu.go.id/beranda.html', '_blank')}
            >
              <div className="contact-link-icon">
                <img src={reportIcon} alt="Lapor Diri KJRI" />
              </div>
              <div className="contact-link-text">
                <h3>Lapor Diri to KJRI Toronto</h3>
                <p>Important official registration resource for Indonesian citizens abroad.</p>
              </div>
              <span className="contact-link-arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
