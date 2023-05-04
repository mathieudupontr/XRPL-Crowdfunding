import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';
import { createUser, login } from './util/apiRequests.mjs';
import { UserContext } from './UserProvider';
import image from './ledger_logo.png';

function SignInPage() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    // Handle sign-in logic here, such as making a request to an API
    console.log('Signing in with:', email, password);

    try {
      const loginResponse = await login(email, password);
      const wallet = loginResponse.wallet;

      // Navigate to the home page
      setUser({ username: email, wallet })
      navigate('/');
    } catch (error) {
      if (error.includes("User doesn't exist")) {
        alert('User does not exist. Please create an account.')
      } else {
        throw new Error(error)
      }
    }
  };

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    // Handle create account logic here, such as navigating to a different page
    console.log('Creating account');

    const createUserResponse = await createUser(email, password);
    const wallet = createUserResponse.wallet;

    // Navigate to the home page
    setUser({ username: email, wallet })
    navigate('/');
  };

  return (
    <>
    <div className="HomePage">
      <div className="hero-container1">
        <h1>Welcome on the XRPL Crowdfunding Platform</h1>
        <p>Join the community and contribute to innovative ideas</p>
        <div className="container">
        <img className="image" src={image} alt="existing_image" />
        </div>
      </div>
      <div className="projects-container">
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
    </div>
  </>
  );
}

export default SignInPage;
