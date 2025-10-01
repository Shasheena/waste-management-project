import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './SellersignUp.css';
import { signup } from "../services/apiService.js";
import axios from "axios"; 

const SellerSignup = () => {
  const [formData, setFormData] = useState({
    seller_fname: "",
    seller_lname: "",
    seller_username: "",
    seller_email: "",
    seller_password: "",
    confirmPassword: "",
    city_id: "",
    other: "",
    district_id: "", 
    province_id: "",
  });

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [message, setMessage] = useState("");
  // console.log("Cities array:", cities);

  // Load cities from backend
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cities");
        setCities(response.data); // [{id:1,name:"Colombo"}, ...]
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  // Load districts from backend
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/districts");
        setDistricts(response.data); 
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };
    fetchDistricts();
  }, []);

  // Load provinces from backend
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/provinces");
        setProvinces(response.data); 
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.seller_password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    const dataToSend = {
      ...formData,
      city_id: Number(formData.city_id),
      district_id: Number(formData.district_id),
      province_id: Number(formData.province_id)
    };
    try {
      const response = await signup(dataToSend); // call backend
      // setMessage(response); // backend returns "User registered successfully!"
      alert(response);
      window.location.reload();
    } catch (error) {
      setMessage("Signup failed: " + error.message);
    }
  };
  return (
    <div className="container">
      <Link to="/Home" className="back">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>

      <h1>
        <div className="logo">
          <i className="fas fa-leaf"></i> EcoExchange
        </div>
      </h1>
      <h2>Join as a Seller</h2>
      <p>Start selling your recyclable materials today</p>

      <form onSubmit={handleSubmit}>
        <h2>Create Your Seller Account</h2>
        <p>Fill in your details to start listing your recyclable materials</p>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="seller_fname"
            value={formData.seller_fname}
            onChange={handleChange}
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="seller_lname"
            value={formData.seller_lname}
            onChange={handleChange}
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="seller_username"
            value={formData.seller_username}
            onChange={handleChange}
            placeholder="Choose a username"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="seller_email"
            value={formData.seller_email}
            onChange={handleChange}
            placeholder="Enter your email : ex:- abc123@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="seller_password"
            value={formData.seller_password}
            onChange={handleChange}
            placeholder="Maximum 6 characters"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>

        {/* <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter postal code"
          />
        </div> */}

        <div className="form-group">
          <label>First address line</label>
          <input
            type="text"
            name="other"
            value={formData.other}
            onChange={handleChange}
            placeholder="129/1A,"
          />
        </div>
        
        <div className="form-group">
          <label>City</label>
          <select
            name="city_id"
            value={formData.city_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city.city_id} value={city.city_id}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>District</label>
          <select
            name="district_id"
            value={formData.district_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a district</option>
            {districts.map((district) => (
              <option key={district.district_id} value={district.district_id}>
                {district.district_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Provinces</label>
          <select
            name="province_id"
            value={formData.province_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a province</option>
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_id}>
                {province.province_name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Create Seller Account</button>
        <p>
          Already have an account?{" "}
          <Link to="/SellersignIn" className="link">
            Sign in here
          </Link>
        </p>
      </form>

      {message && <p>{message}</p>}
      {/* <h3>Current Form Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre> */}
    </div>
  );
};

export default SellerSignup;