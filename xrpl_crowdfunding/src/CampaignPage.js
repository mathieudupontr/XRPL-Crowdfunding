import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './CampaignPage.css';
import Donate from './Donate';
import Vote from './Vote';

function CampaignPage() {
  return (
    <>
    <div className="campaign-page">
          <img
            src="https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="campaign"
          />
      <div className="campaign-header">
        <h1 className="campaign-title">Help fund our new XRPL project!</h1>
        <p className="campaign-description">We are raising funds to build a new decentralized application on the XRPL that will revolutionize the way we transact online. With your support, we can bring this project to life!</p>
        <div className="campaign-progress">
          <div className="campaign-progress-bar" style={{width: '75%'}}></div>
        </div>
        <div className="campaign-stats">
          <div className="campaign-stat">
            <h4 className="campaign-stat-label">Goal</h4>
            <p className="campaign-stat-value">50,000 XRP</p>
          </div>
          <div className="campaign-stat">
            <h4 className="campaign-stat-label">Raised</h4>
            <p className="campaign-stat-value">37,500 XRP</p>
          </div>
          <div className="campaign-stat">
            <h4 className="campaign-stat-label">Days left</h4>
            <p className="campaign-stat-value">14</p>
          </div>
          <div className="campaign-stat">
            <h4 className="campaign-stat-label">Ending Date</h4>
            <p className="campaign-stat-value">08/14/23</p>
          </div>
        </div>
          <Link to="/Donate">
            <button className="campaign-donate-button">Donate now</button>
          </Link>
          <Link to="/Vote">
            <button className="campaign-donate-button">Vote</button>
          </Link>
      </div>
      <div className="campaign-body">
        <h2 className="campaign-section-title">Our project</h2>
        <p className="campaign-section-description">Campaign Description</p>
        <h2 className="campaign-section-title">Why we need your support</h2>
        <p className="campaign-section-description">Campaign Description</p>
        <h2 className="campaign-section-title">Milestones</h2>
        <p className="campaign-section-description">Milestones</p>
      </div>
      </div>
        <Routes>
          <Route path="/donate" element={<Donate/>} />
          <Route path="/vote" element={<Vote/>} />
        </Routes>
      </>     
  )}

  export default CampaignPage;