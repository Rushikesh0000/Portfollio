import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../AllPages/About";
import Projects from "../AllPages/Projects"; 
import Skills from "../AllPages/Skills"; 
import Contact from "../AllPages/Contact"; 

const HomePage = () => 
{
  return (
    <div> 
      <div id="home" className="home-section container text-center mt-4">
        <h1>WELCOME TO MY WORLD</h1>
        <p className="lead">
          I am <strong>Rushikesh Patil</strong>
        </p>  
        <p className="lead">Java Full-Stack Developer</p>
        <a 
          href="/Resume/RushikeshPatil_Resume.pdf" 
          download="RushikeshPatil_Resume.pdf" 
          className="btn btn-primary me-2"
        >
          Download CV
        </a>
        <a  href="https://www.linkedin.com/in/rushikesh-patil12"  target="_blank" rel="noopener noreferrer"   className="btn btn-secondary" > 
        Visit LinkedIn </a>
      </div>

      <div id="about" className="mt-5">
        <About />
      </div>

      <div id="Projects" className="mt-5">
        <Projects /> 
      </div>

      <div id="Skills" className="mt-5">
        <Skills /> 
      </div>

      <div id="Contact" className="mt-5">
        <Contact /> 
      </div>
    </div>
  );
};

export default HomePage;
