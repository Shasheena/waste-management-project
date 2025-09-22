import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellersignUp.css'; // Import the CSS file

const ForgotPw = () => {
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
      <a href="/option" className="back">
        <i className="fas fa-arrow-left"></i> {/* Font Awesome arrow-left icon */}
        Back 
      </a>
      <div className="logo">
        
        <h2><i className="fas fa-leaf"></i>EcoExchange</h2>
      </div>
      <p>Welcome back to EcoExchange</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username <span className="required"></span></label>
          <input
            type="username"
            name="username"
            placeholder="Enter your username "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
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
          <label>New Password <span className="required"></span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="update">Reset your Password</button>
       
        
      </form>
    </div>
  );
};

export default ForgotPw;