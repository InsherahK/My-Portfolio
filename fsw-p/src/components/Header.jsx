import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Insherah Khan</div>
        <ul className="nav-links">
          <li><a href="#introduction">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
