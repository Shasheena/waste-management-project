import React from "react";
import "./Itemlisting.css";
import { FaBox, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const listings = [
  {
    name: "Clean Plastic Shopping Bags",
    price: "₹45",
    qty: "5 kg",
    seller: "@recycler123",
    city: "Mumbai, Maharashtra",
  },
  {
    name: "Transparent Polythene Sheets",
    price: "₹80",
    qty: "10 kg",
    seller: "@greenTrader",
    city: "Delhi, Delhi",
  },
  {
    name: "Food Grade Plastic Bags",
    price: "₹120",
    qty: "8 kg",
    seller: "@wasteToWealth",
    city: "Bangalore, Karnataka",
  },
  {
    name: "Industrial Polythene Wrapping",
    price: "₹200",
    qty: "15 kg",
    seller: "@recyclrKing",
    city: "Chennai, Tamil Nadu",
  },
  {
    name: "Mixed Polythene Materials",
    price: "₹60",
    qty: "12 kg",
    seller: "@sustainableSeeker",
    city: "Pune, Maharashtra",
  },
  {
    name: "Clear Packaging Films",
    price: "₹95",
    qty: "7 kg",
    seller: "@ecoWarrior",
    city: "Hyderabad, Telangana",
  },
  {
    name: "Colored Polythene Bags",
    price: "₹75",
    qty: "6 kg",
    seller: "@greenDealer",
    city: "Kolkata, West Bengal",
  },
  {
    name: "Heavy Duty Plastic Sheets",
    price: "₹150",
    qty: "20 kg",
    seller: "@bulkRecycler",
    city: "Ahmedabad, Gujarat",
  },
];

function Itemlisting() {
  return (
    <div className="listings-container">
      {/* Header */}
      <div className="header">
        <h2>Polythene Listings</h2>
        <p>{listings.length} items available</p>
      </div>

      {/* Search + Filter */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search polythene items, sellers, or locations..."
        />
        <button className="filter-btn">Filters</button>
      </div>

      {/* Category Banner */}
      <div className="category-banner">
        <strong>Polythene Materials</strong>
        <p>Plastic bags, covers, wrapping materials, and films</p>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {listings.map((item, index) => (
          <div key={index} className="card">
            <div className="card-icon">
              <FaBox size={40} />
            </div>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="qty">Qty: {item.qty}</p>
            <p className="seller">
              <FaUser style={{ marginRight: "5px" }} />
              Seller: {item.seller}
            </p>
            <p className="location">
              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
              {item.city}
            </p>
            <button className="pickup-btn">Confirm Pickup</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itemlisting;
