import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div> 
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-subtitle">Discover amazing things here.</p>
        <button className="hero-button">Explore</button>
      </div>
    </div>
  );
};

export default Hero;
