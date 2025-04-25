
import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiAdobexd,
  SiGithub,
  SiDotnet,
  SiReact
} from 'react-icons/si';
import { FaDatabase, FaDesktop } from 'react-icons/fa';

const skills = [
  { icon: SiHtml5,      label: 'HTML5' },
  { icon: SiCss3,       label: 'CSS3' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: FaDesktop,    label: 'C#' },
  { icon: SiDotnet,     label: '.NET' },
  { icon: FaDatabase,   label: 'SQL' },
  { icon: SiPython,     label: 'Python' },
 
  { icon: SiAdobexd,    label: 'Adobe XD' },
  { icon: SiGithub,     label: 'GitHub' },

  { icon: SiReact,      label: 'React' },
  { icon: null,         label: 'React Native' }  
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skillset</h2>
        <div className="skills-grid">
          {skills.map(({ icon: Icon, label }) => (
            <div key={label} className="skill-pill">
              {Icon && <Icon className="skill-icon" />}
              <span className="skill-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
