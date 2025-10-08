import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaHeart, FaMapMarkerAlt, FaUser, FaTrashAlt } from "react-icons/fa";
import "./Interestlisting.css";
import { getSellerByEmail, getAddressById, removeInterestItem } from "../services/apiService";
import axios from "axios";

export default function InterestList() {
  const [interests, setInterests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const buyerEmail = localStorage.getItem("buyerEmail");
    if (!buyerEmail) {
      alert("Please sign in as a buyer!");
      return;
    }

    axios
      .get(`http://localhost:8082/api/interests/buyer`, { params: { buyerEmail } })
      .then(async (res) => {
        const itemsWithDetails = await Promise.all(
          res.data.map(async (interest) => {
            const item = interest;
            const seller = await getSellerByEmail(item.sellerEmail);
            const address = await getAddressById(seller.address_id);

            return {
              ...item,
              sellerUsername: seller.seller_username,
              city: address.city,
              district: address.district,
            };
          })
        );
        setInterests(itemsWithDetails);
      })
      .catch((err) => console.error("Error fetching interests:", err));
  }, []);

  const handlePickup = (id) => {
    navigate(`/PickupPage/${id}`);
  };

  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to remove this item?")) return;
    try {
      await removeInterestItem(id);
      setInterests((prev) => prev.filter((item) => item.id !== id));
      alert("Item removed successfully!");
    } catch (error) {
      console.error("Error removing item:", error);
      alert("Failed to remove item!");
    }
  };

  return (
    <div className="listings-container">
      <div className="header">
        <h2>
          <FaHeart className="heart-icon" /> My Interest List
        </h2>
        <p>{interests.length} items saved</p>
      </div>

      <div className="cards-grid">
        {interests.map((item, index) => (
          <div key={index} className="itemCard">
            <div className="remove-icon" onClick={() => handleRemove(item.id)}>
              <FaTrashAlt />
            </div>

            {item.imagePath && (
              <img
                src={`http://localhost:8082/${item.imagePath}`}
                alt={item.description}
                className="item-image"
              />
            )}
            <h2>{item.description}</h2>
            <p className="price">Unit Price: Rs. {item.unitPrice}</p>
            <p className="qty">
              <strong>Qty:</strong> {item.qty}
            </p>
            <p className="price">
              <strong>Total Price:</strong> Rs. {item.totalPrice}
            </p>
            <p className="seller">
              <FaUser style={{ marginRight: "5px" }} />
              <strong>Seller:</strong> {item.sellerUsername}
            </p>
            <p className="location">
              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
              {item.city}, {item.district}
            </p>
            <p className="seller">
              <strong>Status:</strong> {item.statusName}
            </p>
            <div className="card-actions">
              <button
                className="pickup-btn"
                onClick={() => handlePickup(item.id)}
              >
                Confirm Pickup
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
