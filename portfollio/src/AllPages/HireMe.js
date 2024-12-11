import React from "react";

const HireMe = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Hire Me</h2>

      <div className="text-center mb-4">
        <a href="/Resume/RushikeshPatil_Resume.pdf" download="RushikeshPatil_Resume.pdf" className="btn btn-secondary">Download Resume </a>
      </div>

      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <strong>Name:</strong>
          <p>Rushikesh Nivrutti Patil</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Degree:</strong>
          <p>Bachelor of Technology</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Education:</strong>
          <p>Dr. Babasaheb Ambedkar Technological University</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Phone:</strong>
          <p>+91 7057749695</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Email:</strong>
          <p>rushikeshp9695@gmail.com</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Experience:</strong>
          <p>6-Month Internship</p>
          <p>Exprience More Than 6 Month</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Current Role:</strong>
          <p>Junior Software Developer at Machbizz Marketers pvt ltd pune</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Live Project:</strong>
          <p>Employee Salary Management System</p>
        </div>
        <div className="col-md-3 mb-4">
          <strong>Additional Skills:</strong>
          <p>Spring Boot, React.js</p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
