import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth Scroll Function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close menu on mobile
  };

  return (
    <nav className="navbar">
      <h1 className="nav-logo">Arbaz</h1>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#about-me" onClick={(e) => handleSmoothScroll(e, "#about-me")}>About</a></li>
        <li><a href="#coding-profile" onClick={(e) => handleSmoothScroll(e, "#coding-profile")}>Coding Profile</a></li>
        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>Skills</a></li>
        <li><a href="#college" onClick={(e) => handleSmoothScroll(e, "#college")}>College</a></li>
        <li><a href="#footer" onClick={(e) => handleSmoothScroll(e, "#footer")}>Contact</a></li>
        
   
      </ul>
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
