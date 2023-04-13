import React from 'react';
import './Donate.css';

function Donate() {
  return (
    <div className="campaign-page">
        <div className="campaign-header">
        <h1 className="campaign-title">Donate Now</h1>
        </div>
          <img
            src="https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
      <div className="campaign-header">
        <h1 className="campaign-title">Help fund our new XRPL project!</h1>
        <p className="campaign-description">Instructions:</p>
        <p className="campaign-description">Please send us the amount you want to the following XRP address to be part of this project: rDzTZxa7NwD9vmNf5dvTbW4FQDNSRsfPv6</p>
        <p className="campaign-description">Please add the following destination tag with your payment: #187</p>
        <p className="campaign-description">Thank you for your contribution to this campaign!</p>
      </div>
    </div>
          
  )}

  export default Donate;