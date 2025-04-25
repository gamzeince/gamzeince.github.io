import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/gamze-ince" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/gamzeince" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}