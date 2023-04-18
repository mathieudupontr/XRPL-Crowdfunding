import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./HomePage.css";
import CampaignPage from "./CampaignPage";
import CreateCampaign from "./CreateCampaign";
import { viewCampaigns } from "./util/apiRequests.mjs";

function HomePage() {
  const [campaigns, setCampaigns] = useState()

  useEffect(() => {
    viewCampaigns().then((campaigns) => {
      setCampaigns(campaigns)
      console.log(campaigns)
    })
  }, [])

  return (
    <>
    <div className="HomePage">
      <div className="hero-container">
        <h1>Help fund your favorite projects</h1>
        <p>Join the community and contribute to innovative ideas</p>
        <Link to="/CreateCampaign">
        <button className="btn">Create Campaign</button>
        </Link>
      </div>
      <div className="projects-container">
        {campaigns && campaigns.map((campaign) => (
          <div key={campaign.id} className="project-card">
            <img
              src="https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt={campaign.title}
            />
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
            <Link to="/CampaignPage">
              <button className="btn" >Contribute</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Routes>
      <Route path="/campaignpage" element={<CampaignPage/>} />
      <Route path="/createcampaign" element={<CreateCampaign/>} />
    </Routes>
  </>
  );
}

export default HomePage;