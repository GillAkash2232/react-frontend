// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo1 from './assets/logo1.png';
import landing from './assets/landing.png';
// import Login from './components/Login';
import About from './components/About'; // Import About component
import Contact from './components/Contact';
// import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="landing-page">
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo1} alt="Company Logo" className="logo" />
            <h1 className="head">Jaldi Cart</h1>
          </div>

          {/* Navbar Links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> {/* About Page Link */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* <div className="navbar-button">
          
              <button className="start-shopping-button">Login Here</button>
            
          </div> */}

          <div className="menu-toggle">
            &#9776;
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element={<About  />} /> {/* Passing filePath */}
          <Route path="/contact" element={<Contact  />} /> {/* Passing filePath */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="landing-content-wrapper-flex">
      <div className="landing-content">
        <div className="landing-content-container">
          <h1>Welcome to Jaldi Cart!</h1>
          <p>
            Innovative solution designed to streamline the shopping experience by making checkout and billing faster, more efficient, and hassle-free. Our system leverages cutting-edge technology such as QR code scanning and mobile integration to provide a seamless shopping journey from start to finish.
          </p>
          <button className="start-scanning">Start Shopping</button>
        </div>
      </div>

      <div className="image-container">
        <img src={landing} alt="Landing" className="logo1" />
      </div>
    </div>
  );
}

export default App;
