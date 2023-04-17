import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';


import Navbar from "./Navbar";
import CampaignPage from './CampaignPage';
import HomePage from "./HomePage";
import CreateCampaign from "./CreateCampaign";
<<<<<<< HEAD
import Vote from "./Vote";

function App() {
  return (
  <Vote/>
=======

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

function App() {
  return (
    <Navbar />
>>>>>>> 638e628140668f28460585931227784d6a708ba5
  );
}

export default App

