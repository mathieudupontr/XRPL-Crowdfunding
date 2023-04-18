import {
  createCampaign,
  fundCampaign,
  getCampaignById,
  getCreateCampaignDepositFee,
  getFundCampaignDepositFee,
  requestMilestonePayoutPayment,
  requestRefundPayment,
  viewCampaigns,
  voteApprove,
  voteReject
} from './apiRequests.mjs'

viewCampaigns().then((campaigns) => {
  console.log(campaigns)
})

getCampaignById(2042956423).then((campaign) => {
  console.log(campaign)
})

getCreateCampaignDepositFee().then((response) => {
  console.log(response)
})

getFundCampaignDepositFee().then((response) => {
  console.log(response)
})

createCampaign(
  'sEdTnBCwVL4t9emryeQ1EsS8JjMQgYg',
  '100000100',
  'OFF-LEDGER DATA',
  'OFF-LEDGER DATA',
  'OFF-LEDGER DATA',
  '100000000',
  '1684092168',
  [
    {
      endDateInUnixSeconds: '1686770568',
      title: 'OFF-LEDGER DATA',
      payoutPercent: 25
    },
    {
      endDateInUnixSeconds: '1689362568',
      title: 'OFF-LEDGER DATA',
      payoutPercent: 25
    },
    {
      endDateInUnixSeconds: '1694719368',
      title: 'OFF-LEDGER DATA',
      payoutPercent: 50
    }
  ]
).then((campaignId) => {
  console.log(campaignId)
})

fundCampaign(
  'sEdTnBCwVL4t9emryeQ1EsS8JjMQgYg',
  2042956423,
  '310000010'
).then((response) => {
  console.log(response)
})

voteReject(
  'sEdT5FbG9pHUpYRi5eEavMFTx7jkdYv',
  2585310584,
  0
).then((response) => {
  console.log(response)
})

voteApprove(
  'sEdT5FbG9pHUpYRi5eEavMFTx7jkdYv',
  2585310584,
  0
).then((response) => {
  console.log(response)
})

requestRefundPayment(
  'sEdTk6eUsU3iuo3ygQL4qubNunqnfZH',
  1984412771,
  0
).then((response) => {
  console.log(response)
})

requestMilestonePayoutPayment(
  'sEdS7Bf9U38m2kjFbE7fYyGaVSRp1Xm',
  2585310584,
  1
).then((response) => {
  console.log(response)
})
