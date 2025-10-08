import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Dashboard.css';

const Profile = () => {
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleExit = () => {
    navigate("/"); // go to home page
  };

 return (
    <div className="dashboard-container">
      <div className="header">
        <h2><i className="fa-solid fa-user"></i> Seller Dashboard</h2>
        <button onClick={handleExit}><i className="fa-solid fa-arrow-right"></i> Exit Dashboard</button>
      </div>

      <nav className="nav">
        <a href="/Sdoverview"><i className="fa-solid fa-box-isometric"></i> Overview</a>
        <a href="/MyItems"><i className="fa-solid fa-box"></i> My Items</a>
        <a href="/AddItem"><i className="fa-solid fa-plus"></i> Add Item</a>
        <a href="/Profile"><i className="fa-solid fa-user"></i> Profile</a>
      </nav>
       <div className="profile-container">
      <h2>Update Profile</h2>
      {/* <div className="profile-photo">
        <div className="photo-placeholder" style={{ backgroundImage: photoPreview ? `url(${photoPreview})` : 'none' }}></div>
        <label className="change-photo-btn">
          Change Photo
          <input type="file" accept="image/jpeg,image/png" onChange={handlePhotoChange} style={{ display: 'none' }} />
        </label>
        <p>JPG, PNG up to 2MB</p>
      </div> */}
      </div>
       <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value="" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value="" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value="" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" value="" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea value="" />
        </div>
        <div className="buttons">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="update-btn">Update Profile</button>
        </div>
      </form>
      </div>
      
 );
}
export default Profile;