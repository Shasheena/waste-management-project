import React from 'react';
import './Dashboard.css';

const SdOverview = () => {

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2><i class="fa-solid fa-user"></i>  Seller Dashboard - </h2>
        <button ><i class="fa-solid fa-arrow-right"></i>  Exit Dashboard</button>
      </div>
      <nav className="nav">
  <a href="#">
    <i className="fa-solid fa-box-isometric"></i> Overview
  </a>
  <a href="/my_items">
    <i className="fa-solid fa-box"></i> My Items
  </a>
  <a href="add_items">
    <i className="fa-solid fa-plus"></i> Add Item
  </a>
  <a href="profile">
    <i className="fa-solid fa-user"></i> Profile
  </a>
</nav>

      <div className="stats">
  <div className="stat-box">
    <span>
      <i className="fa-solid fa-bag-shopping"></i> Total Sold Items
    </span>
    <p>0</p>
  </div>
  <div className="stat-box">
    <span>
      <i className="fa-solid fa-dollar-sign"></i> Total Earnings
    </span>
    <p>$0</p>
  </div>
  <div className="stat-box">
    <span>
      <i className="fa-solid fa-heart"></i> Interest Shown
    </span>
    <p>0</p>
  </div>
</div>

     <h3>Quick Actions</h3>
<div className="actions">
  <button className="action-btn add">
    <i className="fa-solid fa-plus"></i> Add New Item
  </button>
  <button className="action-btn view">
    <i className="fa-solid fa-box"></i> View My Items
  </button>
  <button className="action-btn update">
    <i className="fa-solid fa-user"></i> Update Profile
  </button>
</div>

      <div className="recent-items">
        <h3>Recent Items</h3>
        
      </div>
    </div>
  );
};

export default SdOverview;