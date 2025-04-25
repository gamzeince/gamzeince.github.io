import React, { useState, useEffect } from 'react';

export default function Hero() {
  const fullText = '< FullStackDeveloper />';
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(prev => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{text}</h1>
        <p className="hero-subtitle">
        Hi, I’m Gamze—a Full-Stack Software Developer specializing in C#, Python, and SQL.
        </p>
        <a href="#about" className="btn-primary">
          About Me<span className="arrow">→</span>
        </a>
      </div>
      <div className="hero-decor">
        <span className="shape shape-1" />
        <span className="shape shape-2" />
        <span className="shape shape-3" />
      </div>
    </section>
  );
}
