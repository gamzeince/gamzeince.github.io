import React from 'react';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
   
        </nav>
        <SocialLinks />
      </div>
    </header>
  );
}