// Load the Google API client library.
gapi.load('client:auth2', initAuth);

// Initialize the Google Sign-In API.
function initAuth() {
  gapi.client.init({
    apiKey: 'YOUR_API_KEY',
    clientId: 'YOUR_CLIENT_ID',
    scope: 'profile email',
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}
// Update the UI based on the user's sign-in status.
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    // The user is signed in.
    var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
    
    // Use the profile and access token to authenticate the user on your server.
    authenticateUser(profile.getId(), accessToken);
  } else {
    // The user is not signed in.
    // Show the Google Sign-In button.
    renderButton();
  }
}

// Render the Google Sign-In button.
function renderButton() {
  gapi.signin2.render('google-signin-button', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSignIn,
  });
}

// Handle a successful Google Sign-In.
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var accessToken = googleUser.getAuthResponse().access_token;

  // Use the profile and access token to authenticate the user on your server.
  authenticateUser(profile.getId(), accessToken);
}

// Send the user's profile ID and access token to your server for authentication.
function authenticateUser(profileId, accessToken) {
  // Send an AJAX request to your server to authenticate the user.
  // Replace "YOUR_SERVER_URL" with the URL of your server authentication endpoint.
  $.ajax({
    url: 'YOUR_SERVER_URL',
    type: 'POST',
    data: {
      profile_id: profileId,
      access_token: accessToken,
    },
    success: function (response) {
      // Handle the server response.
      console.log(response);
    },
    error: function (xhr, status, error) {
      // Handle the error.
      console.error(error);
    },
  });
}