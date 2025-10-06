import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { getPickupStatsBySeller, getInterestedCountBySeller } from '../services/apiService';

const SdOverview = () => {
  const navigate = useNavigate();

  const goToAddItem = () => {
    navigate("/AddItem");
  };
  const goToMyItems = () => {
    navigate("/MyItems");
  };
  const goToProfile = () => {
    navigate("/Profile");
  };
  const [pickupCount, setPickupCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [interestCount, setInterestCount] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      const sellerEmail = localStorage.getItem("sellerEmail");
      if (sellerEmail) {
        const pickupStats = await getPickupStatsBySeller(sellerEmail);
        setPickupCount(pickupStats.totalPickups);
        setTotalEarnings(pickupStats.totalEarnings);

        const interestedCount = await getInterestedCountBySeller(sellerEmail);
        setInterestCount(interestedCount);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1><i className="fa-solid fa-user"></i> Seller Dashboard</h1>
        <button><i className="fa-solid fa-arrow-right"></i> Exit Dashboard</button>
      </div>

      <nav className="nav">
        <a href="/SdOverview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
        <a href="/MyItems"><i className="fa-solid fa-box"></i> My Items</a>
        <a href="/AddItem"><i className="fa-solid fa-plus"></i> Add Item</a>
        <a href="/Profile"><i className="fa-solid fa-user"></i> Profile</a>
      </nav>

      <div className="stats">
        <div className="stat-box">
          <span><i className="fa-solid fa-bag-shopping"></i> Total Pickup Confirmations</span>
          <p>{pickupCount}</p>
        </div>
        <div className="stat-box">
          <span><i className="fa-solid fa-money-bill"></i> Rs. Total Earnings</span>
          <p>Rs. {totalEarnings}</p>
        </div>
        <div className="stat-box">
          <span><i className="fa-solid fa-heart"></i> Interest Shown</span>
          <p>{interestCount}</p>
        </div>
      </div>

      <h3>Quick Actions</h3>
      <div className="actions">
        <button className="action-btn add" onClick={goToAddItem}><i className="fa-solid fa-plus"></i> Add New Item</button>
        <button className="action-btn view" onClick={goToMyItems}><i className="fa-solid fa-box"></i> View My Items</button>
        <button className="action-btn update" onClick={goToProfile}><i className="fa-solid fa-user"></i> Update Profile</button>
      </div>

      {/* <div className="recent-items">
        <h3>Recent Items</h3>
      </div> */}
    </div>
  );
};

export default SdOverview;
