import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampaignById } from "./util/apiRequests.mjs";
import './Donate.css';

function Donate() {
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
          <>
            <div className="campaign-header">
              <h1 className="campaign-title">Donate Now</h1>
            </div>
            <img src={campaign.imageUrl} alt={campaign.title} />
            <div className="campaign-header">
              <h1 className="campaign-title">Help fund our new XRPL project!</h1>
              <p className="campaign-description">Instructions:</p>
              <p className="campaign-description">Please send us the amount you want to the following XRP address to be part of this project: rDzTZxa7NwD9vmNf5dvTbW4FQDNSRsfPv6</p>
              <p className="campaign-description">Please add the following destination tag with your payment: {campaignId}</p>
              <p className="campaign-description">Thank you for your contribution to this campaign!</p>
            </div>
          </>
        )
      }
    </div>
  )}

  export default Donate;