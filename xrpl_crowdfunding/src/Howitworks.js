import React from 'react';
import './HowItWorks.css';
import image from './howitworks_visual.png';

function Howitworks() {
  return (
    <div className="container">
      <h1 className="title">How It Works</h1>
      <img className="image" src={image} alt="existing_image" />
      <div className="text">
        <p>• Creators set funding goals, duration, and milestones on XRPL Crowdfunding.</p>
        <p>• Backers can contribute any amount to the smart contract address and their contributions are tracked.</p>
        <p>• When the funding goal is reached, the milestone process starts, and backers can vote on each milestone.</p>
        <p>• Milestone votes are conducted democratically through the platform and are calculated based on the total amount of XRP each backer has contributed to the campaign.</p>
        <p>• If the vote is positive, the smart contract releases the funds required for the next milestone to the creator.</p>
        <p>• If the vote is negative, the project is considered unsuccessful, and the smart contract will refund all the backers for the remaining amount of XRP they have contributed to the campaign.</p>
        <p>• Missed votes count as positive to ensure progress.</p>
      </div>
    </div>
  );
}

export default Howitworks;