import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCampaignById } from "./util/apiRequests.mjs";
import { convertDropsToXrpFormat } from "./util/xrplUtil.js";
import { convertUnixSecondsToDate } from "./util/dateUtil.js";
import './CampaignPage.css';

function CampaignPage() {
  const [campaign, setCampaign] = useState();
  const { campaignId } = useParams(); // Get the campaign ID from the URL
  
  useEffect(() => {
    getCampaignById(campaignId).then((campaignResponse) => {
      setCampaign(campaignResponse)
    })
  }, [])

  return (
    <div className="campaign-page">
      {
        campaign &&
        (
          <div key={campaign.id}> 
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
          />
        <div className="campaign-header">
          <h1 className="campaign-title">{campaign.title}</h1>
          <p className="campaign-description">{campaign.description}</p>
          <h2 className="campaign-state">Status: {campaign.state}</h2>
          <div className="campaign-progress">
          <div className="campaign-progress-bar" style={{width: (campaign.totalAmountRaisedInDrops/campaign.fundRaiseGoalInDrops)*100+'%'}}></div>
        </div>
          <div className="campaign-stats">
            <div className="campaign-stat">
              <h4 className="campaign-stat-label">Goal</h4>
              <p className="campaign-stat-value">{convertDropsToXrpFormat(campaign.fundRaiseGoalInDrops)}</p>
            </div>
            <div className="campaign-stat">
              <h4 className="campaign-stat-label">Raised</h4>
              <p className="campaign-stat-value">{convertDropsToXrpFormat(campaign.totalAmountRaisedInDrops)}</p>
            </div>
            <div className="campaign-stat">
              <h4 className="campaign-stat-label">Days left</h4>
              <p className="campaign-stat-value">14</p>
            </div>
            <div className="campaign-stat">
              <h4 className="campaign-stat-label">Ending Date</h4>
              <p className="campaign-stat-value">{convertUnixSecondsToDate(campaign.fundRaiseEndDateInUnixSeconds)}</p>
            </div>
          </div>
            <Link to={`/campaign/${campaign.id}/donate`}>
              <button className="campaign-donate-button">Donate now</button>
            </Link>
            <Link to={`/campaign/${campaign.id}/vote`}>
              <button className="campaign-donate-button">Vote</button>
            </Link>
        </div>
        <div className="campaign-body">
          <h2 className="campaign-section-title">Our project</h2>
          <p className="campaign-section-description">{campaign.description}</p>
          <h2 className="campaign-section-title">Milestones</h2>
          {campaign.milestones.map((milestone, index) => (
            <div key={index} className="campaign-milestone campaign-section-description">
              <h3 className="campaign-milestone-title">{index + 1}. {milestone.title}</h3>
              <p className="campaign-milestone-description">{milestone.description}</p>
              <div className="campaign-milestone-stats">
                <div className="campaign-milestone-stat">
                  <h4 className="campaign-milestone-stat-label">End Date</h4>
                  <p className="campaign-milestone-stat-value">{convertUnixSecondsToDate(milestone.endDateInUnixSeconds)}</p>
                </div>
                <div className="campaign-milestone-stat">
                  <h4 className="campaign-milestone-stat-label">Payout Percent</h4>
                  <p className="campaign-milestone-stat-value">{milestone.payoutPercent}%</p>
                </div>
                <div className="campaign-milestone-stat">
                  <h4 className="campaign-milestone-stat-label">Status</h4>
                  <p className="campaign-milestone-stat-value">{milestone.state}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        )}
    </div>
  )}

  export default CampaignPage;