import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="navbar">
    <div className="nav-logo">BlessyK.dev</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
      <Link to="view-projects" className="nav-cta-button">View Projects</Link>
    </div>
  </nav>
);

export default Header;
