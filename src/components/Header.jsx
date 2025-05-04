import React, { useState } from 'react';

export function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-links ${navActive ? 'active' : ''}`}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}