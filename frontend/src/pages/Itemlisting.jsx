import React, { useState, useEffect } from "react";
import "./Itemlisting.css";
import { FaBox, FaMapMarkerAlt, FaUser, FaHeart } from "react-icons/fa";
import { getAllItems, getSellerByEmail, getAddressById } from "../services/apiService";

function Itemlisting() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch all items from backend
    getAllItems().then(async (res) => {
      const itemsWithDetails = await Promise.all(
        res.map(async (item) => {
          // fetch seller info
          const seller = await getSellerByEmail(item.sellerEmail);
          console.log(seller.address_id);
          // fetch address info
          const address = await getAddressById(seller.address_id);
          console.log(address);
          return {
            ...item,
            sellerUsername: seller.seller_username,
            city: address.city,      // assuming city has a 'name' field
            district: address.district,  // assuming district has a 'name' field
          };
          
        })
        
      );
      setItems(itemsWithDetails);
    });
  }, []);

  return (
    <div className="listings-container">
      <div className="header">
        <h2>Polythene Listings</h2>
        <p>{items.length} items available</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search polythene items, sellers, or locations..." />
        <button className="filter-btn">Filters</button>
      </div>

      <div className="category-banner">
        <strong>Polythene Materials</strong>
        <p>Plastic bags, covers, wrapping materials, and films</p>
      </div>

      <div className="cards-grid">
        {items.map((item, index) => (
          <div key={index} className="card">
            {/* Item Image */}
            {item.imagePath && (
              <img src={`http://localhost:8082/${item.imagePath}`} alt={item.description} className="item-image" />
            )}
            <div className="card-icon">
              <FaBox size={40} />
            </div>
            <h3>{item.description}</h3>
            <p className="price">Rs. {item.unitPrice}</p>
            <p className="qty">Qty: {item.qty}</p>
            <p className="seller">
              <FaUser style={{ marginRight: "5px" }} />
              Seller: {item.sellerUsername}
            </p>
            <p className="location">
              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
              {item.city}, {item.district}
            </p>
            <div className="card-actions">
              <button className="pickup-btn">Confirm Pickup</button>
              <FaHeart className="like-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itemlisting;
