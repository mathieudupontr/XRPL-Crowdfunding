// Load the Google Sign-In API
gapi.load('auth2', function() {
  gapi.auth2.init({
    client_id: 'YOUR_CLIENT_ID',
  });
});

// Sign in the user on button click
function onSignIn() {
  gapi.auth2.getAuthInstance().signIn().then(function(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    // Send the ID token to your backend for verification
    // ...
  }, function(error) {
    console.log(JSON.stringify(error, undefined, 2));
  });
}