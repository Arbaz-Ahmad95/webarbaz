import React from "react";
import "./CollegeDetails.css";

const colleges = [
  {
    name: "Maulana Azad National Urdu University, Hyderabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj8Rg0rSw_Pam1E0vJGlzWj1cR4fHsUmbTA&s", // Replace with actual image path
    course: "Diploma in Computer Science",
    cgpa: "9.35",
    passout: "2023",
    degreePdf: "https://drive.google.com/file/d/1QtTie-7hWG4bp6MwCr6B6B8jaqwLED2d/view?usp=drivesdk", // Replace with actual PDF path
    website: "https://manuu.edu.in/",
  },
  {
    name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    image: "https://static.toiimg.com/thumb/msid-108381233,width-1280,height-720,resizemode-72/108381233.jpg", // Replace with actual image path
    course: "B.Tech in Computer Science",
    cgpa: "Pursuing",
    passout: "2026",
    degreePdf: "#", // Replace with actual PDF path
    website: "https://www.rgpv.ac.in/",
  },
];

const CollegeDetails = () => {
  return (
    <section id="college" className="college-section">
      <h2 className="section-title">College Details</h2>
      <hr className="section-divider" />
      <div className="college-container">
        {colleges.map((college, index) => (
          <div key={index} className="college-card">
            <img src={college.image} alt={college.name} className="college-img" />
            <div className="college-info">
              <h3>{college.name}</h3>
              <p><strong>Course:</strong> {college.course}</p>
              <p><strong>CGPA:</strong> {college.cgpa}</p>
              <p><strong>Passout Year:</strong> {college.passout}</p>
              <div className="college-links">
                <a href={college.degreePdf} download className="btn btn-college" target="_blank" >Download Degree</a>
                <a href={college.website} target="_blank" rel="noopener noreferrer" className="btn btn btn-college"  >Visit Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeDetails;
