import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import { UserContext } from "./UserProvider";
import { viewCampaigns } from "./util/apiRequests.mjs";

function HomePage() {
  const { user } = useContext(UserContext);
  const [campaigns, setCampaigns] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    viewCampaigns().then((campaigns) => {
      setCampaigns(campaigns)
    })
  }, [])

  return (
    <>
    <div className="HomePage">
      <div className="hero-container">
        <h1>Help fund your favorite projects</h1>
        <p>Join the community and contribute to innovative ideas</p>
        <Link to="/create-campaign">
          <button className="btn">Create Campaign</button>
        </Link>
      </div>
      <div className="projects-container">
        {campaigns && campaigns.map((campaign) => (
          <div key={campaign.id} className="project-card">
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
            />
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
            <Link to={`/campaign/${campaign.id}`}>
              <button className="btn" >Contribute</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default HomePage;