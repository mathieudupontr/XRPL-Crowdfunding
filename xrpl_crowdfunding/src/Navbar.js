import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">XRPL Crowdfunding</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/how-it-works" className="nav-link">How it works</a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;