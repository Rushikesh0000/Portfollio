import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./AllPages/HomePage";
import About from "./AllPages/About";
import HireMe from "./AllPages/HireMe";
import Projects from "./AllPages/Projects";
import Skills from "./AllPages/Skills";
import Experience from "./AllPages/Experience";
import Contact from "./AllPages/Contact";
import logo from './Logo/Logos.png'; // Importing the logo
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/experience">Experience</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hireme">
                    <button className="btn btn-primary">Hire Me</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
