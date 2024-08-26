import React from 'react';
import './Skills.css'; // Import CSS file for styling

const Skills = () => {
  return (
    <section id="skills" className="skills-section" >
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <span>HTML</span>
          <progress value="90" max="100"></progress>
        </div>
        <div className="skill">
          <span>CSS</span>
          <progress value="80" max="100"></progress>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <progress value="85" max="100"></progress>
        </div>
        <div className="skill">
          <span>React</span>
          <progress value="75" max="100"></progress>
        </div>
        <div className="skill">
          <span>Node.js</span>
          <progress value="70" max="100"></progress>
        </div>
        <div className="skill">
          <span>Flutter</span>
          <progress value="85" max="100"></progress>
        </div>
        <div className="skill">
          <span>MongoDB</span>
          <progress value="60" max="100"></progress>
        </div>
        <div className="skill">
          <span>Python</span>
          <progress value="80" max="100"></progress>
        </div>
        <div className="skill">
          <span>SQL</span>
          <progress value="75" max="100"></progress>
        </div>
        <div className="skill">
          <span>Git</span>
          <progress value="85" max="100"></progress>
        </div>
        <div className="skill">
          <span>.NET</span>
          <progress value="55" max="100"></progress>
        </div>
        <div className="skill">
          <span>C#</span>
          <progress value="70" max="100"></progress>
        </div>
    
      </div>
    </section>
  );
};

export default Skills;