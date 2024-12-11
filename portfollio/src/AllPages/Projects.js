import React from "react";
import "../CSS/Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="container my-5 ">
    <center> <h2 className="text-center mt-5 btn btn-danger">Projects</h2></center>

        <section id="employeeSalaryManagement" className="my-5">
          <h3>Employee Salary Management System</h3>
          <p>
            A web-based application designed to automate salary calculations, track employee attendance, and generate salary slips.
            The project features both backend and frontend integrations, using Java (Spring Boot) for backend and React for the frontend.
          </p>
          <p>Technologies used: Java, Spring Boot, React, MySQL, Bootstrap</p>
          <a
            href="https://codest.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Live Project
          </a>
        </section>

        <section id="employeeManagement" className="my-5">
          <h3>Employee Management System</h3>
          <p>
            This project provides an interface to manage employee data, including personal details, attendance, and salary records.
            The backend is developed with Spring Boot, and the frontend is a React application, providing a seamless and user-friendly experience.
          </p>
          <p>Technologies used: Java, Spring Boot, React, MySQL, Bootstrap</p>
        </section>

        <section id="libraryManagement" className="my-5">
          <h3>Library Management System</h3>
          <p>
            A system for managing books in a library, tracking book availability, issuing books, and keeping records of transactions.
            It uses Java (Spring Boot) for backend development and React for the frontend interface.
          </p>
          <p>Technologies used: Java, Spring Boot, React, MySQL</p>
        </section>

        {/* Completed Projects Section with Video */}
        <section id="projects" className="projects_wrapper">
          <div >
            <h2 className="text-uppercase text-center mb-5">Completed Projects</h2>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 mb-4">
                <div className="project-card text-center">
                  <video controls className="img-fluid" alt="Project Video">
                    <source src="images/ProjectVideo/video1062052919.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="project-details">
                    <h4>Employee Salary Management System</h4>
                    <p>A comprehensive system for managing employee salaries.</p>
                    <div className="technologies">
                      <i className="fab fa-java"></i>
                      <i className="fab fa-html5"></i>
                      <i className="fab fa-css3-alt"></i>
                      <i className="fab fa-js"></i>
                    </div>

                    <div className="project-actions mt-3">
                      <a
                        href="https://codest.in"
                        className="btn btn-success"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <div> </div>
                      <a href="https://github.com/Rushikesh0000/web-employee-salary-management.git" className="btn btn-primary" target="_blank" rel="noopener noreferrer" >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
