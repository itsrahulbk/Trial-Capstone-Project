import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon Restaurant</h1>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/reservations" className="reserve-button">Reserve Table</Link>
      </div>
      <img src="/images/hero-image.jpg" alt="Delicious food" className="hero-image" />
    </section>
  );
};

export default Hero;
