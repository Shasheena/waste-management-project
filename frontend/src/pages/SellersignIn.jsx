import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './SellersignUp.css'; // Import the CSS file
import { signin } from "../services/apiService.js";
import axios from "axios"; 

//creating a state object called formData with two fields. 
//setFormData is the function you’ll use to update formData
const SellerSignin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    seller_email: '',
    seller_password: ''
  });

  const [loading, setLoading] = useState(false);   
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const result = await signin(formData);
      console.log("Signin response:", result);

      if (result.status === "success") {
        // store seller email in localStorage
        localStorage.setItem("sellerEmail", result.email);
        navigate("/SdOverview");
      } else {
        // setErrorMsg(result.message || "Signin failed!");
        alert(result.message || "Signin failed!");
      }
    } catch (err) {
      console.error("Signin failed:", err);
      alert("Signin failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
            name="seller_email"
            placeholder="Enter your email "
            value={formData.seller_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password <span className="required"></span></label>
          <input
            type="password"
            name="seller_password"
            placeholder="Enter your password"
            value={formData.seller_password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox-group">
         
          <a href="/ForgotPw" className="link">Forgot password?</a>
        </div>
        <button type="submit" style={{marginTop:"10px", marginLeft:"", width:"200px"}}>Sign In</button>
        <p>Don't have an account? <a href="/SellersignUp" className="link">Sign up as a seller</a></p>
        
      </form>
    </div>
  );
};

export default SellerSignin;