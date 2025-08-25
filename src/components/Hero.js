import React from 'react';

const Hero = ({ heroTitle }) => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="assets/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1 id="hero-title">{heroTitle}</h1>
      </div>
      <div className="exp">
        <a href="#services" className="scroll-down">↓</a>
        <p className="scroll">Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Hero;
