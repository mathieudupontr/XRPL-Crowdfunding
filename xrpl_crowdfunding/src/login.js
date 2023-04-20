import React from 'react';
import './login.css';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here, such as making a request to an API
    console.log('Signing in with:', email, password);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Handle create account logic here, such as navigating to a different page
    console.log('Creating account');
  };

  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Sign in</button>
      </form>
      <button onClick={handleCreateAccount}>Create account</button>
    </div>
  );
}

export default login;
