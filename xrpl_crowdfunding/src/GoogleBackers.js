const signInButton = document.getElementById('sign-in-button');

function init() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID',
      scope: 'email'
    });
  });
}

function signIn() {
  gapi.auth2.getAuthInstance().signIn()
    .then(function(user) {
      console.log('Signed in as ' + user.getBasicProfile().getName());
      // Handle successful sign-in
    }, function(error) {
      console.error('Sign-in error', error);
      // Handle sign-in error
    });
}

signInButton.addEventListener('click', signIn);

// Load the Google Sign-In API
gapi.load('auth2', function() {
    // Initialize the Google Sign-In API
    var auth2 = gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID_HERE'
    });
  
    // Attach click event handler to your "Sign in with Google" button
    var signInButton = document.getElementById('sign-in-button');
    signInButton.onclick = function() {
      // Request user authorization
      auth2.signIn().then(function(googleUser) {
        // Get the user profile information
        var profile = googleUser.getBasicProfile();
  
        // Send the user profile information to your server-side registration endpoint
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/register-backer');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
          if (xhr.status === 200) {
            alert('Registration successful!');
          } else {
            alert('Registration failed.');
          }
        };
        xhr.send(JSON.stringify({
          name: profile.getName(),
          email: profile.getEmail(),
          google_id: profile.getId()
          // Add any additional user data you need for your registration process
        }));
      }, function(error) {
        console.log(error);
      });
    };
  });