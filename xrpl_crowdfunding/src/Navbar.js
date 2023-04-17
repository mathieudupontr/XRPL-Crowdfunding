import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CampaignPage from './CampaignPage';
import CreateCampaign from './CreateCampaign';
import Howitworks from './Howitworks';
import Donate from './Donate';
import Vote from './Vote';



function Navbar() {
  return (
    <>
    <nav className="navbar">
      <Link to="/homepage" className="navbar-brand">XRPL Crowdfunding</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/homepage" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/howitworks" className="nav-link">How it works</Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/campaignpage" element={<CampaignPage/>} />
      <Route path="/createcampaign" element={<CreateCampaign/>} />
      <Route path="/howitworks" element={<Howitworks/>} />
      <Route path="/donate" element={<Donate/>} />
      <Route path="/vote" element={<Vote/>} />
    </Routes>
    </>
  );
}

export default Navbar;
