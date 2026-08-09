import React from 'react';

const skillsData = [
  { category: "Programming", items: ["C++", "Python", "JavaScript (ES6+)"] },
  { category: "Web Development", items: ["React", "Node.js", "HTML5", "CSS3", "Express"] },
  { category: "Databases", items: ["MongoDB", "Oracle", "SQL"] },
  { category: "Core Concepts", items: ["Data Structures", "OS", "DBMS"] }
];

function Skills() {
  return (
    <div className="skills-page">
      <h2 className="page-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-card card">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Skills;
