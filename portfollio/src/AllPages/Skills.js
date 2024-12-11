import React from "react";
import "../CSS/skills.css"; 

const Skills = () => 
  {
  const skills = 
  [
    { category: "Programming Languages", items: ["Java","C Sharp","CPP","JavaScript", "HTML", "CSS"] },
    { category: "Frameworks & Libraries", items: ["React", "Spring Boot","Dot Net", "Bootstrap"] },
    { category: "Databases", items: ["MySQL"] },
    { category: "Tools & Platforms", items: ["Git", "Eclipse", "Postman","visual studio code","visual studio"] },
  ];

  return (
    <section className="container skills-section mt-5">
     <center> <h2 className="btn btn-danger mt-4">Skills</h2></center>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            <ul className="skills-list">
              {skillCategory.items.map((item, idx) => (
                <li key={idx} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
