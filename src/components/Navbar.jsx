import React, { useState } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="brand-name">Golden Food</div>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Food Items</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
          </ul>
          <div className="auth-buttons">
            <button onClick={() => alert('Sign In clicked')}>Sign In</button>
            <button onClick={() => alert('Sign Up clicked')}>Sign Up</button>
          </div>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
