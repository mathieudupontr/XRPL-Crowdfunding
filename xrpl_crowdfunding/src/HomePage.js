import React from "react";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./HomePage.css";
import CampaignPage from "./CampaignPage";
import CreateCampaign from "./CreateCampaign";

function HomePage() {
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
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Project 1"
          />
          <h2>Project 1</h2>
          <p>Project Description</p>
          <Link to="/CampaignPage">
          <button className="btn" >Contribute</button>
          </Link>
        </div>
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80"
            alt="Project 2"
          />
          <h2>Project 2</h2>
          <p>Project Description</p>
          <Link to="/CampaignPage">
          <button className="btn" >Contribute</button>
          </Link>
        </div>
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Project 3"
          />
          <h2>Project 3</h2>
          <p>Project Description</p>
          <Link to="/CampaignPage">
          <button className="btn" >Contribute</button>
          </Link>
        </div>
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