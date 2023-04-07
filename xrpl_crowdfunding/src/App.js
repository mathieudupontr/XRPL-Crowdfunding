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
    <>
      <HomePage />
      <div className="container">
        <Routes>
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/campaignpage" element={<CampaignPage/>} />
          <Route path="/createcampaign" element={<CreateCampaign/>} />
        </Routes>
      </div>
    </>
  );
}

export default App