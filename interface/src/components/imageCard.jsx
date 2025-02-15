import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ImageCard.css";
import { motion } from "framer-motion";
import Arbaz from '../assets/arbaz-img.jpg'

const ImageCard = () => {
    return (
      <section className="about-me " id="about-me">
      <div className="about-card">
        {/* Profile Image */}
        <img src= {Arbaz} alt="Profile" className="profile-img" />

        {/* Name & Bio */}
        <div className="text-content">
          <h2 className="name"> Arbaz Ahmad</h2>
          <p className="bio">Web Developer | App Developer | Freelancer</p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.facebook.com/arbaz.ahmad.779857?mibextid=ZbWKwL" target="_blank" className="social-icon"><FaFacebook /></a>
            
            <a href="https://www.instagram.com/ims_arbaz?igsh=NTc4MTIwNjQ2YQ==" target="_blank" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/arbazahmad95" target="_blank" className="social-icon"><FaLinkedin /></a>
          </div>

          {/* Resume Button */}
          <a href="https://drive.google.com/file/d/1OvnJWLTUm-bS2DOEr6p3ZFHa6OJkU2c7/view?usp=drivesdk" download className="resume-btn" target="_blank" >Download Resume</a>
        </div>
      </div>
    </section>
      );
};

export default ImageCard;
