import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';


import Navbar from "./Navbar";
import CampaignPage from './CampaignPage';
import HomePage from "./HomePage";
import CreateCampaign from "./CreateCampaign";

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

function App() {
  return (
    <Navbar />
  );
}

export default App

