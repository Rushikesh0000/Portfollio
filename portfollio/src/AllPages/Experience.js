import React, { useState } from 'react';
import '../CSS/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="experience-container">
      <ul className="nav nav-pills mb-4 justify-content-center">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')} >
            Experience
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')} >
            Education
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div className="tab-pane fade show active">
            <ul className="experience-list">
              <li>
                <strong>Junior Software Developer</strong> - Machbizz Marketing Pvt Ltd, Pune
                <span className="date">Nov 2024 - Present</span>
              </li>
              <li>
                <strong>Software Developer</strong> - G-Soft Solution Pvt Ltd, Pune
                <span className="date">Jan 2024 - Nov 2024</span>
              </li>
              <li>
                <strong>Trainee Engineer</strong> - Bajaj Auto Pvt Ltd, Valuj (Ch.Sambhajinagar)
                <span className="date">2019 - 2020</span>
              </li>
              <li>
              <strong>Course Completion: Java Fullstack Development</strong>
              <span className="date">June 2023 - Dec 2023</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="tab-pane fade show active">
            <ul className="education-list">
              <li>
                <strong>Electronics and Telecommunication (BTECH)</strong> - Dr. Babasaheb Ambedkar
                Technological, Lonere
                <span className="date">2023 (82%)</span>
              </li>
              <li>
                <strong>Diploma - Electronics and Telecommunication</strong> - Ch. Shivaji University, Kolhapur
                <span className="date">2019 (70%)</span>
              </li>
              <li>
                <strong>10th</strong> - Maharashtra State Board
                <span className="date">2016 (87.40%)</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;



