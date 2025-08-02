import React from 'react';
import './Hero.css';

const Hero = () => (
  <div className="hero-box">
    <div className="hero-box__top">
      <span className="hero-box__name">SELIM.IO</span>
      <nav className="hero-box__nav">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
    <div className="hero-box__center">
      <div className="hero-box__img-stack">
        <div className="hero-box__img hero-box__img--deep"></div>
        <img src="/assets/images/selim7.jpeg" alt="Selim Majekodunmi 2" className="hero-box__img hero-box__img--back" />
        <img src="/assets/images/selim5.jpeg" alt="Selim Majekodunmi" className="hero-box__img hero-box__img--front" />
      </div>
      <div className="hero-box__main-text">
        <span>HELLO, I’M</span>
        <span>MAJEKODUNMI</span>
        <span>SELIM</span>
      </div>
    </div>
    <div className="hero-box__bottom">
      <span className="hero-box__name hero-box__name--bottom">SELIM MAJEKODUNMI</span>
      <span className="hero-box__subtitle">A WEB DEVELOPER BASED IN BIRMINGHAM</span>
      <span className="hero-box__copyright">©2025</span>
    </div>
  </div>
);

export default Hero; 