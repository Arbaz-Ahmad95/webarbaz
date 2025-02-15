import React from "react";
import { FaGithub, FaCodepen, FaLaptopCode ,FaCode} from "react-icons/fa";

import "./CodingProfileCard.css";
import Githublogo from '../assets/githublogo.png'
import Leetcode from '../assets/leetcode.png'
import GFG from '../assets/gfg.png'
import Hacker from '../assets/Hacker.png'
const CodingProfileCard = () => {
  return (
    <section id="coding-profile" className="coding-profile-section">
      <h2 className="section-title section-cod">Coding Profiles</h2>
      <hr className="section-divider" />
      <div className="profile-container">
        <div className="profile-card">
          <FaGithub className="profile-icon" />
          <h3>GitHub</h3>
         <a href="https://github.com/Arbaz-Ahmad95?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank"> <img src={Githublogo} alt="GitHub Logo" className="github-logo" /></a>

          <p>Explore my open-source projects and contributions.</p>

          <a href="https://github.com/Arbaz-Ahmad95?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" className="profile-link">Visit GitHub</a>
        </div>

        <div className="profile-card">
          <FaCode className="profile-icon" />
          <h3>Geeks For Geeks</h3>
         <a href="https://www.geeksforgeeks.org/user/arbaz121/" target="_blank"><img src={GFG} alt="GitHub Logo" className="github-logo" /></a> 
          <p>Check out my frontend experiments and creative designs.</p>
          <a href="https://www.geeksforgeeks.org/user/arbaz121/" target="_blank" className="profile-link">Visit GFG</a>
        </div>

        <div className="profile-card">
          <FaLaptopCode className="profile-icon" />
          <h3>LeetCode</h3>
          <a href="https://leetcode.com/u/arbaz121/" target="_blank"><img src={Leetcode} alt="GitHub Logo" className="github-logo" /></a>
          <p>Practice coding challenges and improve problem-solving skills.</p>
          <a href="https://leetcode.com/u/arbaz121/" target="_blank" className="profile-link">Visit LeetCode</a>
        </div>
        <div className="profile-card">
          <FaLaptopCode className="profile-icon" />
          <h3>HackerRank</h3>
          <a href="https://www.hackerrank.com/profile/arbazahmad363" target="_blank"><img src={Hacker} alt="GitHub Logo" className="github-logo" /></a>
          <p>Practice coding challenges and improve problem-solving skills.</p>
          <a href="https://www.hackerrank.com/profile/arbazahmad363" target="_blank" className="profile-link">Visit HackerRank</a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfileCard;
