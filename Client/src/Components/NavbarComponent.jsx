import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/bullish.png';
import '../Styles/Navbar.css';
import { useAuth } from '../store/auth';
import Profile from './profile';

const NavbarComponent = () => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: '40px',
                  marginRight: '10px',
                  marginBottom: '-5px',
                }}
              />
              StockEd TSEC
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/market">Market</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/PersonalFinance">Personal Finance</NavLink>
                  </li>
                  <li>
                    <NavLink to="/chatbot">Chatbot</NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li>
                    <Profile />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <hr />
    </>
  );
};

export default NavbarComponent;