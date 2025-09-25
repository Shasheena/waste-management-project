import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
     <div className="home" style={{ backgroundImage: 'url(/assets/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">EchoExchange</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/signin" className="nav-btn">SignIn</Link></li>
          <li><Link to="/signup" className="nav-btn">SignUp</Link></li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="home-title">
          Turn Your <span className="highlight">Waste</span> <br /> Into Wealth
        </h1>
        <p className="home-description">
          Join EchoExchange, the revolutionary marketplace where households and 
          businesses exchange recyclable waste for cash, rewards, and benefits. 
          Build a sustainable future together.
        </p>

        <div className="home-btns">
          <Link to="/option">
            <button className="home-btn">Get Started</button>
          </Link>
          <Link to="/about">
            <button className="home-btn alt">Learn More</button>
          </Link>
        </div>
      </div>

      {/* Info Cards */}
      <div className="home-cards">
        <div className="home-card">
          <strong>Circular Economy</strong>
          <p>Contribute to a greener world</p>
        </div>
        <div className="home-card">
          <strong>Earn Money</strong>
          <p>Cash rewards for your waste</p>
        </div>
        <div className="home-card">
          <strong>Community Impact</strong>
          <p>Better neighborhoods</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
