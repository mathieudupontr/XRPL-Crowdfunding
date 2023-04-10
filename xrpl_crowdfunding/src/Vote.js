import React, { useState } from "react";
import "./Vote.css";

const exampleCampaign = {
  title: "Example Campaign",
  description: "This is an example campaign for testing purposes",
  amountRaised: "$1000",
  backers: "50"
};

function Vote() {
  const [vote, setVote] = useState(null);

  const handleVote = (vote) => {
    setVote(vote);
  };

  return (
    <div className="vote-page">
      <div className="project-info">
        <h1>{exampleCampaign.title}</h1>
        <img src="https://source.unsplash.com/random/400x400" alt="Project" />
        <p>{exampleCampaign.description}</p>
        <p>Amount raised: {exampleCampaign.amountRaised}</p>
        <p>Backers: {exampleCampaign.backers}</p>
      </div>
      <div className="vote">
        {vote === null ? (
          <>
            <h2>Do you want to continue to fund this project?</h2>
            <div className="vote-options">
              <button
                className="vote-option vote-option-yes"
                onClick={() => handleVote(true)}
              >
                <div className="vote-option-circle">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <p>Yes, I want to continue</p>
              </button>
              <button
                className="vote-option vote-option-no"
                onClick={() => handleVote(false)}
              >
                <div className="vote-option-circle">
                  <i className="fas fa-thumbs-down"></i>
                </div>
                <p>No, I want to exit</p>
              </button>
            </div>
          </>
        ) : vote === true ? (
          <h2>Thank you for your support!</h2>
        ) : (
          <div className="claim-instructions">
            <h2>Instructions:</h2>
            <p>
              To claim your money, you should open your XRPL Wallet and enter the
              destination tag below. The funds will be immediately credited to
              your account.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vote;