// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-container">
        {}
        <div className="footer-top">
          <div className="footer-contact">
            <strong>Contact:</strong>{' '}
            <a href="mailto:gamzeince@outlook.com.tr">
              gamzeince@outlook.com.tr
            </a>
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/gamzeince"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-icon" />
              <span>GitHub profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gamze-ince"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-icon" />
              <span>LinkedIn profile</span>
            </a>
          </div>
        </div>

        {}
        <div className="footer-bottom">
          <small>© {year} Gamze İnce</small>
        </div>
      </div>
    </footer>
  );
}
