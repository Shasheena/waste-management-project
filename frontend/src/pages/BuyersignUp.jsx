import React from 'react';
import { Link } from 'react-router-dom';
import './SellersignUp.css';

const SellerSignup = () => (
  <div className="container">
    <a href="/" className="back"><i className="fas fa-arrow-left"></i>  Back </a>
    
    <h1><div className="logo"><i className="fas fa-leaf " ></i>  EcoExchange</div></h1>
    <h2>Join as a Buyer</h2>
    <p>Join as a Buyer to purchase recyclable materials </p>
    <form>
        <h2>Create Your Buyer Account</h2>
        <p>Fill in your details to start purchase</p>
      <div className="form-group">
        <label>First Name</label>
        <input type="text"  placeholder="First name" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Last name" />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" placeholder="Choose a username" />
      </div>
     <div className="form-group">
 <label>Email</label>
    <input type="email" id="email" placeholder="Enter your email" />
  </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="create a password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" placeholder="confirm your password" />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Enter your full address including city, state, and postal code" />
      </div>
      <button type="submit">Create Seller Account</button>
      <p>Already have an account? <a href="/buyer_signin" className="link">Sign in here</a></p>
    </form>
  </div>
);

export default SellerSignup;