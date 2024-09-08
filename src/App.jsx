import React, { useState } from 'react';
import './App.css';
import logo1 from './assets/logo1.png';
import landing from './assets/landing.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo1} alt="Company Logo" className="logo" />
          <h1 className="head">Jaldi Cart</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="navbar-button">
          <button className="start-shopping-button">Login Here</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`landing-content ${menuOpen ? 'content-shift' : ''}`}>
        <div className="landing-content-container">
          <h1>Welcome to Jaldi Cart!</h1>
          <p>
            Innovative solution designed to streamline the shopping experience by making checkout and billing faster, more efficient, and hassle-free. Our system leverages cutting-edge technology such as QR code scanning and mobile integration to provide a seamless shopping journey from start to finish.
          </p>
        </div>
        <button className="start-scanning">Start Shopping</button>
      </div>

      {/* Landing Image */}
      <div className={`image-container ${menuOpen ? 'content-shift' : ''}`}>
        <img src={landing} alt="Landing" className="logo1" />
      </div>
    </div>
  );
}

export default App;
