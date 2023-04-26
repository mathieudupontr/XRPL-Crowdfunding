import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCampaignById } from "./util/apiRequests.mjs";
import { convertDropsToXrpFormat } from "./util/xrplUtil.js";
import "./Vote.css";

function Vote() {
  const [vote, setVote] = useState(null);
  const [campaign, setCampaign] = useState();
  const { campaignId } = useParams(); // Get the campaign ID from the URL

  useEffect(() => {
    getCampaignById(campaignId).then((campaignResponse) => {
      setCampaign(campaignResponse)
    })
  }, [])

  const handleVote = (vote) => {
    setVote(vote);
  };

  return (
    <div className="vote-page">
      {
        campaign &&
        (
          <>
          <div className="project-info">
            <h1>{campaign.title}</h1>
            <img src={campaign.imageUrl} alt={campaign.title} />
            <p>{campaign.description}</p>
            <p>Amount raised: {convertDropsToXrpFormat(campaign.totalAmountRaisedInDrops)}</p>
            <p>Backers: {campaign.backers.length}</p>
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
        </>
      )
    }
    </div>
  );
}

export default Vote;