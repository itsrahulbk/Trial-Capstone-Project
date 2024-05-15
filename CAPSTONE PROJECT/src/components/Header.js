import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <picture>
        <source srcSet="/images/logo-dark.png" media="(prefers-color-scheme: dark)" />
        <img src="/images/logo-light.png" alt="logo" className="App-logo" />
      </picture>
      <nav>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
