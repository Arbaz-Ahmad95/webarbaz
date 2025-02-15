import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-h2">Arbaz</h2>
          <p>Building amazing digital experiences.</p>
          <a href="#about-me" onClick={(e) => handleSmoothScroll(e, "#about-me")} target="_blank" rel="noopener noreferrer" className="portfolio-link" id="about-me">
         
            Visit My Portfolio
          </a>
        </div>

        <div className="footer-center">
          <h3>Contact Me</h3>
          <p><FaEnvelope className="icon" /> arbazahmad3611@gmail.com</p>
          <p><FaMapMarkerAlt className="icon" /> Bihar, India</p>
        </div>

        <div className="footer-right">
          <h3 className="footer-h3">Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Arbaz-Ahmad95?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Arbaz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
