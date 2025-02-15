import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaCuttlefish,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiPython } from "react-icons/si";
import "./TechnicalSkills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaDatabase />, name: "DSA" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaCuttlefish />, name: "C" },
  { icon: <FaJava />, name: "Java" },
];

const TechnicalSkills = () => {
  return (
    <section id="skills" className="technical-skills">
      <h2 className="section-title">Technical Skills</h2>
      <hr className="section-divider" />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
