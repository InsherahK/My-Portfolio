import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Tamkeen',
    description: 'Web-based e-commerce application focused on women empowerment.',
    image: 'tamk.jpeg'
  },
  {
    name: 'IntelliVerse',
    description: 'A self-assessment tool based on Howard Gardners theory of multiple intelligences for people seeking career guidance or unsure about educational paths.',
    image: 'intelli.png'
  },
  {
    name: ' SoHo ',
    description: 'An automated system for a SoHo (Small Office, Home Office) using Cisco Packet Tracer',
    image: 'Soho.PNG'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
