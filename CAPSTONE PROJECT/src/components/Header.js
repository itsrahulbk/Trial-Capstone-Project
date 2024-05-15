import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo1.png" alt="Little Lemon Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#book">Book</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
