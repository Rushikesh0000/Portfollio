import React from "react";
import "../index.css"; 

export default function About()
 {
  return (
    <div id="about" className="about-container container mt-5">
      <h2 className="text-center">About Me</h2>
      <p className="text-center">
        <strong>Hello, I'm Rushikesh Patil,</strong>
        <br />
        ☕ Java Full-Stack Developer | .NET Developer
        <br />
        ☕ Java Developer | 🌐 Full-Stack Solutions
        <br />
        <br />
        Welcome to my world of coding and creativity! As a Java Full-Stack
        Developer, I specialize in building comprehensive web applications from
        front-end design to back-end development.
        <br />
        <br />
        Passionate about creating innovative solutions, I focus on delivering 
        high-quality work while continuously improving my skills.
        <br />
        <br />
        Currently, I am working as a{" "}
        <span className="experience">Junior Software Developer</span> at
        Machbizz Marketing Pvt Ltd, Pune, and have also completed an internship.
        <br />
        <br />
        Additionally, I worked as a{" "}
        <span className="experience">Java Fullstack Developer</span> at G-Soft 
        Solution Pvt Ltd from January 2024 to November 2024.
        <br />
        <br />
        I have worked on a{" "}
        <span className="project-name">
          live project: Employee Salary Management System
        </span>
        , which is now available at{" "}
        <a href="https://codest.in" target="_blank" rel="noopener noreferrer" className="project-name">codest.in</a>
        </p>
    </div>
  );
}
