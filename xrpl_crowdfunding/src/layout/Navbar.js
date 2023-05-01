import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../UserProvider";
import './Navbar.css';

function Navbar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [])

  return (
    <nav className="navbar">
      <Link to="/homepage" className="navbar-brand">XRPL Crowdfunding</Link>
      <ul className="navbar-nav">
        {
          user &&
          (
            <>
              <li className="nav-item">
                <span>{user.username}</span>
              </li>
              <li className="nav-item">
                <span>{user.wallet.classicAddress}</span>
              </li>
            </>
          )
        }
        <li className="nav-item">
          <Link to="/homepage" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
