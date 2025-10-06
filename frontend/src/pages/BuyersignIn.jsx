import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { buyerSignIn } from '../services/apiService';
import './SellersignUp.css'; // Reuse same styling

const BuyersignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Buyer sign-in data being sent:", formData);

    try {
      const response = await buyerSignIn(formData);
      console.log("Sign-in success:", response);

      if (response === "Login successful!") {
        alert("Welcome back!");
        localStorage.setItem("buyerEmail", formData.email); // Store buyer info
        navigate("/Itemlisting"); 
      } else {
        alert(response); // "Invalid email or password!"
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Something went wrong while signing in!");
    }
  };

  return (
    <div className="container">
      <a href="/option" className="back">
        <i className="fas fa-arrow-left"></i> Back
      </a>

      <div className="logo">
        <h2><i className="fas fa-leaf"></i> EcoExchange</h2>
      </div>

      <p>Welcome back to EcoExchange</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email <span className="required"></span></label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
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

        <p>
          Don't have an account?{" "}
          <Link to="/BuyersignUp" className="link">Sign up as a Buyer</Link>
        </p>
      </form>
    </div>
  );
};

export default BuyersignIn;
