import React, { useState } from 'react';
import Navbar from "./Navbar";
import './CreateCampaign.css';

function CreateCampaign() {
  const [milestones, setMilestones] = useState([]);

  const addMilestoneField = () => {
    setMilestones([...milestones, { date: '', description: '' }]);
  };

  const handleMilestoneDateChange = (index, event) => {
    const newMilestones = [...milestones];
    newMilestones[index].date = event.target.value;
    setMilestones(newMilestones);
  };

  const handleMilestoneDescriptionChange = (index, event) => {
    const newMilestones = [...milestones];
    newMilestones[index].description = event.target.value;
    setMilestones(newMilestones);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with form data, such as sending it to a server
  };

  const milestoneFields = milestones.map((milestone, index) => (
    <div key={index} className="milestone-field-container">
      <label htmlFor={`milestoneDate-${index}`}>Milestone Date</label>
      <input
        type="date"
        id={`milestoneDate-${index}`}
        name={`milestoneDate-${index}`}
        value={milestone.date}
        onChange={(event) => handleMilestoneDateChange(index, event)}
      />
      <label htmlFor={`milestoneDescription-${index}`}>Milestone Description</label>
      <textarea
        id={`milestoneDescription-${index}`}
        name={`milestoneDescription-${index}`}
        value={milestone.description}
        onChange={(event) => handleMilestoneDescriptionChange(index, event)}
        rows="5"
      />
    </div>
  ));

  return (
    <div className="container">
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field-container">
          <label htmlFor="projectTitle">Project Title</label>
          <input type="text" id="projectTitle" name="projectTitle" required />
        </div>
        <div className="form-field-container">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="10" required />
        </div>
        <div className="form-field-container">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" required />
        </div>
        <div className="form-field-container">
          <label htmlFor="amountToRaise">Amount to Raise</label>
          <input type="number" id="amountToRaise" name="amountToRaise" required />
        </div>
        <div className="form-field-container">
          <label htmlFor="pictures">Pictures</label>
          <input type="file" id="pictures" name="pictures" />
        </div>
        <div className="form-field-container">
          <label htmlFor="files">Files</label>
          <input type="file" id="files" name="files" />
        </div>
        <h3>Choose Your Milestones</h3>
        {milestoneFields}
        <button type="button" onClick={addMilestoneField}>Add Milestone</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCampaign;
