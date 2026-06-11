import React from "react";
import "./Footer.css";

import instagramLogo from "../../assets/images/icons/instagram.png";
import threadsLogo from "../../assets/images/icons/threads.png";
import tiktokLogo from "../../assets/images/icons/tiktok.png";
import youtubeLogo from "../../assets/images/icons/youtube.png";
import linkedinLogo from "../../assets/images/icons/linkedin.png";
import permikatoLogo from "../../assets/images/brand/navbarlogo_white.png";

const quickLinks = [
  {
    label: "Events & Forms",
    url: "https://linktr.ee/permikatoronto",
  },
  {
    label: "Lapor Diri KJRI",
    url: "https://peduliwni.kemlu.go.id/beranda.html",
  },
  {
    label: "Email Us",
    url: "mailto:permikato@gmail.com",
  },
];

const socials = [
  {
    name: "Instagram",
    icon: instagramLogo,
    url: "https://www.instagram.com/permikato/",
  },
  {
    name: "Threads",
    icon: threadsLogo,
    url: "https://www.threads.net/@permikato",
  },
  {
    name: "TikTok",
    icon: tiktokLogo,
    url: "https://www.tiktok.com/@permikato",
  },
  {
    name: "YouTube",
    icon: youtubeLogo,
    url: "https://www.youtube.com/@permikatoronto",
  },
  {
    name: "LinkedIn",
    icon: linkedinLogo,
    url: "https://www.linkedin.com/company/permika-toronto/",
  },
];

function Footer() {
  return (
    <footer className="contact-foot">
      <div className="contact-foot-main">
        <div className="contact-foot-container">
          <div className="contact-foot-head">
            <div className="contact-foot-brandline">
              <div className="contact-foot-logo-wrap">
                <img
                  src={permikatoLogo}
                  alt="PERMIKATO logo"
                  className="contact-foot-logo"
                />
              </div>

              <div className="contact-foot-brandtext">
                <h2>PERMIKATO</h2>
                <p>Indonesian Students’ Association in Toronto</p>
              </div>
            </div>

            <div className="contact-foot-socials">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-foot-social"
                  aria-label={social.name}
                  title={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-foot-content">
            <div className="contact-foot-message">
              <span className="contact-foot-title">Stay Connected</span>
              <p className="contact-foot-description">
                Building community, connection, and a home away from home for
                Indonesian students in the Greater Toronto Area.
              </p>
            </div>

            <div className="contact-foot-meta">
              <div className="contact-foot-column">
                <span className="contact-foot-title">Quick Links</span>
                <div className="contact-foot-links">
                  {quickLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="contact-foot-link"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-foot-column">
                <span className="contact-foot-title">Contact</span>
                <a
                  href="mailto:permikato@gmail.com"
                  className="contact-foot-link contact-foot-email"
                >
                  permikato@gmail.com
                </a>
                <p className="contact-foot-small">
                  For collaborations, questions, and community inquiries.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-foot-bottomrow">
            <p>© 2025 PERMIKATO. All rights reserved.</p>
            <p>Made for the Indonesian Student Community in Toronto.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
