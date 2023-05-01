import axios from 'axios'

const API_URL = 'http://localhost:3001';

export async function createUser(username, password) {
  return new Promise((resolve, reject) => {
    const body = {
      username,
      password,
    }    
    axios
      .post(`${API_URL}/users/create`, body)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

export async function login(username, password) {
  return new Promise((resolve, reject) => {
    const body = {
      username,
      password
    }    
    axios
      .post(`${API_URL}/users/login`, body)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

export async function viewCampaigns() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/campaigns`)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {number} campaignId 
 * @returns 
 */
export async function getCampaignById(campaignId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/campaigns/${campaignId}`)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 *
 * @returns {{ depositInDrops: string }} result
 */
export async function getCreateCampaignDepositFee() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/deposit-fee/create-campaign`)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 *
 * @returns {{ depositInDrops: string }} result
 */
export async function getFundCampaignDepositFee() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/deposit-fee/fund-campaign`)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} ownerSeed
 * @param {string} depositInDrops 
 * @param {string} title 
 * @param {string} description 
 * @param {string} overviewUrl 
 * @param {string} imageUrl
 * @param {string} fundRaiseGoalInDrops 
 * @param {string} fundRaiseEndDateInUnixSeconds 
 * @param {Array<{endDateInUnixSeconds: string, title: string, payoutPercent: number}>} milestones 
 * @returns {{campaignId: number}} result
 */
export async function createCampaign(
  ownerSeed,
  depositInDrops,
  title,
  description,
  overviewUrl,
  imageUrl,
  fundRaiseGoalInDrops,
  fundRaiseEndDateInUnixSeconds,
  milestones
) {
  return new Promise((resolve, reject) => {
    const body = {
      ownerSeed,
      depositInDrops,
      title,
      description,
      overviewUrl,
      imageUrl,
      fundRaiseGoalInDrops,
      fundRaiseEndDateInUnixSeconds,
      milestones,
    }    
    axios
      .post(`${API_URL}/campaigns`, body)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} backerWalletSeed 
 * @param {number} campaignId 
 * @param {string} fundAmountInDrops 
 * @returns {{fundTransactionId: string}} result
 */
export async function fundCampaign(
  backerWalletSeed,
  campaignId,
  fundAmountInDrops
) {
  return new Promise((resolve, reject) => {
    const body = { backerWalletSeed, fundAmountInDrops}
    axios
      .post(`${API_URL}/campaigns/${campaignId}/fund-transactions`, body)
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} backerWalletSeed
 * @param {number} campaignId
 * @param {string} fundTransactionId
 * @returns {void}
 */
export async function voteReject(
  backerWalletSeed,
  campaignId,
  fundTransactionId
) {
  return new Promise((resolve, reject) => {
    const body = { backerWalletSeed }
    axios
      .post(
        `${API_URL}/campaigns/${campaignId}/fund-transactions/${fundTransactionId}/vote-reject`,
        body
      )
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} backerWalletSeed
 * @param {number} campaignId
 * @param {string} fundTransactionId
 * @returns {void}
 */
export async function voteApprove(
  backerWalletSeed,
  campaignId,
  fundTransactionId
) {
  return new Promise((resolve, reject) => {
    const body = { backerWalletSeed }
    axios
      .post(
        `${API_URL}/campaigns/${campaignId}/fund-transactions/${fundTransactionId}/vote-approve`,
        body
      )
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} backerWalletSeed
 * @param {number} campaignId
 * @param {string} fundTransactionId
 * @returns {void}
 */
export async function requestRefundPayment(
  backerWalletSeed,
  campaignId,
  fundTransactionId
) {
  return new Promise((resolve, reject) => {
    const body = { backerWalletSeed }
    axios
      .post(
        `${API_URL}/campaigns/${campaignId}/fund-transactions/${fundTransactionId}/request-refund-payment`,
        body
      )
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}

/**
 * 
 * @param {string} ownerWalletSeed
 * @param {number} campaignId
 * @param {number} milestoneIndex
 * @returns {void}
 */
export async function requestMilestonePayoutPayment(
  ownerWalletSeed,
  campaignId,
  milestoneIndex
) {
  return new Promise((resolve, reject) => {
    const body = { ownerWalletSeed }
    axios
      .post(
        `${API_URL}/campaigns/${campaignId}/milestones/${milestoneIndex}/request-milestone-payout-payment`,
        body
      )
      .then((response) => {
        if (response.status < 200 || response.status > 299) {
          reject(response.data.error)
        }
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.response.data)
      })
  })
}
