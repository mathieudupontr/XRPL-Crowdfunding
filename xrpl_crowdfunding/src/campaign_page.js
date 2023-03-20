import React from 'react';
import './campaign_page.css';

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
            <p className="campaign-stat-value">$50,000</p>
          </div>
          <div className="campaign-stat">
            <h4 className="campaign-stat-label">Raised</h4>
            <p className="campaign-stat-value">$37,500</p>
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
        <p className="campaign-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar lacus eget elit fermentum, vel sollicitudin orci commodo. Sed in ante quis ex aliquam rhoncus. Nam id massa id nibh gravida mollis. Nullam quis lectus metus. Fusce non sapien non odio feugiat venenatis. Donec vitae nisl auctor, interdum velit eu, pellentesque mi. Curabitur sit amet nisl eu felis tincidunt hendrerit. Nullam ornare varius arcu, vel interdum tellus consectetur ac. Donec venenatis tellus eu nulla semper ullamcorper.</p>
        <h2 className="campaign-section-title">Why we need your support</h2>
        <p className="campaign-section-description">Suspendisse sagittis, metus nec pharetra maximus, orci eros gravida odio, a aliquet risus quam at risus. Integer vel lacinia massa, vitae consectetur turpis. Sed elementum sodales enim, vitae pellentesque arcu accumsan at. Aliquam erat volutpat. Nunc commodo bibendum mi a ultrices. Aliquam consequat leo eu sagittis aliquam. Donec hendrerit dolor vel suscipit ultricies. Phasellus hendrerit, magna quis pharetra facilisis, justo nibh bibendum mi, eu hendrerit ante orci sed turpis. Nulla facilisi. Aliquam ac velit euismod, ornare ipsum ut, viverra odio. Sed sed erat luctus, congue elit sed, pharetra odio.</p>
        <h2 className="campaign-section-title">Our team</h2>
        <div className="campaign-team">
          <div className="campaign-team-member">
          </div>
          </div>
          </div>
          </div>
  )}

  export default CampaignPage;