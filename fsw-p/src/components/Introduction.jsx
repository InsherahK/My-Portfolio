import React from 'react';
import './Introduction.css';

const Introduction = ({ openModal }) => {
  return (
    <section id="introduction" className="intro">
      <img src="/bg.png" alt="Background" className="background-image" />
      <div className="intro-content">
        <img src="/av.png" alt="Profile" className="profile-pic" />
        <h1>Insherah Khan</h1>
        <p>Tech Enthusiast and CS undergrad.</p>
        <button className="btn" onClick={openModal}>About Me</button>
      </div>
    </section>
  );
};

export default Introduction;
