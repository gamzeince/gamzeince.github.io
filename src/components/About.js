
import React from 'react';
import profile from '../assets/gamzeince.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img src={profile} alt="Gamze İnce" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="section-title">Hello, I’m Gamze</h2>
          <p>
            I graduated from Beykent University. I’m a C# Desktop Developer with experience in Python projects. Currently, I’m learning React Native to expand my skill set, and I have a strong interest in AI.
          </p>
          <p>
  Outside of work, I dive into swimming, explore new running routes, and tinker with emerging technologies.
  Let’s connect and bring your next big idea to life!
</p>

        </div>
      </div>
    </section>
  );
}
