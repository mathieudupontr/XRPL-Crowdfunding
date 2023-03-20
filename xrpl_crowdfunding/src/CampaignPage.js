import React from 'react';
import './CampaignPage.css';

function CampaignPage() {
  return (
    <div className="campaign-page">
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
        </div>
        <button className="campaign-donate-button">Donate now</button>
      </div>
      <div className="campaign-body">
        <h2 className="campaign-section-title">Our project</h2>
        <p className="campaign-section-description">Campaign Description</p>
        <h2 className="campaign-section-title">Why we need your support</h2>
        <p className="campaign-section-description">Campaign Description</p>
        <h2 className="campaign-section-title">Our team</h2>
        <div className="campaign-team">
          <div className="campaign-team-member">
          </div>
          </div>
          </div>
          </div>
  )}

  export default CampaignPage;