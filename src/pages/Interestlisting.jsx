import React from "react";
import { FaTrash, FaHeart, FaUser, FaMapMarkerAlt, FaBox } from "react-icons/fa";
import "./Interestlisting.css";

const items = [
  {
    id: 1,
    name: "Clean Plastic Shopping Bags",
    category: "Polythene",
    price: "₹45",
    qty: "5 kg",
    seller: "@ecoSeller123",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    name: "Transparent Polythene Sheets",
    category: "Polythene",
    price: "₹80",
    qty: "10 kg",
    seller: "@greenTrader",
    location: "Delhi, Delhi",
  },
  {
    id: 3,
    name: "Food Grade Plastic Bags",
    category: "Polythene",
    price: "₹120",
    qty: "8 kg",
    seller: "@wasteToWealth",
    location: "Bangalore, Karnataka",
  },
  {
    id: 4,
    name: "Industrial Polythene Wrapping",
    category: "Polythene",
    price: "₹200",
    qty: "15 kg",
    seller: "@recycleKing",
    location: "Chennai, Tamil Nadu",
  },
];

export default function InterestList() {
  return (
    <div className="interest-container">
      {/* Page Header */}
      <h2 className="interest-title">
        <FaHeart className="heart-icon" /> My Interest List
      </h2>
      <p className="subtitle">4 items saved</p>

      {/* Alert Box */}
      <div className="alert-box">
        <p className="alert-title">Your Saved Items</p>
        <p className="alert-sub">Items you're interested in purchasing</p>
      </div>

      {/* Items Grid */}
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            {/* Top Icons */}
            <button className="delete-btn">
              <FaTrash />
            </button>
            <button className="fav-btn">
              <FaHeart />
            </button>

            {/* Icon */}
            <div className="item-icon">
              <FaBox />
            </div>

            {/* Item Name */}
            <h3 className="item-name">{item.name}</h3>

            {/* Category Badge */}
            <span className="item-category">{item.category}</span>

            {/* Price & Qty */}
            <p className="item-price">{item.price}</p>
            <p className="item-qty">Qty: {item.qty}</p>

            {/* Seller Info */}
            <p className="item-info">
              <FaUser /> Seller: {item.seller}
            </p>
            <p className="item-info">
              <FaMapMarkerAlt /> {item.location}
            </p>

            {/* Pickup Button */}
            <button className="pickup-btn">Confirm Pickup</button>
          </div>
        ))}
      </div>
    </div>
  );
}
