import React from 'react';
import './HowItWorks.css';
import image from './logic.jpg';

function HowItWorks() {
  return (
    <div className="container">
      <h1 className="title">How it works</h1>
      <div className="text">
        <p>Creating a campaign: Creators can create a campaign on the XRPL Crowdfunding platform and set a funding goal, funding duration, and milestones. The milestones are significant stages of the project with a description of what will be achieved at each stage.</p>
        <p>Backers' contribution: Once a campaign is live, backers can contribute to the campaign by sending XRP to the campaign's smart contract address. Backers can contribute any amount they want, and the smart contract will keep track of each contribution.</p>
        <p>Milestone votes: Once the funding goal is reached, the milestone process will start. At each milestone, there will be a democratic vote to ask backers if they want to continue or withdraw from the project. Backers can vote through the platform, and the vote will be calculated based on the total amount of XRP each backer has contributed to the campaign.</p>
        <p>Milestone release: If the vote is positive, the smart contract will release the funds required for the next milestone to the creator. If the vote is negative, the project will be considered as unsucessfull and the smart contract will refund all the backers for the remaining amount of XRP they have contributed to the campaign.</p>
        <p>Default votes: In the case where a backer does not vote, the smart contract will consider the vote as positive. This ensures that unintentionally missed votes do not affect the project's progress.</p>
        <p>Overall, the platform's automated funding process and democratic milestone voting system ensure transparency and fairness in crowdfunding.</p>
      </div>
      <img className="image" src={image} alt="existing_image" />
    </div>
  );
}

export default HowItWorks;