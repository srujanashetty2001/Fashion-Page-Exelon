import React from 'react';
import './Hero.css';
import modelImage from '../fashion-model.jpg'; // Add the image here

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-container">
        <img src={modelImage} alt="Fashion Model" />
        <div className="controls">
          <button className="Carosel-btn">&lt;</button>
          <button className="Carosel-btn"><i class="bi bi-eye"></i></button>
          <button className="order-btn">Order Now</button>
          <button className="Carosel-btn"><i class="bi bi-bag"></i></button>
          <button className="Carosel-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
