// Client ID and API key from the Developer Console
const CLIENT_ID = 'YOUR_CLIENT_ID';
const API_KEY = 'YOUR_API_KEY';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
];

// Authorization scopes required by the API; multiple scopes can be included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  }, function (error) {
    console.error(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI appropriately.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    // User is signed in, show relevant UI elements
    // and send user data to server for creator registration.
    const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    const email = profile.getEmail();
    const name = profile.getName();
    const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;

    // Send data to server for creator registration.
    registerCreator(email, name, token);
  } else {
    // User is not signed in, hide relevant UI elements.
  }
}

/**
 *  Send data to server for creator registration.
 */
function registerCreator(email, name, token) {
  // Send data using fetch() or jQuery.ajax()
  // ...
}