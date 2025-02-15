import React from "react";
import "./Projects.css";
import Video from '../assets/video.png';
import Nksons from '../assets/nk-sons.png';
import Resturant from '../assets/resturant.png';
import Spotify from '../assets/spotify.png'

const projects = [
 
  {
    name: "E-commerce Clothing",
    image: Nksons, // Correct image for this project
    description: "A stylish online store for clothing, offering easy browsing, category filters, and a smooth checkout process.",
    link: "https://nk-sons.vercel.app/",
  },
  {
    name: "Video Call Website",
    image: Video, // Use the imported image variable
    description: "A real-time video calling platform allowing users to connect instantly..",
    link: "https://arbaz-ahmad95.github.io/video-call-website/",
  },
  {
    name: "Restursnt Website",
    image: Resturant, // Correct image for this project
    description: "A fully functional resturant website.",
    link: "https://arbaz-ahmad95.github.io/Food_-Application/",
  },
  {
    name: "Spotify-Clone",
    image: Spotify, // Correct image for this project
    description: "A music streaming web app inspired by Spotify, offering a seamless UI for browsing, playing, and managing songs.",
    link: "https://arbaz-ahmad95.github.io/Spotify-clone/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <hr className="section-divider" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
