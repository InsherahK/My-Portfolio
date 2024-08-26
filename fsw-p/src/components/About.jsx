import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup} className="about-btn">About Me</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            <h2>About Me</h2>
            <p>Hi, I'm Insherah Khan</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
