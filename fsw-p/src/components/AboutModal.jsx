import React from 'react';
import './AboutModal.css';

const AboutModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>About Me</h2>
        <p>As a dedicated Computer Science undergraduate with a passion for technology, I am committed to
 leveraging my skills in programming, web development, and problem-solving to contribute to
 innovative projects. With hands-on experience in developing web-based applications and a keen
 interest in artificial intelligence, I am eager to collaborate with teams and tackle challenging
 problems in the field of technology. Seeking opportunities to further enhance my skills and make a
 meaningful impact in the tech industry.</p>
        <button className="btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AboutModal;
