import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import { UserProvider } from '../UserProvider'
import SignInPage from '../SignInPage'
import Howitworks from '../Howitworks'
import HomePage from '../HomePage'
import CreateCampaign from '../CreateCampaign'
import CampaignPage from '../CampaignPage'
import Donate from '../Donate'
import Vote from '../Vote'

export const Page = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<SignInPage />} />
          <Route path="/how-it-works" element={<HowItworks/>} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign/:campaignId" element={<CampaignPage/>} />
          <Route path="/campaign/:campaignId/donate" element={<Donate/>} />
          <Route path="/campaign/:campaignId/vote" element={<Vote />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
