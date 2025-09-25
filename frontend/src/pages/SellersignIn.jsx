import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellersignUp.css'; // Import the CSS file

const SellerSignin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation example
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="container">
      <a href="/" className="back">
        <i className="fas fa-arrow-left"></i> {/* Font Awesome arrow-left icon */}
        Back to Home
      </a>
      <div className="logo">
        
        <h2><i className="fas fa-leaf"></i>EcoExchange</h2>
      </div>
      <p>Welcome back to EcoExchange</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email <span className="required"></span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password <span className="required"></span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox-group">
         
          <a href="/forgotpw" className="link">Forgot password?</a>
        </div>
        <button type="submit">Sign In</button>
        <p>Don't have an account? <a href="/seller_signup" className="link">Sign up as a seller</a></p>
        
      </form>
    </div>
  );
};

export default SellerSignin;