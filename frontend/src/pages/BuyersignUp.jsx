import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SellersignUp.css";
import { fetchCities, fetchDistricts, fetchProvinces, buyerSignup } from "../services/apiService";

const BuyerSignup = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    city_id: "",
    district_id: "",
    province_id: "",
  });

  // Load all dropdown data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [cityData, districtData, provinceData] = await Promise.all([
          fetchCities(),
          fetchDistricts(),
          fetchProvinces(),
        ]);
        setCities(cityData);
        setDistricts(districtData);
        setProvinces(provinceData);
      } catch (error) {
        console.error("Error loading dropdown data:", error);
      }
    };
    loadData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const buyerData = {
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      password: formData.password,
      city_id: formData.city_id,
      province_id: parseInt(formData.province_id),
      district_id: parseInt(formData.district_id),
      other: formData.addressLine1,
    };
    // console.log("Signup data being sent to backend:", buyerData);
    try {
      await buyerSignup(buyerData);
      alert("Buyer account created successfully!");
      window.location.href = "/BuyersignIn"
    } catch (error) {
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <div className="container">
      <a href="/Home" className="back">
        <i className="fas fa-arrow-left"></i> Back
      </a>

      <h1>
        <div className="logo">
          <i className="fas fa-leaf"></i> EcoExchange
        </div>
      </h1>
      <h2>Join as a Buyer</h2>
      <p>Join as a Buyer to purchase recyclable materials</p>

      <form onSubmit={handleSubmit}>
        <h2>Create Your Buyer Account</h2>
        <p>Fill in your details to start purchasing</p>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First name"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last name"
            required
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label>Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="Enter the first line: 129/1A.."
            required
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
            <option value="">Select City</option>
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
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.district_id} value={district.district_id}>
                {district.district_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Province</label>
          <select
            name="province_id"
            value={formData.province_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Province</option>
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_id}>
                {province.province_name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Create Buyer Account</button>

        <p>
          Already have an account?{" "}
          <Link to="/BuyersignIn" className="link">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default BuyerSignup;
