import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/homepage" className="navbar-brand">XRPL Crowdfunding</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/homepage" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
